<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="danger">
        <b-container>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-navbar-brand href="/">Home</b-navbar-brand>

          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
              <b-nav-item :to="'aboutme'" exact-active-class="active">Sobre mim</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    <router-view :posts="posts" :loaded="loaded"> </router-view>
  </div>
</template>

<script>
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css"


export default {
  name: 'app',
  data(){
    return{
      posts: null,
      loaded: null,
      postIds:[]
    }
  },
   async mounted() {
      const response = await axios.get('https://public-api.wordpress.com/rest/v1/sites/jetopiperun.travel.blog/posts');
      this.posts = await response.data;
      this.loaded = true;
  },
}
</script>

<style>

</style>
