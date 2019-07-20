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
        <template v-if="miniToDoList.length > 0">
          <div class="timer">
            <div class="timer-to-do to-do">
              <div class="to-do-radio" @click="toggleComplete">
                <i class="material-icons md-48 unchecked">
                  radio_button_unchecked
                </i>
                <i class="material-icons md-48 checked">
                  radio_button_checked
                </i>
              </div>
              <div class="to-do-container">
                <div class="to-do-title">{{ firstToDo.title }}</div>
                <div class="to-do-history">
                  <div class="history-group" v-if="firstToDo.pomodoro > 0">
                    <div
                      class="history-item"
                      v-for="n in firstToDo.pomodoro"
                      :key="n"
                    >
                      <i class="material-icons md-12">fiber_manual_record</i>
                    </div>
                  </div>
                  <div class="timer-svg-container">
                    <svg viewBox="-0.5 -0.5 101 101">
                      <use href="#circle1" class="circle1" />
                      <use href="#circle2" class="circle2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="timer-duration">
              <div class="duration-item">{{ strMinutes }}</div>
              <div class="duration-item">:</div>
              <div class="duration-item">{{ strSeconds }}</div>
            </div>
          </div>
          <div class="mini-to-do-list">
            <template v-if="miniToDoList.length > 0">
              <template v-for="todo in miniToDoList">
                <div class="to-do" :key="todo.title">
                  <div class="to-do-radio" @click="toggleComplete">
                    <i class="material-icons unchecked">
                      radio_button_unchecked
                    </i>
                    <i class="material-icons checked">
                      radio_button_checked
                    </i>
                  </div>
                  <div class="to-do-container">
                    <div class="to-do-title">{{ todo.title }}</div>
                    <div class="to-do-icon-start">
                      <i class="material-icons">play_circle_outline</i>
                    </div>
                  </div>
                </div>
              </template>
            </template>
            <template v-else>
              <div>
                <div>To do list is empty</div>
                <div>Try to add some tasks use the form above</div>
              </div>
            </template>
          </div>
        </template>
        <template v-else>
          <div>Your list is empty!</div>
        </template>
      </div>
      <div class="col-6 d-flex flex-align-items-center">
        <div class="svg-container" v-if="miniToDoList.length > 0">
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
    },
    miniToDoList: function() {
      const list = [];
      if (this.$store.state.toDos.length > 1) {
        for (let i = 1; i < 4; i++) {
          list.push(this.$store.state.toDos[i]);
        }
      }
      return list;
    },
    firstToDo: function() {
      return this.$store.state.toDos[0];
    }
  },
  methods: {
    ...mapActions(["runTimer", "start", "stop", "pause", "clearRunningTimer"]),
    numberToDoubleDigitString: function(num) {
      return num.toString().padStart(2, "0");
    },
    toggleComplete: function(event) {
      const el = event.currentTarget;
      el.classList.contains("done")
        ? el.classList.remove("done")
        : el.classList.add("done");
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";
@mixin ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.to-do {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid rgba($dark-blue, 0.2);
}
.to-do-radio {
  color: $dark-blue;
  margin-right: 4px;
  cursor: pointer;
  .checked {
    display: none;
  }
  &.done,
  &:hover {
    .checked {
      display: inline-block;
    }
    .unchecked {
      display: none;
    }
  }
}
.to-do-container {
  display: flex;
  flex-grow: 1;
  min-width: 0;
}
.to-do-title {
  color: $dark-blue;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.5rem;
  flex: 1;
  @include ellipsis;
}
.to-do-icon-start {
  color: $dark-blue;
}
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
.break {
  .styled-input {
    input[type="text"]::placeholder {
      color: $blue;
    }
  }
  .styled-input-append {
    color: $blue;
  }
}
.timer {
  margin-top: 145px;
  margin-bottom: 110px;
}
.timer-to-do {
  border-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
  .to-do-radio {
    margin-right: 16px;
  }
  .to-do-container {
    flex-direction: column;
  }
  .to-do-title {
    font-size: 1.5rem;
  }
  .to-do-history {
    display: flex;
    align-items: flex-end;
  }
  .history-group {
    display: inline-block;
  }
  .history-item {
    display: inline-block;
    color: $dark-blue;
    margin-right: 8px;
  }
}
.timer-svg-container {
  position: relative;
  width: 12px;
  height: 12px;
  svg {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }
}
.timer-duration {
  display: flex;
  justify-content: space-between;
}
.duration-item {
  color: $pink;
  font-size: 170px;
  font-weight: 700;
}
.break .duration-item {
  color: $blue;
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
.timer .circle1 {
  stroke-width: 50;
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
