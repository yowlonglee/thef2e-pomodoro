<template>
  <div class="analytics-view">
    <div class="row">
      <div class="col-4">
        <mini-nav-list />
        <mini-pomodoro />
      </div>
      <div class="col-5 offset-1">
        <div class="panel">
          <div class="panel-header">Focus Time</div>
          <div class="panel-body report-panel">
            <div class="report">
              <div class="report-title">Today</div>
              <div class="report-sum">{{ sumToday }}</div>
              <div class="report-tomato">/tomato</div>
            </div>
            <div class="report">
              <div class="report-title">Week</div>
              <div class="report-sum">{{ sumWeek }}</div>
              <div class="report-tomato">/tomato</div>
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-header">Chart</div>
          <div class="panel-body"></div>
        </div>
      </div>
      <div class="col-1 offset-1">
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
import MiniNavList from "@/components/MiniNavList.vue";
import MiniPomodoro from "@/components/MiniPomodoro.vue";
export default {
  name: "AnalyticsView",
  components: {
    MiniNavList,
    MiniPomodoro
  },
  computed: {
    today: function() {
      const now = new Date();
      return {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        date: now.getDate(),
        day: now.getDay()
      };
    },
    sumToday: function() {
      const lastHistory = this.$store.state.history[
        this.$store.state.history.length - 1
      ];
      if (
        lastHistory.year === this.today.year &&
        lastHistory.month === this.today.month &&
        lastHistory.date === this.today.date
      ) {
        return lastHistory.pomodoro;
      }
      return 0;
    },
    sumWeek: function() {
      // console.log(this.today.day);
      return 50;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.report-panel {
  margin-top: 16px;
}
.report {
  width: 50%;
  display: inline-block;
}
.report-title {
  color: $white;
  font-weight: 700;
  text-transform: uppercase;
}
.report-sum {
  color: $pink;
  font-size: 4rem;
  font-weight: 700;
  display: inline-block;
}
.report-tomato {
  display: inline-block;
  color: rgba($white, 0.2);
  font-weight: 700;
  text-transform: uppercase;
  margin-left: 8px;
}
</style>
