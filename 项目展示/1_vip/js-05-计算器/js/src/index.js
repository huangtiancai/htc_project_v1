// 计算
var button = document.getElementsByClassName("cou");
var show = document.getElementsByClassName("show");

// var btn = document.getElementById("btn"); // [object HTMLButtonElement] 单个按钮

// alert(button); // [object HTMLCollection]
// 点击获取的是数组 => 循环遍历=>使用let声明变量
// 为了在IE浏览器中使用
// => 1.使用babel编译src下的app.js；引用目标文件夹dest下的app.js
//      脚本配置："build": "babel src -d dest"
//      运行：npm run build
// => 2.使用webpack打包编译src下的app.js，然后再引用

// js点击事件的几种实现方式
// 1.在标签中写事件
// 2.通过js绑定的事件：如下两种：监听事件、绑定点击事件

// 监听点击事件
// for (let i = 0; i < button.length; i++) {
//   button[i].addEventListener('click', function () {
//     alert(i);
//   })
// }

// 通过点击事件
// for (let i = 0; i < button.length; i++) {
//   // console.log(i);
//   // console.log(button[i].value);
//   button[i].onclick = function () {
//     console.log(i);
//   }
// }

function init() {
  for (var i = 0; i < button.length; i++) {
    button[i].indexs = i; //将索引添加到数组上去
    // console.log(button[i]); //标签本身
    // console.log(button[i].indexs); //0-16
  }
}
init();

var count = 0;
var temp = "";
var deng = false;
var chu = false;
var che = false;
var jian = false;
var jia = false;
var str1 = "";
var str2 = "";
var result = 0; //总结果
// 主函数
function fun() {
  for (let i = 0; i < button.length; i++) {
    button[i].onclick = function() {
      // console.log(this); // this => 标签
      if (this.indexs == 0) {
        show[0].innerHTML = 0;
        jia = false;
        jian = false;
        cheng = false;
        chu = false;
        str1 = "";
        str2 = "";
        count = "";
        console.log(this.value);
      } else if (this.indexs >= 3 && this.indexs <= 13) {
        // 按钮值：7 8 9 4 5 6 1 2 3 .
        // console.log(this.value);
        if (count == 0) {
          str1 = this.value;
          show[0].innerHTML = str1;
        }
        // 数值后接运算符后，再接数值
        if (count > 0) {
          str2 = this.value;
          show[0].innerHTML = str1 + str2;
        }
      } else if (this.indexs <= 2 || this.indexs >= 14) {
        count++;
        // 按钮值：清零 ÷ × - + =
        var k = this.value;
        switch (k) {
          case "÷":
            break;
          case "×":
            break;
          case "+":
            console.log(1);
            str1 += "+";
            show[0].innerHTML = str1;
            jia = true;
            break;
          case "=":
            resullt = size();
            temp = resullt;
            show[0].innerHTML = resullt;
            break;
        }
      }
    };
  }
}
// 调用
fun();

function size() {
  var result1;
  if (jia) {
    result1 = parseFloat(str1) + parseFloat(str2);
  }
  return result1;
}
