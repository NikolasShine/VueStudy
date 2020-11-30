// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

/** 注册全局组件 */
Vue.component('aaa', {
  props: {
    message: {
      type: String,
      default: '默认的mssage',
      required: true
    }
  },
  template: `
  <div>
    <div>aaa组件{{ message }}</div>
    <aaa-bbb></aaa-bbb>
    <aaa-ccc @callBack="callBack" :call-back2="callBack2">aaa组件2</aaa-ccc>
  </div>
  `,
  /** 使用 kebab-case注册子组件 */
  components: {
    'AaaBbb': {
      template: `
      <div>aaa-bbb组件</div>
      `
    },
    /** 使用 PascalCase注册子组件 */
    'aaa-ccc': {
      props: {
        callBack2: {
          type: Function
        }
      },
      template: `
      <button @click="itemClick">aaa-ccc组件</button>
      `,
      methods: {
        itemClick() {
          console.log('itemClick')
          this.$emit('callBack')
          this.callBack2('absia')
        }
      }
    }
  },
  methods: {
    callBack() {
      console.log('父组件接受到回调')
    },
    callBack2(msg) {
      console.log('直接传父组件接受到回调', `参数${msg}`)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
