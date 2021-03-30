const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error();
  }
  if (!date) {
    return "Unable to determine the time of year!";
  }

  if (date.getMonth() == 11 || date.getMonth() == 0 || date.getMonth() == 1) {
    return "winter";
  }
  if (date.getMonth() > 1 && date.getMonth() <= 4) {
    return "spring";
  }
  if (date.getMonth() > 4 && date.getMonth() <= 7) {
    return "summer";
  }
  if (date.getMonth() > 7 && date.getMonth() <= 10) {
    return "autumn";
  }
};
