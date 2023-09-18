Function.prototype.myCall = function (context) {
  context.fn = this;
  context.fn();
};
