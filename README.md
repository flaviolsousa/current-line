[![NPM version](https://img.shields.io/npm/v/trace-line.svg)](https://www.npmjs.com/package/trace-line)
[![npm](https://img.shields.io/npm/dt/trace-line.svg)](https://github.com/flaviolsousa/trace-line)
[![Build Status](https://travis-ci.org/flaviolsousa/trace-line.svg?branch=master)](https://travis-ci.org/flaviolsousa/trace-line)
[![codecov](https://codecov.io/gh/flaviolsousa/trace-line/branch/master/graph/badge.svg)](https://codecov.io/gh/flaviolsousa/trace-line)
[![dependencies Status](https://david-dm.org/flaviolsousa/trace-line/status.svg)](https://david-dm.org/flaviolsousa/trace-line)
[![Known Vulnerabilities](https://snyk.io/test/github/flaviolsousa/trace-line/badge.svg)](https://snyk.io/test/github/flaviolsousa/trace-line)

# trace-line

Get current filename, function name and line number

## Simple to use

```js
const traceLine = require("trace-line");

function go() {
  console.log(traceLine.get());
}

go();
```

Output:

```json
{
  "method": "go",
  "line": 4,
  "file": "/home/user/trace-line/tests/sample.js",
  "filename": "sample"
}
```

---

## Documentation

_Last stack item_

```
traceLine.get() : <StackItem>
```

_Stack item by index_

```
traceLine.get(1) : <StackItem>
```

_All Stack item_

```
traceLine.all() : <StackItem[]>
```

#### Others documentations

[Full API](docs/api.md)

[Sample traceLine.get()](docs/get.md)

[Sample traceLine.all()](docs/all.md)
