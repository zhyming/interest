/**
 * commonJS模块化规范
 */

var flag = true;
var obj = {};
function sum(a, b) {
  return a + b;
}

obj.flag = flag;
obj.sum = sum;

/**
 * 采用ES6字面量对象增强写法，根据自己在js定义的对象，直接exports出来就行
 * 直接这样写是不行的，只是语法结构是这个样子；还需要底层支持。目前还不认识model这个对象，解析不了model
 * @type {{obj: {}}}
 */
model.exports = {
  flag,
  obj
}

