const compiler = require('vue-template-compiler')
//插值
// const template = `<p>{{message}}</p>`
// with(this){return _c('p',[_v(_s(message))])}
// h -> vnode
// _c -> createment -> vnode

// v-model
const template = `<input v-model='data' />`
// with(this){
// return _c('input',{directives:[{name:"model",rawName:"v-model",value:(data),expression:"data"}],domProps:{"value":(data)},on:{"input":function($event){if($event.target.composing)return;data=$event.target.value}}})}
// 编译
const res = compiler.compile(template)
console.log(res.render)
