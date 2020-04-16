import { useMemo, useState, useEffect, useCallback } from 'react';

export default (propName, props, config) => {
  const isControlled = useMemo(() => props.hasOwnProperty(propName), [propName]);
  const [state, setState] = useState(isControlled ? props[propName] : config.defaultState);

  const onChange = useCallback((val) => {
    if (isControlled) {
      return config.onChangeState(val);
    }

    return setState(val);
  }, [isControlled, config.onChangeState]);

  useEffect(() => {
    if (isControlled) {
      setState(props[propName]);
    }
  }, [props[propName], isControlled]);

  useMemo(() => config.onChangeState(state), [state]);

  return [state, onChange, isControlled];
};
