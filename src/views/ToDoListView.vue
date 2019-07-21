<template>
  <div class="to-do-list-view">
    <div class="row">
      <div class="col-4">
        <mini-nav-list />
      </div>
      <div class="col-5 offset-1">
        <styled-input />
        <div class="accordion" @click="toggleAccordion">
          <div class="accordion-header">
            <div>To-do - {{ toDoList.length }}</div>
            <i class="material-icons">arrow_drop_up</i>
          </div>
          <div class="accordion-panel">
            <template v-if="toDoList.length > 0">
              <to-do
                v-for="(todo, index) in toDoList"
                :key="todo.title"
                :title="todo.title"
                :index="index"
                @remove="toDoList.splice(index, 1)"
              />
            </template>
            <template v-else>
              <div>You have no to dos</div>
            </template>
          </div>
        </div>
        <div class="accordion" @click="toggleAccordion">
          <div class="accordion-header">
            <div>Done - {{ finishedToDoList.length }}</div>
            <i class="material-icons">arrow_drop_up</i>
          </div>
          <div class="accordion-panel finished">
            <template v-if="finishedToDoList.length > 0">
              <to-do
                v-for="(todo, index) in finishedToDoList"
                :key="todo.title"
                :title="todo.title"
                :pomodoro="todo.pomodoro"
                :index="index"
                done
              />
            </template>
          </div>
        </div>
      </div>
      <div class="col-1 offset-1">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import MiniNavList from "@/components/MiniNavList.vue";
import StyledInput from "@/components/StyledInput.vue";
import ToDo from "@/components/ToDo.vue";
export default {
  name: "ToDoListView",
  components: {
    MiniNavList,
    StyledInput,
    ToDo
  },
  computed: {
    toDoList: function() {
      return this.$store.state.toDos;
    },
    finishedToDoList: function() {
      return this.$store.state.finishedToDos;
    }
  },
  methods: {
    toggleAccordion: function(event) {
      if (event.target.classList.contains("accordion-header")) {
        event.currentTarget.classList.toggle("hide");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.accordion {
  margin-top: 48px;
}
.accordion-header {
  color: $white;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 700;
  padding: 8px 16px;
  background-color: rgba($white, 0.2);
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    background-color: rgba($white, 0.4);
  }
}
.accordion-panel {
  margin-top: 16px;
  overflow: auto;
  max-height: 270px;
  transition: max-height 0.2s ease-in-out;
  // &.finished {
  //   max-height: 180px;
  // }
}

.hide {
  .material-icons {
    transform: rotate(180deg);
  }
  .accordion-panel {
    max-height: 0;
  }
}
</style>
