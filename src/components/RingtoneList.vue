<template>
  <div class="ringtone-list">
    <template v-for="sound in sounds">
      <div
        class="ringtone"
        :class="{ active: currentRingtones[type] === sound }"
        :key="sound"
        :data-name="sound"
      >
        <div class="ringtone-radio" @click="select">
          <i class="material-icons unchecked">
            radio_button_unchecked
          </i>
          <i class="material-icons checked">
            radio_button_checked
          </i>
        </div>
        <div class="ringtone-title">{{ sound }}</div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "RingtoneList",
  props: { type: String },
  data: function() {
    return {
      sounds: [
        "none",
        "default",
        "alarm",
        "alert",
        "beep",
        "bell",
        "bird",
        "bungle",
        "digital",
        "drop",
        "horn",
        "music",
        "ring",
        "warning",
        "whistle"
      ]
    };
  },
  computed: {
    currentRingtones: function() {
      return this.$store.state.ringtones;
    }
  },
  methods: {
    select: function(event) {
      const el = event.target.closest(".ringtone");
      this.$store.dispatch("changeRingtone", {
        type: this.type,
        name: el.dataset.name
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.ringtone-list {
  display: flex;
  flex-wrap: wrap;
}
.ringtone {
  width: 33.33%;
  display: flex;
  padding: 8px 0;
}
.ringtone-radio {
  margin-right: 4px;
  cursor: pointer;
  color: $white;
  .active & {
    color: $pink;
    .checked {
      display: inline-block;
    }
    .unchecked {
      display: none;
    }
  }
  .checked {
    display: none;
  }
}

.ringtone-title {
  color: $white;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.5rem;
  flex-grow: 1;
}
</style>
