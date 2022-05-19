type Uniontype = string | number;

function f(p: Uniontype) {
  // 此处使用p.只能获取到string和number公用的属性和方法
  if (typeof p === "string") {
    // 此处可以.出string类型的属性和方法
  } else if (typeof p === "number") {
    // 此处可以.出number类型的属性和方法
  } else {
    // 此处的p被推断为never
  }
}

export {};
