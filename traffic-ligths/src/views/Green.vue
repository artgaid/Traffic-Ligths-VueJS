<template>
    <div>
    <div class="red"></div>
    <div class="yellow"></div>
    <div class="box">
      <div class="green" v-show="show"></div>
    </div>
    <div>Timer: {{currentTime}}</div>
  </div>
</template>

<script>
export default {
    name: "Green",
  data(){
    return{
      timer: null,
      currentTime: 5,
      next: null,
      show: true,
      timerShow: null,
    };
  },
  methods: {
    nextTo(){
      this.next = setTimeout(() => this.$router.push('/yellow'), 5000)
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--
      }, 1000)
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
  border: 1px solid #000;
  margin: 10px;
  opacity: 30%;
  width: 50px;
  height: 50px;
  background-color: yellow;
}
.green{
  width: 50px;
  height: 50px;
  background-color: green;
}

</style>