// any 既可以作为其他类型的父类存在 也可以作为任何类型的子类存在
let a: any = 123;
let b: string = a;
let stu: any = {name: 'zs', age: 18};
// 可能是版本问题，有的版本any会阻塞类型推导，当前用的版本并不会阻塞，即可以使用.来弹出属性
stu.age;
// unknow 不可以作为其他类型的子类
let c: unknown = 123;
// let d: string = c; // Type 'unknown' is not assignable to type 'string'.

export {};