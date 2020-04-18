import displayName from './displayName';

export default function getMenuInfo(children) {
  const info = {
    items: {},
    groups: {},
    subs: {},
  };

  function lookingItems(data) {
    for(let i = 0; i < data.length; i++) {
      if (data[i].type.displayName === displayName.group) {
        info.groups[data[i].key] = {
          key: data[i].key,
        };
      }

      if (data[i].type.displayName === displayName.sub) {
        info.subs[data[i].key] = {
          key: data[i].key,
        };
      }

      if (data[i].type.displayName === displayName.item) {
        info.items[data[i].key] = {
          ...data[i].props,
          key: data[i].key,
        };

        continue;
      }

      lookingItems(data[i].props.children);
    }
  }

  lookingItems(children);
  return info;
}
