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


export default ({ lang }) => {
  setLang(lang);

  return ({ children }) => {
    useMemo(() => lang, []);

    return children;
  }
};

export { config };
