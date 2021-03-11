const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    sampleActivity <= 0 ||
    typeof sampleActivity !== "string" ||
    sampleActivity == NaN ||
    sampleActivity > 15
  )
    return false;
  sample = Number(sampleActivity);
  let t = Math.ceil(
    Math.log(MODERN_ACTIVITY / sample) / (0.693 / HALF_LIFE_PERIOD)
  );
console.log(typeof(t))
if (isNaN(t) == true) return false;
  return t;
  // remove line with error and write your code here
};
