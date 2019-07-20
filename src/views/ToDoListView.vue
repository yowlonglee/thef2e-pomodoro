<template>
  <div class="to-do-list-view">
    <div class="row">
      <div class="col-11">
        <h1>This is the to do list page</h1>
      </div>
      <div class="col-1">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ToDoListView"
};
</script>
