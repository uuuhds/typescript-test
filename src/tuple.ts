// 1、为什么用元组

// 2、符合下面条件的数组就是一个元组
// 定义式的元素的类型确定，但是各个元素的类型不必相同
// 为元素赋值时，该值必须是当前位置的类型

let salary: [string, number, number, string] = ["hh", 10000, 20000, "满勤"];

console.log(salary[3]);
