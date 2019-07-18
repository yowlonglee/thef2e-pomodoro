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
    toDos: [],
    interval: ""
  },
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
