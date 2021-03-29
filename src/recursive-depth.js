const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    
      let maxim = 1;
      let a = 1;
  
      if (Array.isArray(arr)) {
        for (let elem of arr) {
          if (Array.isArray(elem)) {
            a += this.calculateDepth(elem);
          }
          if (a > maxim) {
            maxim = a;
          }
          a = 1;
        }
      }
  
      return maxim;
    
  }
};