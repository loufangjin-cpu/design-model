class Jquery {
  constructor(selector) {
    const result = document.querySelectorAll(selector)
    const length = result.length
    for (let i = 0; i < length; i++) {
      this[i] = result[i]
    }
    this.length = length
    this.selector = selector
  }
  get(index) {
    return this[index]
  }
  each(fn) {
    for (let i = 0; i < this.length; i++) {
      const elm = this[i]
      fn(elm)
    }
  }
  on(type, fn) {
    return this.each((elem) => {
      elem.addEventListener(type, fn, false)
    })
  }
}
const $p = new Jquery('p')
$p.get(1)
$p.each((elm) => {
  console.log(elm.nodeName)
})
$p.on('click', () => alert('click'))

// 扩展插件
Jquery.prototype.dialog = function () {
  console.log('在原型上进行扩展')
}
// 造轮子
class myJquery extends Jquery {
  constructor(selector) {
    super(selector)
  }
  mysay() {
    console.log('自己的轮子的方法')
  }
}
