<template>
    <div>
    <div class="red"></div>
    <div class="box">    
      <div class="yellow" v-show="show"></div>
    </div>
    <div class="green"></div>
    <div>Timer: {{currentTime}}</div>
  </div>
</template>

<script>
export default {
    name: "Yellow",
  data(){
    return{
      prevRoute: null,
      timer: null,
      currentTime: 3,
      next: null,
      show: true,
      timerShow: null,
    };
  },
  methods: {
    nextTo(){
      if(this.prevRoute.name === 'Green'){
      this.next = setTimeout(() => this.$router.push('/red'), 3000)
      } 
      else {
      this.next = setTimeout(() => this.$router.push('/green'), 3000)
      }
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--
      }, 1000);
      this.timerShow = setInterval(() => {
        if(this.currentTime < 4){
            this.show = !this.show;
        }
      },500)
    },
    stopTimer() {
      clearTimeout(this.timer);
      clearTimeout(this.next);
      clearTimeout(this.timerShow);
    },
  },
  watch: {
    currentTime(time) {
      if (time === 0) {
        this.stopTimer()
      }
    }
  },
  mounted() {
    this.nextTo();
    this.startTimer();
  },
  destroyed() {
    this.stopTimer();
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.prevRoute = from
    })
  }
}
</script>

<style scoped lang="scss">
.box {
  border: 1px solid #000;
  margin: 10px;
  width: 50px;
  height: 50px;
}

.red{
  border: 1px solid #000;
  margin: 10px;
  opacity: 30%;
  width: 50px;
  height: 50px;
  background-color: red;
}
.yellow{
  width: 50px;
  height: 50px;
  background-color: yellow;
}
.green{
  border: 1px solid #000;
  margin: 10px;
  opacity: 30%;
  width: 50px;
  height: 50px;
  background-color: green;
}

</style>