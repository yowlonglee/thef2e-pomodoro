<template>
  <div class="mini-nav-list">
    <router-link class="mini-nav-item" to="/to-do-list">
      <i class="material-icons md-36">list</i>
      <div>to-do list</div>
    </router-link>
    <router-link class="mini-nav-item" to="/analytics">
      <i class="material-icons md-36">insert_chart</i>
      <div>analytics</div>
    </router-link>
    <router-link class="mini-nav-item" to="/ringtones">
      <i class="material-icons md-36">library_music</i>
      <div>ringtones</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "MiniNavList"
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.mini-nav-item {
  color: rgba($white, 0.2);
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 42px;
  div {
    margin-left: 8px;
    text-transform: uppercase;
    font-size: 2.25rem;
    font-weight: 700;
  }
  &.router-link-active {
    color: $pink;
  }
}
</style>
