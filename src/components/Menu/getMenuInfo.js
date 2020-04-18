export default function getMenuInfo(children) {
  const itemDislayName = 'Menu.Item';
  const groupDislayName = 'Menu.ItemGroup';
  const subDislayName = 'Menu.Sub';

  const info = {
    items: {},
    groups: {},
    subs: {},
  };

  function lookingItems(data) {
    for(let i = 0; i < data.length; i++) {
      if (data[i].type.displayName === groupDislayName) {
        info.groups[data[i].key] = {
          key: data[i].key,
        };
      }

      if (data[i].type.displayName === subDislayName) {
        info.subs[data[i].key] = {
          key: data[i].key,
        };
      }

      if (data[i].type.displayName === itemDislayName) {
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
