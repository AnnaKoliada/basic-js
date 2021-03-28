const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  let dateVerification = new Date(date); 
  if(date.getTime() !== dateVerification.getTime())
  {
    throw new Error();
  }
  if (date == null) {
    return 'Unable to determine the time of year!';
  }
  
  let DateStart = new Date(2020, 0, 01);

  let winter1 = new Date(2020, 11, 31);
  let winter = new Date(2020, 01, 29);
  let spring = new Date(2020, 04, 31);
  let summer = new Date(2020, 07, 31);
  let autumn = new Date(2020, 10, 30);

  let winter1T = winter1.getTime() - DateStart.getTime();
  let winterT = winter.getTime() - DateStart.getTime();
  let springT = spring.getTime() - DateStart.getTime();
  let summerT = summer.getTime() - DateStart.getTime();
  let autumnT = autumn.getTime() - DateStart.getTime();

  let Datedate = new Date(date);
  let Datetask = new Date(Datedate.getFullYear(), 0, 01);
  let Timetask = Datedate.getTime() - Datetask.getTime();

  if ((Timetask <= winter1T && Timetask > autumnT) || Timetask <= winterT) {
    return "winter";
  }
  if (Timetask > winterT && Timetask <= springT) {
    return "spring";
  }
  if (Timetask <= summerT && Timetask > springT) {
    return "summer";
  }
  if (Timetask <= autumnT && Timetask > summerT) {
    return "autumn";
  }
};
