<template>
  <div
    id="app"
    :class="{
      break: pomodoro.isBreak,
      'is-main-layout': $route.name === 'main'
    }"
  >
    <div
      class="container"
      :class="{
        'is-countdown': pomodoro.isCountdown,
        'is-pause': pomodoro.isPause
      }"
    >
      <router-view class="view-wrapper">
        <NavList />
      </router-view>
    </div>
  </div>
</template>

<script>
import NavList from "@/components/NavList.vue";
export default {
  components: {
    NavList
  },
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
  background: $dark-blue;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &.is-main-layout {
    background: linear-gradient(to right, $light-pink 50%, $dark-blue 50%);
    &.break {
      background: linear-gradient(to right, $light-blue 50%, $dark-blue 50%);
    }
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
}

.is-main-layout {
  .container {
    background: linear-gradient(
      to right,
      $light-pink color-stop($col, $gutter-width),
      transparent color-stop($col, $gutter-width)
    );
  }
}
.is-main-layout.break .container {
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
    min-width: 1px;
    @include col-margins;
  }
}

@for $n from 1 through $col {
  .offset-#{$n} {
    margin-left: calc(15px + (30px + 65px) * #{$n});
  }
}

.material-icons {
  vertical-align: bottom;
  &.md-light {
    color: $white;
  }
  &.md-12 {
    font-size: 12px;
  }
  &.md-36 {
    font-size: 36px;
  }
  &.md-48 {
    font-size: 48px;
  }
}
.view-wrapper {
  padding: 3rem 0;
}

.d-none {
  display: none;
}
.d-flex {
  display: flex;
}
.flex-column {
  flex-direction: column;
}
.flex-grow {
  flex-grow: 1;
}
.flex-align-items-center {
  align-items: center;
}
.justify-between {
  justify-content: space-between;
}
.panel-header {
  color: $white;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 700;
  padding: 8px 16px;
  background-color: rgba($white, 0.2);
  display: flex;
  justify-content: space-between;
}
.panel-body {
  margin-top: 8px;
  margin-bottom: 48px;
}
</style>
