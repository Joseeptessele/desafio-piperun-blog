<template>
  <div class="hello">
      <Header text="bem vindo ao meu blog" />
      <div class="container">
        <div v-if="loaded">
        <template v-for="(post,index) in posts.posts">

            <div :key="index">
                <div class="container">
                    <keep-alive include="post">
                    <router-link :to="{ name: 'post', params: { id: post.ID,slug:post.slug, post: post } }"><h1 class="text-center">{{ post.title }}</h1>
                    </router-link>
                    </keep-alive>
                    <br/>
                    <p class="text-center">{{ post.date }} em <a>{{ post.categories['Sem categoria'].name}}</a> </p>
                    <p class="text-center">{{ post.excerpt }}</p>
                    <p class="text-center">Por: {{ post.author.name }} </p>
                </div>
                <hr/>
            </div>
        </template>
        </div>
        <div v-else>
            Carregando..
        </div>
    </div>
  </div>
</template>
<script>
// import axios from 'axios';
import Header from './Header';
import "bootstrap/dist/css/bootstrap.css";
export default {
    components:{
        Header
    },
  data() {
      return{

      }
  },
  methods: {
  },
  props:["posts", "loaded"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    margin-top: 50px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #b10707;
}

</style>
