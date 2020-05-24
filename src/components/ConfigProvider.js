import { useMemo } from 'react';

const config = {
  lang: {
    ok: 'OK',
    cancel: 'Cancel',
    sun: 'Sun',
    sunday: 'Sunday',
    mon: 'Mon',
    monday: 'Monday',
    tue: 'Tue',
    tueday: 'Tueday',
    wed: 'Wed',
    wednesday: 'Wednesday',
    thu: 'Thu',
    thurday: 'Thurday',
    fri: 'Fri',
    friday: 'Friday',
    sat: 'Sat',
    saturday: 'Saturday',
    jan: 'Jan',
    january: 'January',
    feb: 'Feb',
    february: 'February',
    mar: 'Mar',
    march: 'March',
    apr: 'Apr',
    april: 'April',
    may: 'May',
    jun: 'Jun',
    june: 'June',
    jul: 'Jul',
    july: 'July',
    aug: 'Aug',
    august: 'August',
    sep: 'Sep',
    september: 'September',
    oct: 'Oct',
    october: 'October',
    nov: 'Nov',
    november: 'November',
    dec: 'Dec',
    december: 'December',
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
