const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  let result1 = [];
  let result2 = [];
  let result3 = [];
  let result4 = [];
if (typeof(arr) !== "object") return Error

  for (let i = 0; i < arr.length; i++) {
    result1.push(arr[i]);

  }

  for (let i = 0; i < arr.length; i++) {
    result2.push(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    result3.push(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    result4.push(arr[i]);
  }

  for (let i = 0; i < result1.length; i++) {
    if (result1[i] == "--discard-next"){result1.splice(i, 2);
     return(result1);} 
  }

  for (let i = 0; i < result2.length; i++) {
    if (result2[i] == "--discard-prev" && (i !== 0)) {
        result2.splice(i - 1, 2);
        return( result2)}
    if (result2[i] == "--discard-prev" && (i == 0))  {  
        result2.splice(0, 1);
        return (result2);
       
      }
    }
    
    for (let i = 0; i <= result3.length; i++) {
      if (result3[i] == "--double-next" && i !== result3.length) {
        result3.splice(i, 1, result3[i + 1]); 
        return( result3)};
        if (result3[i] == "--double-next" && i == result3.length) {result3.splice(i, 1); return( result3)};
      
    }
    for (let i = 0; i < result4.length; i++) {
      if (result4[i] == "--double-prev"  && i !== result4.length ) {result4.splice(i, 1, result3[i - 1]);

      return (result4);}
      if (result4[i] == "--double-prev"  && i == result4.length ) {result4.splice(i, 1, result3[i - 1]);

        return (result4);}
    }
return arr
 
};
