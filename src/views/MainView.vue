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
          <app-pomodoro-timer />
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
// import { mapActions } from "vuex";
export default {
  name: "MainView",
  components: {
    AppPomodoroTimer,
    AppPomodoroPie
  },
  data: function() {
    return {};
  },
  computed: {
    miniToDoList: function() {
      const list = [];
      if (this.$store.state.toDos.length > 1) {
        for (let i = 1; i < 4; i++) {
          list.push(this.$store.state.toDos[i]);
        }
      }
      return list;
    }
  },
  methods: {
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

.nav {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.nav-item {
  margin-top: 48px;
}
</style>
