const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  let kod = [];
  
  if (!Array.isArray(arr)) return false
  let result = arr.some((elem)=>typeof(elem) == "string")   
  if (result == true){
    for (let i = 0; i < arr.length; i++) {
   
      if (typeof arr[i] == "string") {
      arr[i] = arr[i].trim()
     
        let a = arr[i][0].toUpperCase();
  
        kod.push(a);
      }
    }
    let arr2 = kod.sort();
  
    let a = arr2.join("");
  
    let result = [];
  
    result.push(a);
    return result;
  } else return false
};
