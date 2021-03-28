const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    this.arr.length;
    return this;
  },
  addLink(value) {
    if (value === undefined) value = "";
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position === "number" &&
      position > 0 &&
      position <= this.arr.length
    ) {
      this.arr.splice(position - 1, 1);
    } else {
      this.arr = [];
      throw Error();
    }
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = this.arr;
    this.arr = [];
    return str.join("~~");
  },
};

module.exports = chainMaker;
