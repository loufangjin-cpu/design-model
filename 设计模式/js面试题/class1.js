// ! class的继承 super extends
class Person {
  constructor(name) {
    this.name = name
  }
  sayHi() {
    console.log(`${this.name} say hi`)
  }
}
class Student extends Person {
  constructor(name, number) {
    super(name)
    this.number = number
  }
  score() {
    console.log(`${this.name} 的分数是 ${this.number}`)
  }
}
class Teacher extends Person {
  constructor(name, major) {
    super(name)
    this.major = major
  }
  teach() {
    console.log(`${this.name} 任教科目是 ${this.major}`)
  }
}

const student = new Student('学生', 10)
const teacher = new Teacher('老师', '语文')
// =>学生
// console.log(student.name)
// console.log(student.number)
// console.log(student.sayHi())
// console.log(student.score())
// ==>老师
// console.log(teacher.name)
// console.log(teacher.major)
// console.log(teacher.sayHi())
// console.log(teacher.teach())

// ==> this的指向

// 此时的this指向是函数的调用者也就是__proto__ 但是此时的student.__proto__是没有name的
student.__proto__.sayHi()
student.__proto__.name // undefined

// ===> this的指向，函数的调用者student
student.sayHi()
// 类似
student.__proto__.sayHi.call(student)

