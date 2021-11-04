// const data = {
//   name: 'hello',
//   age: 10,
// }
const data = [1, 2, 3]
const proxyData = new Proxy(data, {
  get(target, key, receiver) {
    // 只处理本身数据 （非原型）
    const ownKeys = Reflect.ownKeys(target, key)
    if (ownKeys.includes(key)) {
      console.log('get', key)
    }
    const result = Reflect.get(target, key)
    // 值
    return result
  },
  set(target, key, value, receiver) {
    // 重复数据不处理
    if (value === target[value]) {
      return true
    }
    const result = Reflect.set(target, value)
    console.log('set', result)
    // true | false
    return result
  },
  deleteProperty(target, key) {
    const result = Reflect.deleteProperty(target, key)
    console.log('delete', result)
    // true | false
    return result
  }
})

// proxyData.name = 'new'
// proxyData.name
// delete proxyData.age

// 优化数组操作、 get的时候只处理本身数据, 和 set的时候重复数据不处理
// 数组的push 操作 会读取原型的push，
proxyData.push('5')
