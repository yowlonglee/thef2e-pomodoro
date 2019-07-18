<template>
  <div id="app" :class="{ break: pomodoro.isBreak }">
    <div
      class="container"
      :class="{
        'is-running': pomodoro.isRunning,
        'is-pause': pomodoro.isPause
      }"
    >
      <router-view class="wrapper" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    pomodoro: function() {
      return this.$store.state.pomodoro;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

html {
  box-sizing: border-box;
  font-size: 16px;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body,
#app {
  width: 100%;
  min-height: 100vh;
}

#app {
  background: linear-gradient(to right, $light-pink 50%, $dark-blue 50%);
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &.break {
    background: linear-gradient(to right, $light-blue 50%, $dark-blue 50%);
  }
}

@function color-stop($col, $gutter-width) {
  $stop: calc(
    ((100% - #{$gutter-width} * (#{$col} - 1)) / #{$col} + #{$gutter-width}) * 8 -
      (#{$gutter-width} / 2)
  );
  @return $stop;
}

.container {
  max-width: 1110px;
  min-width: 600px;
  margin-right: auto;
  margin-left: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    to right,
    $light-pink color-stop($col, $gutter-width),
    transparent color-stop($col, $gutter-width)
  );
}
.break .container {
  background: linear-gradient(
    to right,
    $light-blue color-stop($col, $gutter-width),
    transparent color-stop($col, $gutter-width)
  );
}

.row {
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
}

@mixin col-margins {
  margin-left: 15px;
  margin-right: 15px;
}

@for $n from 1 through $col {
  .col-#{$n} {
    width: calc(
      (100% - #{$gutter-width} * #{$col - 1}) /
        #{$col} *
        #{$n} +
        (#{$gutter-width} * #{$n - 1})
    );
    @include col-margins;
  }
}

.material-icons {
  vertical-align: middle;
  &.md-light {
    color: $white;
  }
  &.md-36 {
    font-size: 36px;
  }
}

.wrapper {
  padding: 3rem 0;
}
</style>
