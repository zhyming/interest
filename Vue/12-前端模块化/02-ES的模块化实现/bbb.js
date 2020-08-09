import {sum, num, height, sum1, Animal} from "./aaa.js";
import comm from "./aaa.js";
var name = "小红";
var age = 18;
var flag = false;

console.log(sum(1221, 55));


console.log(num);
console.log(height);

console.log(sum1(111, 222));

const cat = new Animal();
cat.run();

comm("你会后悔的");

//导入全部--可以得到封装的整个导入模块
import * as aaa from "./aaa.js"
const dog = new aaa.Animal();
dog.run();