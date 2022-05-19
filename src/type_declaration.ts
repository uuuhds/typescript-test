// 类型注解
let price: number = 3;
type Student = { name: string; age: number };
let stu: Student = { name: "zs", age: 18 };

// 类型推导 不显示的生命类型，由编译器去推导出变量的类型
let count = 3;
// count = 'number'; // 报错
let ls = { name: "ls", age: 28 };

// ls.a = 1; // 报错 a不在 { name: string; age: number } 类型上存在
