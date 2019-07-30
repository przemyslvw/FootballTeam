<template>
  <div class="my-app">
    <b-container>
      <router-view></router-view>
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
</style>