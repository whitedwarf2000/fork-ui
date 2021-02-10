import { useState, useCallback } from 'react';

const useMultiSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const onSelect = useCallback((key, value, data) => {
    setSelectedOptions((prevSelectedOptions) => {
      const nextSelectedOptions = {};
      let isNotExist = true;
      for(const optionKey in prevSelectedOptions) {
        if (optionKey === key) {
          isNotExist = false;
        }

        nextSelectedOptions[optionKey] = prevSelectedOptions[optionKey];
      }

      if (isNotExist) {
        nextSelectedOptions[key] = {
          key: key,
          value: value,
          data: data,
        }
      }

      return nextSelectedOptions;
    });
  }, [setSelectedOptions]);

  const onDeselect = useCallback((key) => {
    setSelectedOptions((prevSelectedOptions) => {
      const nextSelectedOptions = {};
      for(const optionKey in prevSelectedOptions) {
        if (optionKey === key) {
          continue;
        }

        nextSelectedOptions[optionKey] = prevSelectedOptions[optionKey];
      }

      return nextSelectedOptions;
    });
  }, [setSelectedOptions]);

  const onToggleSelect = useCallback((key, value, data) => {
    setSelectedOptions((prevSelectedOptions) => {
      const nextSelectedOptions = {};
      let isNotExist = true;
      for(const optionKey in prevSelectedOptions) {
        if (optionKey === key) {
          isNotExist = false;
          continue;
        }
        
        nextSelectedOptions[optionKey] = prevSelectedOptions[optionKey];
      }

      if (isNotExist) {
        nextSelectedOptions[key] = {
          key: key,
          value: value,
          data: data,
        }
      }

      return nextSelectedOptions;
    });
  }, [setSelectedOptions]);

  const onRemoveLastSelectedOption = useCallback(() => {
    setSelectedOptions((prevSelectedOptions) => {
      const selectedOptionKeys = Object.keys(prevSelectedOptions);
      if (selectedOptionKeys.length) {
        const lastSelectedOptionKey = selectedOptionKeys[selectedOptionKeys.length - 1];
        return selectedOptionKeys.reduce((rs, key) => {
          if (lastSelectedOptionKey !== key) {
            rs[key] = prevSelectedOptions[key];
          }
          return rs;
        }, {});
      }

      return prevSelectedOptions;
    });
  }, [setSelectedOptions]);

  return [{
    selectedOptions,
    onSelect,
    onDeselect,
    onToggleSelect,
    onRemoveLastSelectedOption,
  }, {
    setSelectedOptions,
  }]
};

export default useMultiSelect;
