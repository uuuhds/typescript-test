const obj = {name: 'zs', age: 15};

// let name = 'name'; // 报错，因为name是string类型，是可变的
const name = 'name';

obj[name];

const obj2: object = {name: 'zs', age: 15};

// obj2[name];  // 报错，因为Object对象上没有name属性

(obj2 as any)[name];

export {};