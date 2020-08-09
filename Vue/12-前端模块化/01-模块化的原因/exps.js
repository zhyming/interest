//方法1.直接得到整个导出对象
var mainObj = require('main.js');
var flag = mainObj.flag;
var sum = mainObj.sum;

//方法2.只取导出对象的某些属性--直接可以得到想要的数据
var {flag, sum} = require('main.js');