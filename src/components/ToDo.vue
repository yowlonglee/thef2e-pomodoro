<template>
  <div class="to-do" :class="{ 'timer-to-do': isTimerLayout }">
    <div class="to-do-radio" @click="toggleComplete">
      <i class="material-icons unchecked" :class="{ 'md-48': isTimerLayout }">
        radio_button_unchecked
      </i>
      <i class="material-icons checked" :class="{ 'md-48': isTimerLayout }">
        radio_button_checked
      </i>
    </div>
    <div class="to-do-container">
      <div class="to-do-title">{{ title }}</div>
      <template v-if="isTimerLayout">
        <div class="to-do-history">
          <div class="history-group" v-if="pomodoro > 0">
            <div class="history-item" v-for="n in pomodoro" :key="n">
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
      </template>
      <template v-else>
        <div class="to-do-icon-start">
          <i class="material-icons">play_circle_outline</i>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "ToDo",
  props: {
    title: String,
    pomodoro: {
      type: Number,
      default: 0
    },
    isTimerLayout: {
      type: Boolean,
      default: false
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
<style lang="scss" scoped>
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

.timer-to-do {
  &.to-do {
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
</style>
