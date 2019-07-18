<template>
  <div class="main-view">
    <div class="row">
      <div class="col-5">
        <div class="styled-input">
          <input
            class="add-to-do"
            type="text"
            placeholder="Add a New Mission..."
          />
          <span class="styled-input-append"
            ><i class="material-icons">add</i></span
          >
        </div>
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
import { mapActions } from "vuex";
export default {
  name: "MainView",
  components: {
    // AppPomodoro
  },
  data: function() {
    return {};
  },
  computed: {
    strSeconds: function() {
      return this.numberToDoubleDigitString(this.$store.state.pomodoro.seconds);
    },
    strMinutes: function() {
      return this.numberToDoubleDigitString(this.$store.state.pomodoro.minutes);
    }
  },
  methods: {
    ...mapActions(["runTimer", "start", "stop", "pause", "clearRunningTimer"]),
    numberToDoubleDigitString: function(num) {
      return num.toString().padStart(2, "0");
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.styled-input {
  position: relative;
  input[type="text"] {
    width: 100%;
    padding: 1.125em 1em;
    border: 0;
    &::placeholder {
      color: $pink;
      font-weight: 700;
      font-style: italic;
      text-transform: uppercase;
    }
  }
  &-append {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    background-color: $white;
    // font-size: 0;
    color: $pink;
    &:hover {
      cursor: pointer;
      // color: $dark-blue;
    }
  }
}

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
.is-running .circle2 {
  animation: fillup 1500s linear;
  animation-play-state: running;
}
.is-running .break .circle2 {
  animation: fillup 300s linear;
}
.is-running.is-pause .circle2 {
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
  .is-running {
    .circle4 {
      fill: $blue;
    }
    .stop {
      fill: $blue;
    }
  }
}
.is-running {
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
.is-running.is-pause {
  .pause {
    display: none;
  }
  .start {
    display: inline-block;
    fill: $white;
  }
}
</style>
