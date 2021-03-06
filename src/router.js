import Vue from "vue";
import Router from "vue-router";
import MainView from "./views/MainView.vue";
import ToDoListView from "./views/ToDoListView.vue";
import AnalyticsView from "./views/AnalyticsView.vue";
import RingtonesView from "./views/RingtonesView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "main",
      component: MainView
    },
    {
      path: "/to-do-list",
      name: "to-do-list",
      component: ToDoListView
    },
    {
      path: "/analytics",
      name: "analytics",
      component: AnalyticsView
    },
    {
      path: "/ringtones",
      name: "ringtones",
      component: RingtonesView
    }
  ]
});
