<template>
  <div>
      <Header text="Bem vindo ao meu post"/>
    <div class="container">
        <h1 class="text-center">{{ post.title }}</h1>
        <div class="col-auto my-1">
            <div class="custom-control custom-checkbox text-center">
                <input type="checkbox" class="custom-control-input" v-model="didRead" 
                id="customControlAutosizing"
                @change="check($event)">
                <label class="custom-control-label" for="customControlAutosizing">Lido</label>
            </div>
        </div>
        <br/>
        <p class="text-center">{{ post.date }} em {{ post.categories['Sem categoria'].name}}</p>
        <p class="text-center">{{ post.content }}</p>
        <p class="text-center">Por: {{ post.author.name }} </p>
        <hr />
        <div class="container float-right">
            <p>Categorias relacionadas:</p>
            <a hr>{{ post.categories['Sem categoria'].name}}</a>
        </div>
    </div>
  </div>
</template>
<script>
import Header from './Header'
export default {
    name:'post',
    data(){
        return{
            didRead: false
        }
    },
    components:{
        Header
    },
  props: ["post", "id"],
  methods:{

    check: function(e) {
        
        this.didRead = !this.didRead;
        console.log(this.didRead);
        console.log(e);
    }
  }
};
</script>

<style scoped>

h1, a{
    color:#b10707;
}
</style>

