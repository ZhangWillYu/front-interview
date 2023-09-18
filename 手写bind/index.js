function fn(a, b, c, d) {
  console.log(a, b, c, d);
  console.log(this);
}

Function.prototype.myBind = function (ctx) {
  var args = Array.prototype.slice.call(arguments, 1);
  var fn = this;
  return function A() {
    var restArgs = Array.prototype.slice.call(arguments);
    var allArgs = args.concat(restArgs);
    if (Object.getPrototypeOf(this, A.prototype)) {
      var obj = {};
      obj.setPrototypeOf(obj, fn.prototype);
      fn.apply(obj, allArgs);
      return obj;
    } else {
      return fn.apply(ctx, allArgs);
    }
  };
};
const newFn = fn.myBind("ctx", 1, 2);
newFn(3, 4);
