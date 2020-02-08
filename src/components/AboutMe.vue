<template>
  <div class="aboutme">
      <Header text="sobre mim"/>
      <div class="container">
        <p class="text-center">Me chamo José Eduardo, sou natural de Santa Maria e graduado em Ciência da Computação pela Universidade Franciscana.</p>
    </div>
  </div>    
</template>
<script>

import "bootstrap/dist/css/bootstrap.css";
import Header from './Header';
export default {
    components:{
        Header
    },
  data() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  color: #42b983;
}
</style>
