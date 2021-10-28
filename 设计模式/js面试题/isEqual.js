// ! 仿造lodash 实现一个深度全相等比较
const obj1 = {
  name: 'hello',
  age: {
    sale: 10
  },
  arr: [1, 2, 3]
}
const obj2 = {
  name: 'hello',
  age: {
    sale: 10
  },
  arr: [1, 2, 3]
}

function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}
function isEqual(obj1, obj2) {
  // 1、基本类型比较
  if (!isObject(obj1) || !isObject(obj1)) return obj1 === obj2
  // 2、非基本类型比较长度
  const obj1L = Object.keys(obj1)
  const obj2L = Object.keys(obj2)
  if (obj1L.length !== obj2L.length) return false
  //3、以obj1为基准，递归obj2
  for (let key in obj2) {
    const res = isEqual(obj1[key], obj2[key])
    if (!res) return false
  }
  return true
}
console.log(isEqual(obj1, obj2))
