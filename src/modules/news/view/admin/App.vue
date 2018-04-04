<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import {getUserInfo} from "../../../../utils/request";

  export default {
    name: 'app',
    data() {
      return {}
    },
    mounted(){
    }
  }
</script>

<style>

</style>
