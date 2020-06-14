import Vue from 'vue'
Vue.component('formulario', 				require('./components/formularioComponent.vue').default);

const app = new Vue({
  el: '#app',
});