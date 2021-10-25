function fn(a, b, c) {
  console.log(a, b, c)
}
const obj = {
  name: 'hello'
}
Function.prototype.bind1 = function () {
  const self = this
  // 将参数解析成数组
  const arg = Array.prototype.slice.call(arguments)
  const t = arg.shift()
  // 返回一个函数
  return function () {
    // 执行原函数
    return self.apply(t, arg)
  }
}
const obj1 = fn.bind1(obj, 'a', '2', 3)
obj1()
