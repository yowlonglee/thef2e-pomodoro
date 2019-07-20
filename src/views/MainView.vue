<template>
  <div class="main-view">
    <div class="row">
      <div class="col-5">
        <styled-input />
        <template v-if="toDoListLength > 0">
          <app-pomodoro-timer />
          <div class="mini-to-do-list">
            <template v-if="miniToDoList.length > 0">
              <to-do
                v-for="todo in miniToDoList"
                :key="todo.title"
                :title="todo.title"
              />
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
          <div>To do list is empty</div>
          <div>Try to add some tasks use the form above</div>
        </template>
      </div>
      <div class="col-6 d-flex flex-align-items-center">
        <template v-if="miniToDoList.length > 0">
          <app-pomodoro-pie />
        </template>
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
import AppPomodoroTimer from "@/components/AppPomodoroTimer.vue";
import AppPomodoroPie from "@/components/AppPomodoroPie.vue";
import StyledInput from "@/components/StyledInput.vue";
import ToDo from "@/components/ToDo.vue";

export default {
  name: "MainView",
  components: {
    AppPomodoroTimer,
    AppPomodoroPie,
    StyledInput,
    ToDo
  },
  data: function() {
    return {};
  },
  computed: {
    toDoListLength: function() {
      return this.$store.state.toDos.length;
    },
    miniToDoList: function() {
      const list = [];
      if (this.$store.state.toDos.length > 1) {
        for (let i = 1; i < 4; i++) {
          list.push(this.$store.state.toDos[i]);
        }
      }
      return list;
    }
  }
};
</script>

<style lang="scss">
// @import "@/assets/styles/variables.scss";

.nav {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.nav-item {
  margin-top: 48px;
}
</style>
