const f1 = (a: number, b: number) => {
  return a + b;
};

type AddFun = (a: number, b: number) => number;

const f2: AddFun = (a, b) => a + b;

const f3 = (a: number, b: number, ...c: number[]) => {
  console.log("a = %d, b = %d, c = %s", a, b, c);
  return a + b + (c ? c.reduce((pre, cur) => pre + cur, 0) : 0);
};

console.log(f3(1, 2));
console.log(f3(1, 2, 3, 4, 5));

// 函数类型升级
type StuType = { name: string; age: number; phone: string };

const f4 = (stu: StuType) => {
  console.log("姓名： %s 年龄: %d 电话： %s", stu.name, stu.age, stu.phone);
};

f4({ name: "zs", age: 18, phone: "13800138000" });

const f5 = (stu: StuType) => {
  console.log("姓名： %s 年龄: %d 电话： %s", stu.name, stu.age);
};

f5({ name: "zs", age: 18, phone: "" });

const f6 = ({ name, age }: StuType) => {
  console.log("姓名： %s 年龄: %d 电话： %s", name, age);
};

f6({ name: "zs", age: 18, phone: "" });

type F7 = (p: any) => void;