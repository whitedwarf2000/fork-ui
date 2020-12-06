export default (date) => {
  const _month = date.getMonth();
  const _year = date.getFullYear();
  return new Date(_year, _month + 1, 0);
};
