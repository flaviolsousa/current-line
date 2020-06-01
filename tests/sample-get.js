const traceLine = require("./.."); //require("trace-line")
const log = (o) => console.log(JSON.stringify(o, null, 2));

log(traceLine.get());

function funcA() {
  let funcB = () => {
    log(traceLine.get());
    log(traceLine.get(1));
  };
  funcB();
}
funcA();
