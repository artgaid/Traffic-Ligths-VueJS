<template>
  <v-container>
    <v-row >
      <v-col
        cols="6"
      >
        <div class="float-right">
            <v-card 
            class="box show rounded-circle ma-2" 
            color="red"
            >
            </v-card>
            <v-card 
            class="box rounded-circle ma-2"
            v-bind:class="{ show: isShow }" 
            color="yellow"
            >
            </v-card>
            <v-card 
            class="box show rounded-circle ma-2"
            color="green">
            </v-card>
        </div>
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
    name: "Yellow",
  data(){
    return{
      prevRoute: null,
      timer: null,
      currentTime: 3,
      isShow: false,
      timerIsShow: null,
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--
      }, 1000);
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
  },
  watch: {
    currentTime(time, newCurrentTime) {
      if (time === 0) {
        this.stopTimer()
        if(this.prevRoute.name === 'Green'){
          this.$router.push('/red')
        } else {
          this.$router.push('/green')
        }
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
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.prevRoute = from
    })
  }
}
</script>

<style scoped lang="scss">
.show {
  opacity: 30%;
}
.box {
  margin: 10px;
  width: 50px;
  height: 50px;
}
</style>