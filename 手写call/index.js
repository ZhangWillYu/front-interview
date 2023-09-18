Function.prototype.myCall = function (ctx, ...args) {
  ctx = ctx === undefined || ctx === null ? globalThis : Object(ctx);
  var fn = this;
  var key = Symbol("temp");
  Object.defineProperty(ctx, key, {
    value: fn,
    enumerable: false,
  });
  const result = ctx[key](...args);
  delete ctx[key];
  return result;
};

function method(a, b) {
  console.log(a, b);
  console.log(this);
}

method.myCall("aa", 1, 2);
