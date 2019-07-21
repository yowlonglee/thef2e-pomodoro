<template>
  <div class="to-do-list-view">
    <div class="row">
      <div class="col-4">
        <mini-nav-list />
      </div>
      <div class="col-7"></div>
      <div class="col-1">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import MiniNavList from "@/components/MiniNavList.vue";
export default {
  name: "ToDoListView",
  components: {
    MiniNavList
  }
};
</script>
