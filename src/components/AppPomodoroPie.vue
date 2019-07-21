<template>
  <div class="app-pomodoro-pie svg-container">
    <svg viewBox="-0.5 -0.5 101 101" class="timer-pie">
      <circle id="circle1" class="circle1" r="50" cx="50" cy="50" />
      <circle
        id="circle2"
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
      <polygon class="start" @click="start" points="48.5,47 53,50 48.5,53" />
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
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AppPomodoroPie",
  props: {},
  data: function() {
    return {};
  },
  methods: {
    ...mapActions(["runTimer", "start", "stop", "pause", "clearRunningTimer"])
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
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
  fill: transparent;
  stroke: $pink;
  stroke-width: 50;
  stroke-dasharray: 0 158;
}
.is-countdown .circle2 {
  animation: fillup 1500s linear;
  animation-play-state: running;
}
.break .is-countdown .circle2 {
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

.break {
  .circle1 {
    stroke: $blue;
  }
  .circle2 {
    // fill: $blue;
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
  .is-countdown {
    .circle4 {
      fill: $blue;
    }
    .stop {
      fill: $blue;
    }
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
