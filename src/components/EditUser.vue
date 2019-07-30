<template >
  <div class="edit-view">
    <b-row class="container-view">
      <b-col md="12" class>
        <h3>
          Edit User
          <span id="oldfn">{{geteditUserdata.first_name}}</span>
          <span id="oldln">{{geteditUserdata.last_name}}</span>
        </h3>
      </b-col>
    </b-row>
    <b-row class="container-view">
      <b-col md="8" class="left-side">
        <b-row class="col-content col-content-data">
          <b-col md="6">
            <label for="input-small">Imię:</label>
            <b-form-input size="sm" type="text" v-model="first_name" placeholder="Podaj imię" />
          </b-col>
          <b-col md="6">
            <label for="input-small">Nazwisko:</label>
            <b-form-input size="sm" type="text" v-model="last_name" placeholder="Podaj nazwisko" />
          </b-col>

          <div class="button-row">
            <b-col md="12" class>
              <b-button
                variant="primary"
                :disabled="!canAdd"
                @click="saveEdit({first_name, last_name, id, avatar})"
                :to="`/list`"
              >Zapisz zmiany</b-button>
            </b-col>
          </div>
        </b-row>
      </b-col>

      <b-col md="4" class="column right-side">
        <b-row class="col-content">
          <div class="avatar">
            <div class="avatar-row">
              <img class="avatar-img" v-bind:src="avatar" alt />
            </div>
          </div>
          <b-col md="12" class="avatar-inupt-row">
            <b-form-input size="sm" type="text" v-model="avatar" placeholder="Podaj url obrazka" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      id: 0,
      avatar: ""
    };
  },
  computed: {
    canAdd() {
      return (
        this.first_name.trim().length >= 3 && this.last_name.trim().length >= 3
      );
    },
    ...mapGetters({
      geteditUserdata: "geteditUserdata"
    })
  },
  methods: {
    ...mapActions(["saveEdit"])
  },
  mounted() {
    this.id = Number(this.geteditUserdata.id);
    this.first_name = this.geteditUserdata.first_name;
    this.last_name = this.geteditUserdata.last_name;
    this.avatar = this.geteditUserdata.avatar;
  }
};
</script>

<style lang="scss">
#oldfn,
#oldln {
  padding-right: 5px;
}
</style>