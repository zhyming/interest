var modelA = (function () {
  /**
   * 使用闭包--函数是有自己的作用域的，这样就不会有外部变量响应了
   * 但是就会存在代码的复用性降低了
   * 怎样使我们的代码不受到外部影响又可以得到复用呢？
   */
  var flag = true;
  var obj = {};
  function sum(a, b) {
    return a + b;
  }

  obj.flag = flag;
  obj.sum = sum;

  return obj;
})()