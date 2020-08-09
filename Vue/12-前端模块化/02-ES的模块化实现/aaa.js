let name = "小明";
//这里自定义模块里面使用var也不会出现重命名导致数据混乱的问题
var age = 12;
let flag = true;

function sum(a, b){
  return a + b;
}

if (flag){
  console.log(sum(23, 33));
}

//1.导出方式一
export {
  name,
  age,
  flag,
  sum
}
//2.导出方式二
export var num = 100000;
export var height = 188;

//3.导出函数/类
export function sum1(a, b) {
  return a + b;

}

export function Persion(name, age){
  this.name = name;
  this.age = age;

}

export class Animal{
  run(){
    console.log("我在跑");
  }
}

//5.export default
const country = "中国";
const city = "广州"
function say(msg) {
  console.log(msg);

}
export default say