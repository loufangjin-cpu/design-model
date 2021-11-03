function updateView() {
  console.log('更新视图')
}

// 重新定义数组原型\ 避免污染数组的原型
const oldArrayProperty = Array.prototype
// 创建新对象、原型指向oldArrayProperty、再扩展新的方法，不会影响原型
const arrProto = Object.create(oldArrayProperty)
;['push', 'pop', 'shift', 'unshift', 'splice'].forEach((methName) => {
  arrProto[methName] = function () {
    updateView()
    oldArrayProperty[methName].call(this, ...arguments)
  }
})

function observe(target) {
  if (typeof target !== 'object' || target === null) return target
  if (Array.isArray(target)) {
    target.__proto__ = arrProto
  }
  for (let key in target) {
    defieReactive(target, key, target[key])
  }
}
function defieReactive(target, key, value) {
  // 进行深度监听,避免value是一个对象
  observe(value)
  // ! defineProperty让每一个key都进行响应绑定
  Object.defineProperty(target, key, {
    get() {
      return value
    },
    set(newValue) {
      if (newValue !== value) {
        // 新增深度监听, 避免设置的是对象
        observe(newValue)
        value = newValue
        updateView()
      }
    }
  })
}

var data = {
  name: 'hello',
  age: 10,
  address: {
    // 对象深度监听
    city: '北京'
  },
  arr: [1, 2, 3, 4] // 数组监听
}
observe(data)

// data.name = 'world'
// data.address.city = 'guiz'
// data.x = '新增一个没有的属性' // 无法监听新增属性
// delete data.name //无法监听删除属性
data.arr.push(5) // 重写数组方法, defineProperty无法监听数据的变化
