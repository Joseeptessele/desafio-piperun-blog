<template>
<div id="slogan">
    <div class="text-center">
      <h1>Blog de viagens do José</h1>
      <br/>
      <h6 class="text-secondary">{{ text }}</h6>
    </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    text: String
  }
}
</script>

<style scoped>
  #slogan {
    margin-top: 30px;
    margin-bottom: 30px;

  }
</style>