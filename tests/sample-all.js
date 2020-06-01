const traceLine = require(".."); //require("trace-line")
const log = (o) => console.log(JSON.stringify(o, null, 2));

function goC(params) {
  log(traceLine.all());
}

class ClassA {
  static goB() {
    goC();
  }
}

function goA(params) {
  ClassA.goB();
}

log(goA());
