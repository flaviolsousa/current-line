function getStack() {
  const orig = Error.prepareStackTrace;
  Error.prepareStackTrace = function (_, stack) {
    return stack;
  };
  const err = new Error();
  Error.captureStackTrace(err, arguments.callee);
  const stack = err.stack;
  Error.prepareStackTrace = orig;
  return stack;
}

function parse(item) {
  const result = {
    method: item.getFunctionName(),
    line: item.getLineNumber(),
    file: item.getFileName(),
  };
  result.filename = result.file.replace(/^.*\/|\\/gm, "").replace(/\.\w+$/gm, "");
  return result;
}

const traceLine = {
  /**
   * @param {number} level
   */
  get: function (level = 0) {
    const stack = getStack();
    const item = stack[level + 1];
    const result = parse(item);
    return result;
  },

  all: function () {
    const stack = getStack();
    const result = [];
    for (let i = 0; i < stack.length; i++) {
      const item = stack[i];
      result.push(parse(item));
    }
    return result;
  },
};

module.exports = traceLine;
