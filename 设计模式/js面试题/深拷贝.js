const obj = {
  name: 'xxx',
  age: 20,
  address: {
    city: '北京',
    a: {
      x: {
        y: {
          z: 100
        }
      }
    }
  },
  arr: [1, 2, 3, 4]
}

/**
 * 深拷贝
 * @param {*} obj
 */
function deepClone(obj = {}) {
  if (typeof obj !== 'object' || typeof obj === null) return obj
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  for (let key in obj) {
    // 保证 key 不是原型的属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用
      result[key] = deepClone(obj[key])
    }
  }

  return result
}
// 深拷贝
let obj2 = deepClone(obj)
obj2.age = 30
console.log(obj, obj2)
