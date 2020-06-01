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

## Modules

<dl>
<dt><a href="#module_trace-line">trace-line</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#StackItem">StackItem</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="module_trace-line"></a>

## trace-line

**Example**

```js
const traceLine = require("trace-line");
```

- [trace-line](#module_trace-line)
  - [TraceLine](#exp_module_trace-line--TraceLine) ⏏
    - [.get([level])](#module_trace-line--TraceLine+get) ⇒ [<code>StackItem</code>](#StackItem)
    - [.all()](#module_trace-line--TraceLine+all) ⇒ [<code>Array.&lt;StackItem&gt;</code>](#StackItem)

<a name="exp_module_trace-line--TraceLine"></a>

### TraceLine ⏏

**Kind**: Exported class  
<a name="module_trace-line--TraceLine+get"></a>

#### traceLine.get([level]) ⇒ [<code>StackItem</code>](#StackItem)

Returns a single item

**Kind**: instance method of [<code>TraceLine</code>](#exp_module_trace-line--TraceLine)

| Param   | Type                | Default        | Description                                                                                                               |
| ------- | ------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------- |
| [level] | <code>number</code> | <code>0</code> | Useful to return levels up on the stack. If not informed, the first (0, zero index) element of the stack will be returned |

<a name="module_trace-line--TraceLine+all"></a>

#### traceLine.all() ⇒ [<code>Array.&lt;StackItem&gt;</code>](#StackItem)

Returns all stack

**Kind**: instance method of [<code>TraceLine</code>](#exp_module_trace-line--TraceLine)  
<a name="StackItem"></a>

## StackItem : <code>object</code>

**Kind**: global typedef  
**Properties**

| Name     | Type                | Description                          |
| -------- | ------------------- | ------------------------------------ |
| method   | <code>string</code> | Name of function on stack            |
| line     | <code>number</code> | Line number on stack                 |
| file     | <code>string</code> | /PathOfFile/Source/NameOfFilename.js |
| filename | <code>string</code> | NameOfFile                           |

---

## tests/sample.js

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
