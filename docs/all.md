## tests/sample-all.js

```js
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
```

Output:

```json
[
  {
    "method": "goC",
    "line": 5,
    "file": "/home/mtzcpd262/Documents/git/trace-line/tests/sample-all.js",
    "filename": "sample-all"
  },
  {
    "method": "goB",
    "line": 10,
    "file": "/home/mtzcpd262/Documents/git/trace-line/tests/sample-all.js",
    "filename": "sample-all"
  },
  {
    "method": "goA",
    "line": 15,
    "file": "/home/mtzcpd262/Documents/git/trace-line/tests/sample-all.js",
    "filename": "sample-all"
  },
  {
    "method": null,
    "line": 18,
    "file": "/home/mtzcpd262/Documents/git/trace-line/tests/sample-all.js",
    "filename": "sample-all"
  },
  {
    "method": "Module._compile",
    "line": 1158,
    "file": "internal/modules/cjs/loader.js",
    "filename": "loader"
  },
  {
    "method": "Module._extensions..js",
    "line": 1178,
    "file": "internal/modules/cjs/loader.js",
    "filename": "loader"
  },
  {
    "method": "Module.load",
    "line": 1002,
    "file": "internal/modules/cjs/loader.js",
    "filename": "loader"
  },
  {
    "method": "Module._load",
    "line": 901,
    "file": "internal/modules/cjs/loader.js",
    "filename": "loader"
  },
  {
    "method": "executeUserEntryPoint",
    "line": 74,
    "file": "internal/modules/run_main.js",
    "filename": "run_main"
  }
]
```
