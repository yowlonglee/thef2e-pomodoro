<template>
  <div class="app-pomodoro-timer">
    <div class="timer">
      <to-do
        :title="firstToDo.title"
        :pomodoro="firstToDo.pomodoro"
        isTimerLayout
      />
      <div class="timer-duration">
        <div class="duration-item">{{ strMinutes }}</div>
        <div class="duration-item">:</div>
        <div class="duration-item">{{ strSeconds }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import ToDo from "@/components/ToDo.vue";
export default {
  name: "AppPomodoroTimer",
  components: {
    ToDo
  },
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
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.timer {
  margin-top: 145px;
  margin-bottom: 110px;
}

.timer-duration {
  display: flex;
  justify-content: space-between;
}
.duration-item {
  color: $pink;
  font-size: 170px;
  font-weight: 700;
  .break & {
    color: $blue;
  }
}
</style>
