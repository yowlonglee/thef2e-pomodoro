<template>
  <div
    class="main-view"
    :class="{ 'is-countdown': isCountdown, 'is-pause': isPause }"
  >
    <div class="row" :class="{ break: isBreak }">
      <div class="col-5">
        <div>new to do box</div>
        <div>
          <div>current to do</div>
          <div>pomodoro group</div>
        </div>
        <div>{{ strMinutes }}</div>
        <div>:</div>
        <div>{{ strSeconds }}</div>
        <div>mini to do list</div>
      </div>
      <div class="col-6">
        <div class="svg-container">
          <svg viewBox="-0.5 -0.5 101 101" class="timer-pie">
            <circle class="circle1" r="50" cx="50" cy="50" />
            <circle
              class="circle2"
              r="25"
              cx="50"
              cy="50"
              transform="rotate(-90 50 50)"
            />
            <circle class="circle3" r="46.5" cx="50" cy="50" />
            <circle class="circle4" r="9" cx="50" cy="50" />
            <g class="pause" @click="pause">
              <rect class="rect1" width="6" height="6" x="47" y="47" />
              <rect class="rect2" width="2" height="6" x="49" y="47" />
            </g>
            <polygon
              class="start"
              @click="start"
              points="48.5,47 53,50 48.5,53"
            />
            <rect
              class="stop"
              @click="stop"
              width="3"
              height="3"
              x="61"
              y="56"
              id="stop"
            />
          </svg>
        </div>
      </div>
      <div class="col-1">
        <div class="nav">
          <router-link class="nav-item" to="/">
            <i class="material-icons md-36 md-light">close</i>
          </router-link>
          <router-link class="nav-item" to="/to-do-list">
            <i class="material-icons md-36 md-light">list</i>
          </router-link>
          <router-link class="nav-item" to="/analytics">
            <i class="material-icons md-36 md-light">insert_chart</i>
          </router-link>
          <router-link class="nav-item" to="/ringtones">
            <i class="material-icons md-36 md-light">library_music</i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import AppPomodoro from "@/components/AppPomodoro.vue";
export default {
  name: "MainView",
  components: {
    // AppPomodoro
  },
  data: function() {
    return {
      isBreak: false,
      isCountdown: false,
      isPause: false,
      minutes: 25,
      seconds: 0,
      interval: ""
    };
  },
  computed: {
    strSeconds: function() {
      return this.numberToDoubleDigitString(this.seconds);
    },
    strMinutes: function() {
      return this.numberToDoubleDigitString(this.minutes);
    }
  },
  methods: {
    countdown: function() {
      if (this.seconds == 0) {
        if (this.minutes == 0) {
          // complete
          this.stop();
          return;
        }
        this.seconds = 59;
        this.minutes--;
      } else {
        this.seconds--;
      }
    },
    start: function() {
      this.isPause = false;
      this.isCountdown = true;
      this.interval = setInterval(this.countdown, 1000);
    },
    stop: function() {
      this.clearTimer();
      this.isCountdown = false;
      this.isPause = false;
      this.isBreak = !this.isBreak;
      this.minutes = this.isBreak ? 5 : 25;
      this.seconds = 0;
    },
    pause: function() {
      this.clearTimer();
      this.isPause = true;
    },
    clearTimer: function() {
      clearInterval(this.interval);
      this.interval = "";
    },
    numberToDoubleDigitString: function(num) {
      return num.toString().padStart(2, "0");
    }
  }
};
</script>

<style lang="scss">
$pink: #ff4384;
$blue: #00a7ff;
$white: #fff;

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
}
.circle1 {
  fill: none;
  stroke: $pink;
  stroke-width: 1;
}
.circle2 {
  fill: $pink;
  stroke: $pink;
  stroke-width: 50;
  stroke-dasharray: 0 158;
}
.is-countdown .circle2 {
  animation: fillup 1500s linear;
  animation-play-state: running;
}
.is-countdown .break .circle2 {
  animation: fillup 300s linear;
}
.is-countdown.is-pause .circle2 {
  animation-play-state: paused;
}
@keyframes fillup {
  to {
    stroke-dasharray: 158 158;
  }
}
.circle3 {
  fill: $pink;
  stroke: $pink;
  stroke-width: 1;
}
.circle4 {
  fill: $white;
}
.rect1 {
  fill: $white;
}
.rect2 {
  fill: $pink;
}
.pause {
  display: none;
}
.start {
  fill: $pink;
}
.stop {
  fill: $white;
}
.nav {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.nav-item {
  margin-top: 48px;
  font-size: 0;
}
.material-icons {
  &.md-light {
    color: $white;
  }
  &.md-36 {
    font-size: 36px;
  }
}
.break {
  .circle1 {
    stroke: $blue;
  }
  .circle2 {
    fill: $blue;
    stroke: $blue;
  }
  .circle3 {
    fill: $blue;
    stroke: $blue;
  }
  .rect2 {
    fill: $blue;
  }
  .start {
    fill: $blue;
  }
}
.is-countdown {
  .circle3 {
    fill: $white;
  }
  .circle4 {
    fill: $pink;
  }
  .stop {
    fill: $pink;
  }
  .break {
    .circle4 {
      fill: $blue;
    }
    .stop {
      fill: $blue;
    }
  }
  .pause {
    display: inline-block;
  }
  .start {
    display: none;
  }
}
.is-countdown.is-pause {
  .pause {
    display: none;
  }
  .start {
    display: inline-block;
    fill: $white;
  }
}
</style>
