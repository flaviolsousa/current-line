const assert = require("assert");
const traceLine = require("../..");

describe("index-test.js", function () {
  it("get", function (done) {
    const result = traceLine.get();
    assert.ok(result, "result: " + JSON.stringify(result));
    assert.ok(result.line === 6, "result: " + JSON.stringify(result));
    assert.ok(result.method === null, "result: " + JSON.stringify(result));
    assert.ok(result.file.endsWith("trace-line/tests/mocha/index-test.js"), "result: " + JSON.stringify(result));
    assert.ok(result.filename === "index-test", "result: " + JSON.stringify(result));
    done();
  });

  it("method", function getMethod(done) {
    const result = traceLine.get();
    assert.ok(result, "result: " + JSON.stringify(result));
    assert.ok(result.method === "getMethod", "result: " + JSON.stringify(result));
    done();
  });

  it("level", function getMethod(done) {
    function subLevel(params) {
      const result = traceLine.get(1);
      assert.ok(result, "result: " + JSON.stringify(result));
      assert.ok(result.method === "getMethod", "result: " + JSON.stringify(result));
    }
    subLevel();
    done();
  });

  it("getAll", function getMethod(done) {
    const result = traceLine.all();
    // console.log(JSON.stringify(result, null, 2));
    assert.ok(result, "result: " + JSON.stringify(result));
    assert.ok(result.length > 0, "result: " + JSON.stringify(result));
    assert.ok(result[0].line > 0, "result: " + JSON.stringify(result));
    done();
  });
});
