<template>
  <div class="my-app">
    <b-container>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({}),
  methods: {
    ...mapActions(["createdUsers"])
  },
  created() {
    this.createdUsers();
  }
};
</script>


<style lang="scss">
.my-app {
  padding: 50px 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}

.fade-enter,
.fade-leave-toe {
  opacity: 0;
}
</style>