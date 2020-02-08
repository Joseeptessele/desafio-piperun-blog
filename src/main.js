import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
  import BootstrapVue from 'bootstrap-vue';
import Post from './components/Post.vue'
import AboutMe from './components/AboutMe.vue'
Vue.use(BootstrapVue);

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/post/:id/:slug",
      component: Post,
      props:true,
      name: 'post'
    },
    {
      path: "/aboutme",
      component: AboutMe,
    },
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
