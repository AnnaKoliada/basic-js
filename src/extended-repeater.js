const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  if (typeof str !== "string") {
    str = String(str);
  }
  if (typeof options.addition !== "string") {
    options.addition = String(options.addition);
  }

  if (options.separator == undefined) options.separator = "+";
  if (options.additionSeparator == undefined) options.additionSeparator = "|";

  let arr = [];
  for (let i = 1; i <= options.additionRepeatTimes; i++) {
    let a = options.addition;
    arr.push(a);
  }
  let str1 = arr.join(options.additionSeparator);

  let str0 = str + str1;

  let arr1 = [];
  for (let i = 1; i <= options.repeatTimes; i++) {
    let a = str0;
    arr1.push(a);
  }
  let str2 = arr1.join(options.separator);
  return str2;
};
