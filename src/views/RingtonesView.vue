<template>
  <div class="ringtones-view">
    <div class="row">
      <div class="col-4">
        <mini-nav-list />
        <mini-pomodoro />
      </div>
      <div class="col-5 offset-1">
        <div class="panel">
          <div class="panel-header">Work</div>
          <div class="panel-body">
            <ringtone-list type="work" />
          </div>
        </div>
        <div class="panel">
          <div class="panel-header">Break</div>
          <div class="panel-body">
            <ringtone-list type="break" />
          </div>
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
import RingtoneList from "@/components/RingtoneList.vue";
import MiniPomodoro from "@/components/MiniPomodoro.vue";
export default {
  name: "RingtonesView",
  components: {
    MiniNavList,
    RingtoneList,
    MiniPomodoro
  }
};
</script>
