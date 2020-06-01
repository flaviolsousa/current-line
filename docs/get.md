## tests/sample-get.js

```js
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
```

Output:

```json
{
  "method": null,
  "line": 4,
  "file": "/home/mtzcpd262/Documents/git/trace-line/tests/sample.js",
  "filename": "sample"
}
{
  "method": "funcB",
  "line": 8,
  "file": "/home/mtzcpd262/Documents/git/trace-line/tests/sample.js",
  "filename": "sample"
}
{
  "method": "funcA",
  "line": 11,
  "file": "/home/mtzcpd262/Documents/git/trace-line/tests/sample.js",
  "filename": "sample"
}
```
