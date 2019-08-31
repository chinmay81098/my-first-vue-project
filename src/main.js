import Vue from 'vue'
import App from './App.vue'
import Calculator from './Calculator.vue'

Vue.component('my-calculator',Calculator)

new Vue({
  el: '#app',
  render: h => h(App)
})
