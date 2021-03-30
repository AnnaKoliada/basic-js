const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = [];

  if (typeof arr !== "object") return Error;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== undefined ) 
    result.push(arr[i]);
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] == "--discard-next") {
      result.splice(i, 2);
    }

    if (result[i] == "--discard-prev") {
      if ((i == 0)) {
        result.splice(0, 1);
      } else {
        result.splice(i - 1, 2);
      }
    }

    if (result[i] == "--double-next") {
      result.splice(i, 1, result[i + 1]);
    }

    if (result[i] == "--double-prev") {
      result.splice(i, 1, result[i - 1]);
    }
  }
 return result
 
};
