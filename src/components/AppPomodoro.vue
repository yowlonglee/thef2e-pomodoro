<template>
  <div class="app-pomodoro">
    <div class="row">
      <div class="col-6">
        <div>new to do box</div>
        <div>
          <div>current to do</div>
          <div>pomodoro group</div>
        </div>
        <div>{{ timer }}</div>
        <div>mini to do list</div>
      </div>
      <div class="col-6">
        <div class="svg-container">
          <svg viewBox="-0.5 -0.5 101 101" class="timer-pie">
            <circle class="circle1" r="50" cx="50" cy="50" />
            <circle class="circle2" r="25" cx="50" cy="50" />
          </svg>
          <!-- <div class="timer-control">
            <button @click="start">start</button>
            <button @click="pause">pause</button>
            <button @click="stop">stop</button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppPomodoro",
  props: {
    msg: String
  },
  data: function() {
    return {
      timer: 25,
      interval: ""
    };
  },
  methods: {
    countdown: function() {
      if (this.timer > 0) {
        this.timer--;
      } else {
        this.stop();
        this.start();
      }
    },
    start: function() {
      this.interval = setInterval(this.countdown, 1000);
    },
    stop: function() {
      this.pause();
      this.timer = 25;
    },
    pause: function() {
      clearInterval(this.interval);
      this.interval = "";
    }
  }
};
</script>

<style scoped lang="scss">
$pink: #ff4384;
// $light-pink: #ffedf7;
$blue: #00a7ff;

.svg-container {
  position: relative;
  height: 0;
  width: 100%;
  padding: 0;
  padding-top: 100%;
}
.timer-pie {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  transform: rotate(-90deg);
}
.circle1 {
  fill: none;
  stroke: $pink;
  stroke-width: 1px;
}
.circle2 {
  fill: $pink;
  stroke: $pink;
  stroke-width: 50;
  stroke-dasharray: 60 158;
}
</style>
