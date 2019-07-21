<template>
  <div class="styled-input">
    <input
      class="add-to-do"
      type="text"
      placeholder="Add a New Mission..."
      v-on:keyup.enter="newToDo"
      ref="i"
    />
    <span class="styled-input-append" @click="newToDo">
      <i class="material-icons">add</i>
    </span>
  </div>
</template>
<script>
export default {
  name: "StyledInput",
  methods: {
    newToDo: function() {
      const val = this.$refs.i.value.trim();
      if (val) {
        this.$store.dispatch("add", val);
      }
      this.$refs.i.value = "";
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.styled-input {
  position: relative;
  input[type="text"] {
    width: 100%;
    padding: 1.125em 1em;
    border: 0;
    // color: $pink;
    font-weight: 700;
    font-style: italic;
    text-transform: uppercase;

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
</style>
