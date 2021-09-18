<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to my Traffic Ligths !"/>
    <button @click="nextRed" >Go to Red</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {}
  },
  methods: {
    nextRed(){
      this.$router.push('/red')
    }
  },
}
</script>
