const app = new Vue({
  el: "#app",
  data: {

    books: [
      {
        id: 1,
        name: "《算法导论》",
        date: '2006-9',
        price: 85.00,
        count: 1

      },
      {
        id: 2,
        name: "《Unix编程艺术》",
        date: '2006-2',
        price: 59.00,
        count: 1

      },
      {
        id: 3,
        name: "《编程珠玑》",
        date: '2006-10',
        price: 39.00,
        count: 1

      },
      {
        id: 4,
        name: "《代码大全》",
        date: '2006-3',
        price: 128.00,
        count: 1

      }
    ]
  },
  methods: {
    decrement(index){
        this.books[index].count --;
    },
    increment(index){
      this.books[index].count ++;
    },
    handleRemove(index){
      this.books.splice(index, 1);

    }
  },
  filters: {
    showPrice(value){
      /**
       * 使用obj.foFix(2)，方法可以保留小数
       * 这个是对象的方法
       *
       */
      return '￥' + value.toFixed(2)
    }
  },

  computed: {
    totalPrice(){
      let total = 0;
      /**
       * 1.普通for循环
       * for(let i=0;i<this.books.length;i++)
       * 2.进阶for循环，i也是索引
       * for(let i in this.books)
       *
       */
      // this.books.forEach(function (book) {
      //   total += book.price * book.count
      // })

      //3.使用 of item表示元素
      /*for(let item of this.books){
        total += item.price * item.count
      }*/

      //4.可以使用函数式来聚合
      total = this.books.map((book) => book.price * book.count).reduce((a, b) => a + b)

      return total;
    }
  }


})

//js函数式编程--》链式编程
const nums = [12, 434, 5, 2, 5, 22, 44, 55];
//1.取出所有小于100数字并全部乘2
/**
 * filter中的回调函数
 *
 * @type {number[]}
 * 箭头函数可以用小括号，也可以用大括号--结合lamda表达式我统一用小括号
 * 箭头函数如果要返回对象，整个箭头函数整体就必须要小括号包起来，对象用大括号包起来
 * 箭头函数可以改变函数内部this,指向调用者对象
 */
const arr = nums.filter(num => num > 50).map(m => m * 2);

console.log(arr);

