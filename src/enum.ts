// 方法参数不能定义为具体的类型，只能用string和number类型来替代，降低了可维护性和可读性
const LoginStatus = {
  Online: 1,
  Offline: 2,
};

// 传入的status是随意的，可能不被处理到
function getLoginStatus(status: number) {
  if (status === LoginStatus.Online) {
    console.log("在线");
  } else if (status === LoginStatus.Offline) {
    console.log("不在线");
  }
}

// 数字枚举
enum Week {
  Monday = 1,
  Sunday,
}

// 字符串枚举
enum Week2 {
  Monday = "Monday",
  Sunday = "Sunday",
}

// 好处 有默认值和自增值可以节省编码  语义更清晰，可读性更强

// // 数字枚举
// var Week;
// (function (Week) {
//     Week[Week["Monday"] = 1] = "Monday";
//     Week[Week["Sunday"] = 2] = "Sunday";
// })(Week || (Week = {}));
// // 字符串枚举
// var Week2;
// (function (Week2) {
//     Week2["Monday"] = "Monday";
//     Week2["Sunday"] = "Sunday";
// })(Week2 || (Week2 = {}));

// 
// 
