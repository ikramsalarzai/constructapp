<template>
  <div id="app">
    <app-nav   />
    <router-view  /> 
    <app-footer  />
  </div>
 
</template>


<script>
import nav from './components/nav.vue';
import footer from './components/footer.vue';

export default {
  components:{
    'app-nav':nav,
    'app-footer':footer,

  }
}
</script>
<style>
 
</style>
