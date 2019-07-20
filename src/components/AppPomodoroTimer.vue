<template>
  <div class="app-pomodoro-timer">
    <div class="timer">
      <div class="timer-to-do">
        <div class="to-do">
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
      </div>
      <div class="timer-duration">
        <div class="duration-item">{{ strMinutes }}</div>
        <div class="duration-item">:</div>
        <div class="duration-item">{{ strSeconds }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppPomodoroTimer",
  props: {},
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
    firstToDo: function() {
      return this.$store.state.toDos[0];
    }
  },
  methods: {
    numberToDoubleDigitString: function(num) {
      return num.toString().padStart(2, "0");
    },
    toggleComplete: function() {}
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";
.timer {
  margin-top: 145px;
  margin-bottom: 110px;
}
.timer-to-do {
  .to-do {
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
</style>
