import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pomodoro: {
      minutes: 25,
      seconds: 0,
      isBreak: false,
      isCountdown: false,
      isPause: false
    },
    toDos: [
      { title: "Better to persist than perfect", pomodoro: 2 },
      {
        title:
          "The second thing to do today is always better than the first one",
        pomodoro: 0
      },
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
      { year: 2019, month: 6, date: 30, pomodoro: 3 },
      { year: 2019, month: 7, date: 1, pomodoro: 2 },
      { year: 2019, month: 7, date: 2, pomodoro: 10 },
      { year: 2019, month: 7, date: 3, pomodoro: 2 },
      { year: 2019, month: 7, date: 4, pomodoro: 0 },
      { year: 2019, month: 7, date: 5, pomodoro: 9 },
      { year: 2019, month: 7, date: 6, pomodoro: 8 },
      { year: 2019, month: 7, date: 7, pomodoro: 7 },
      { year: 2019, month: 7, date: 8, pomodoro: 8 },
      { year: 2019, month: 7, date: 9, pomodoro: 5 },
      { year: 2019, month: 7, date: 10, pomodoro: 4 },
      { year: 2019, month: 7, date: 11, pomodoro: 4 },
      { year: 2019, month: 7, date: 12, pomodoro: 0 },
      { year: 2019, month: 7, date: 13, pomodoro: 9 },
      { year: 2019, month: 7, date: 14, pomodoro: 3 },
      { year: 2019, month: 7, date: 15, pomodoro: 4 },
      { year: 2019, month: 7, date: 16, pomodoro: 10 },
      { year: 2019, month: 7, date: 17, pomodoro: 5 },
      { year: 2019, month: 7, date: 18, pomodoro: 1 },
      { year: 2019, month: 7, date: 19, pomodoro: 2 },
      { year: 2019, month: 7, date: 22, pomodoro: 6 }
    ],
    interval: "",
    ringtones: {
      work: "none",
      break: "none"
    }
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
    },
    addToDo(state, todo) {
      state.toDos.push({ title: todo, pomodoro: 0 });
    },
    removeToDo(state, index) {
      state.finishedToDos.push(state.toDos[index]);
      state.toDos.splice(index, 1);
    },
    restoreToDo(state, index) {
      state.toDos.push(state.finishedToDos[index]);
      state.finishedToDos.splice(index, 1);
    },
    continue(state, index) {
      const splicedToDo = state.toDos.splice(index, 1);
      state.toDos.unshift(splicedToDo[0]);
    },
    changeRingtone(state, ringtone) {
      state.ringtones[ringtone.type] = ringtone.name;
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
      commit("setPomodoroState", { name: "isCountdown", val: true });
      const timer = setInterval(() => dispatch("runTimer"), 1000);
      commit("setTimer", timer);
    },
    stop: function({ commit, dispatch, state }) {
      const isBreak = !state.pomodoro.isBreak;
      const minutes = isBreak ? 5 : 25;
      dispatch("clearRunningTimer");
      commit("setPomodoroState", { name: "isCountdown", val: false });
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
    },
    add: function({ commit }, todo) {
      commit("addToDo", todo);
    },
    remove: function({ commit }, index) {
      commit("removeToDo", index);
    },
    restore: function({ commit }, index) {
      commit("restoreToDo", index);
    },
    continue: function({ commit, dispatch }, index) {
      commit("continue", index);
      dispatch("clearRunningTimer");
      commit("setPomodoroState", { name: "isBreak", val: false });
      commit("setPomodoroState", { name: "minutes", val: 25 });
      commit("setPomodoroState", { name: "seconds", val: 0 });
      dispatch("start");
    },
    changeRingtone: function({ commit }, ringtone) {
      commit("changeRingtone", ringtone);
    }
  }
});
