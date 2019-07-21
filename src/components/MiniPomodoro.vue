<template>
  <div class="mini-pomodoro-container">
    <div class="mini-pomodoro">
      <div class="mini-pomodoro-group">
        <div class="mini-controls">
          <svg viewBox="-3 -3 106 106" class="control-group">
            <circle class="stroke" r="50" cx="50" cy="50" />
            <circle class="filler" r="44" cx="50" cy="50" />
            <circle
              class="pie"
              r="22"
              cx="50"
              cy="50"
              transform="rotate(-90 50 50)"
            />
            <circle class="cover" r="36" cx="50" cy="50" />
            <g class="pause" @click="pause">
              <rect class="rect1" width="33" height="40" x="33" y="30" />
              <rect class="rect2" width="11" height="40" x="44" y="30" />
            </g>
            <polygon class="start" @click="start" points="38,33 66,50 38,66" />
          </svg>
        </div>
        <div class="timer-duration">
          <div class="duration-item">{{ strMinutes }}</div>
          <div class="duration-item">:</div>
          <div class="duration-item">{{ strSeconds }}</div>
        </div>
        <div class="mini-pomodoro-title">{{ firstToDo }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "MiniPomodoro",
  computed: {
    strSeconds: function() {
      return this.numberToDoubleDigitString(this.$store.state.pomodoro.seconds);
    },
    strMinutes: function() {
      return this.numberToDoubleDigitString(this.$store.state.pomodoro.minutes);
    },
    firstToDo: function() {
      return this.$store.state.toDos[0].title;
    }
  },
  methods: {
    ...mapActions(["start", "pause"]),
    numberToDoubleDigitString: function(num) {
      return num.toString().padStart(2, "0");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.mini-pomodoro-container {
  position: relative;
  height: 0;
  width: 100%;
  padding: 0;
  padding-top: 100%;
  overflow: hidden;
  align-self: flex-end;
}
.mini-pomodoro {
  background: $light-pink;
  .break & {
    background: $light-blue;
  }
  position: absolute;
  left: 0;
  top: 50%;
  height: 100%;
  width: 100%;

  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
}
.mini-pomodoro-group {
  transform: translateY(-25%);
}
.timer-duration {
  display: flex;
  justify-content: center;
}
.duration-item {
  color: $pink;
  font-size: 64px;
  font-weight: 700;
  .break & {
    color: $blue;
  }
}

.mini-pomodoro-title {
  color: $dark-blue;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.mini-controls {
  width: 116px;
  height: 116px;
  margin: auto;
}
.control-group {
  width: 100%;
  height: 100%;
}
.stroke {
  fill: $pink;
  stroke: $dark-blue;
  stroke-width: 6;
  .break & {
    fill: $blue;
  }
}
.filler {
  fill: $dark-blue;
}
.pie {
  fill: $dark-blue;
  stroke: $pink;
  .break & {
    stroke: $blue;
  }
  stroke-width: 44;
  stroke-dasharray: 0 138;
  .is-countdown & {
    animation: fillup 1500s linear;
    animation-play-state: running;
  }
  .break .is-countdown & {
    animation: fillup 300s linear;
  }
  .is-countdown.is-pause & {
    animation-play-state: paused;
  }
}
@keyframes fillup {
  to {
    stroke-dasharray: 138 138;
  }
}

.cover {
  fill: $pink;
  stroke: $pink;
  .break & {
    fill: $blue;
    stroke: $blue;
  }
  stroke-width: 2;
  .is-countdown & {
    fill: $white;
  }
}
.rect1 {
  fill: $white;
}
.rect2 {
  fill: $pink;
}
.is-countdown {
  .rect1 {
    fill: $pink;
  }
  .rect2 {
    fill: $white;
  }
}
.break {
  .rect1 {
    fill: $blue;
  }
  .rect2 {
    fill: $white;
  }
}
.pause {
  display: none;
  .is-countdown & {
    display: inline-block;
  }
}
.is-countdown.is-pause {
  .pause {
    display: none;
  }
}
.start {
  fill: $white;
  .is-countdown & {
    display: none;
  }
}
.break {
  .start {
    fill: $white;
  }
  .is-countdown {
    .start {
      fill: $blue;
    }
  }
}

.is-countdown.is-pause {
  .start {
    display: inline-block;
    // fill: $pink;
  }
}
</style>
