import { useMemo } from 'react';

const config = {
  lang: {
    ok: 'OK',
    cancel: 'Cancel',
  },
  icons: [
    'x',
    'eye',
    'caret-down',
    'caret-up',
    'arrow-narrow-up',
  ],
  cssVars: {},
};

const setLang = (lang) => {
  if (lang) {
    config.lang = {
      ...config.lang,
      ...lang,
    };
  }
};

const setIcons = (icons) => {
  if (icons) {
    config.icons = [...new Set(config.icons.concat(icons))];
  }
};

export default ({ lang, icons }) => {
  setLang(lang);
  setIcons(icons);

  return ({ children }) => {
    useMemo(() => lang, []);
    useMemo(() => icons, []);

    return children;
  }
};

export { config };
