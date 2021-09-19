<template>
  <v-container>
    <v-row >
      <v-col
        cols="6"
      >
        <div class="float-right">
            <v-card 
            class="box rounded-circle ma-2" 
            v-bind:class="{ show: isShow }" 
            color="red"
            >
            </v-card>
            <v-card 
            class="box show rounded-circle ma-2"
            color="yellow"
            >
            </v-card>
            <v-card 
            class="box show rounded-circle ma-2"
            color="green">
            </v-card>
        </div>
          <!-- <button @click="stopTimer">Stop</button>
        // *** restart traffic ligths *** 
          <button @click="restart">Restart</button> --> 
      </v-col>
      <v-col
        cols="6"
        align-self="center"
      >
          <div class="d-flex align-center text-h3 font-weight-black">
          {{currentTime}}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Red",
  data(){
    return{
      timer: null,
      currentTime: 10,
      isShow: false,
      timerIsShow: null,
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--;
      }, 1000)
      this.timerIsShow = setInterval(() => {
        if(this.currentTime < 4){
            this.isShow = !this.isShow;
        }
      },500)
    },
    stopTimer() {
      clearTimeout(this.timer);
      clearTimeout(this.timerIsShow);
      localStorage.removeItem('currentTime');
    },
    // *** restart traffic ligths *** 
    // restart(){
    //   this.stopTimer();
    //   this.currentTime = 5;
    //   this.startTimer();
    //   this.start();
    // }
  },
  watch: {
    currentTime(time, newCurrentTime) {
      if (time === 0) {
        this.stopTimer()
        this.$router.push('/yellow')
      }
      localStorage.currentTime = newCurrentTime;
    }
  },
  mounted() {
    this.startTimer();
    if(localStorage.currentTime) this.currentTime = localStorage.currentTime;
  },
  destroyed() {
    this.stopTimer();
  }
}
</script>


<style scoped lang="scss">
.show {
  opacity: 30%;
}
.box {
  width: 50px;
  height: 50px;
}

</style>
