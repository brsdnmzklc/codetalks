export default data => {
  if (data === null) {
    return;
  }
  return Object.keys(data)
    .map(e => {
      return {
        id: e,
        content: data[e],
      };
    })
    .sort(function (date1, date2) {
      date1 = new Date(date1);
      date2 = new Date(date2);
      if (date1 > date2) {
        return 1;
      }
      if (date1 < date2) {
        return -1;
      }
    });
};
