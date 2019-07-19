import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pomodoro: {
      minutes: 25,
      seconds: 0,
      isBreak: false,
      isRunning: false,
      isPause: false
    },
    toDos: [
      { title: "The first thing to do today", pomodoro: 2 },
      { title: "The second thing to do today", pomodoro: 0 },
      { title: "The third thing to do today", pomodoro: 3 },
      { title: "The fourth thing to do today", pomodoro: 5 },
      { title: "The fifth thing to do today", pomodoro: 0 }
    ],
    finishedToDos: [
      { title: "Meeting with Jane", pomodoro: 2 },
      { title: "Watch Game of Thrones", pomodoro: 4 },
      { title: "Listen to podcast", pomodoro: 1 },
      { title: "Cook dinner", pomodoro: 2 }
    ],
    history: [
      { year: 2019, month: 6, day: 30, pomodoro: 3 },
      { year: 2019, month: 7, day: 1, pomodoro: 2 },
      { year: 2019, month: 7, day: 2, pomodoro: 10 },
      { year: 2019, month: 7, day: 3, pomodoro: 2 },
      { year: 2019, month: 7, day: 4, pomodoro: 0 },
      { year: 2019, month: 7, day: 5, pomodoro: 9 },
      { year: 2019, month: 7, day: 6, pomodoro: 8 },
      { year: 2019, month: 7, day: 7, pomodoro: 7 },
      { year: 2019, month: 7, day: 8, pomodoro: 8 },
      { year: 2019, month: 7, day: 9, pomodoro: 5 },
      { year: 2019, month: 7, day: 10, pomodoro: 4 },
      { year: 2019, month: 7, day: 11, pomodoro: 4 },
      { year: 2019, month: 7, day: 12, pomodoro: 0 },
      { year: 2019, month: 7, day: 13, pomodoro: 9 },
      { year: 2019, month: 7, day: 14, pomodoro: 3 },
      { year: 2019, month: 7, day: 15, pomodoro: 4 },
      { year: 2019, month: 7, day: 16, pomodoro: 10 },
      { year: 2019, month: 7, day: 17, pomodoro: 5 },
      { year: 2019, month: 7, day: 18, pomodoro: 1 },
      { year: 2019, month: 7, day: 19, pomodoro: 2 },
      { year: 2019, month: 7, day: 20, pomodoro: 6 }
    ],
    interval: ""
  },
  getters: {},
  mutations: {
    decrement(state, name) {
      state.pomodoro[name]--;
    },
    setTime(state, payload) {
      state.pomodoro[payload.name] = payload.amount;
    },
    setPomodoroState(state, payload) {
      state.pomodoro[payload.name] = payload.val;
    },
    setTimer(state, val) {
      if (!val) {
        val = "";
      }
      state.interval = val;
    }
  },
  actions: {
    runTimer: function({ commit, dispatch, state }) {
      if (state.pomodoro.seconds == 0) {
        if (state.pomodoro.minutes == 0) {
          dispatch("stop");
          return;
        }
        commit("setPomodoroState", { name: "seconds", val: 59 });
        commit("decrement", "minutes");
      } else {
        commit("decrement", "seconds");
      }
    },
    start: function({ commit, dispatch }) {
      commit("setPomodoroState", { name: "isPause", val: false });
      commit("setPomodoroState", { name: "isRunning", val: true });
      const timer = setInterval(() => dispatch("runTimer"), 1000);
      commit("setTimer", timer);
    },
    stop: function({ commit, dispatch, state }) {
      const isBreak = !state.pomodoro.isBreak;
      const minutes = isBreak ? 5 : 25;
      dispatch("clearRunningTimer");
      commit("setPomodoroState", { name: "isRunning", val: false });
      commit("setPomodoroState", { name: "isPause", val: false });
      commit("setPomodoroState", { name: "isBreak", val: isBreak });
      commit("setPomodoroState", { name: "minutes", val: minutes });
      commit("setPomodoroState", { name: "seconds", val: 0 });
    },
    pause: function({ commit, dispatch }) {
      dispatch("clearRunningTimer");
      commit("setPomodoroState", { name: "isPause", val: true });
    },
    clearRunningTimer: function({ commit, state }) {
      clearInterval(state.interval);
      commit("setTimer");
    }
  }
});
