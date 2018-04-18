import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import OkComponent from '@/components/OkComponent';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/ble/:name?',
      props: true,
      name: 'OkComponent',
      component: OkComponent,
    },
    {
      path: '/bla/:any?',
      props: true,
      name: 'OkComponentB',
      component: OkComponent,
    },
  ],
});
