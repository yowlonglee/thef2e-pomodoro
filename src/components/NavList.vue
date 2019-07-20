<template>
  <div class="nav-list">
    <template v-if="$route.name === 'main'">
      <router-link class="nav-item" to="/to-do-list">
        <i class="material-icons md-36 md-light">list</i>
      </router-link>
      <router-link class="nav-item" to="/analytics">
        <i class="material-icons md-36 md-light">insert_chart</i>
      </router-link>
      <router-link class="nav-item" to="/ringtones">
        <i class="material-icons md-36 md-light">library_music</i>
      </router-link>
    </template>
    <template v-else>
      <router-link class="nav-item" to="/">
        <i class="material-icons md-36 md-light">close</i>
      </router-link>
    </template>
  </div>
</template>
<script>
export default {
  name: "NavList"
};
</script>
<style lang="scss" scoped>
.nav-list {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.nav-item {
  margin-bottom: 48px;
}
</style>
