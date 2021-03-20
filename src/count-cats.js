const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  
  let arr = backyard.flat();
  let result = arr.filter((item) => (item ==='^^'));
  return (result.length);
  // remove line with error and write your code here
};
