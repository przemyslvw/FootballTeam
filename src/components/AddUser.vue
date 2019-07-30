<template >
  <div class="edit-view">
    <b-row class="container-view">
      <b-col md="12" class>
        <h3>Add user</h3>
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
                @click="adding({first_name, last_name, id, avatar})"
                :to="`/list`"
              >Dodaj</b-button>
            </b-col>
          </div>
        </b-row>
      </b-col>
      <b-col md="4" class="column right-side">
        <b-row class="col-content">
          <div class="avatar">
            <div class="avatar-row">
              <img class="avatar-img" v-bind:src="this.avatar" alt />
            </div>
          </div>
          <b-col md="12" class="avatar-inupt-row">
            <b-form-input size="sm" type="text" v-model="avatar" placeholder="Podaj nazwisko" />
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
      avatar: "https://image.flaticon.com/icons/png/128/194/194923.png"
    };
  },
  computed: {
    canAdd() {
      return (
        this.first_name.trim().length >= 3 && this.last_name.trim().length >= 3
      );
    },
    ...mapGetters(["getnextId"])
  },
  methods: {
    ...mapActions(["adding"])
  },
  created() {
    this.id = this.getnextId;
  }
};
</script>

<style lang="scss">
$margin: 15px;
$margin-2: 66px;
$margin-3: 35px;
.edit-view {
  margin-left: 0px;
  margin-right: 0px;
  @media only screen and (max-width: 767.98px) {
    .left-side {
      order: 2;
    }
    .right-side {
      order: 1;
      margin-bottom: 30px;
    }
    .row {
      margin-left: 0;
      margin-right: 0;
    }
    h3 {
      text-align: center;
    }
  }
  .container-view {
    .col-content {
      &.col-content-data {
        padding-top: $margin-2;
      }
      box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
      border-color: rgba(223, 225, 229, 0);
      padding-top: $margin;
      background-color: white;
      margin-left: 0;
      margin-right: 0;
    }
  }

  .button-row {
    padding-top: $margin-2;
    padding-bottom: $margin;
    border-color: none;
    width: 100%;
    .btn-primary {
      width: 150px;
      @media only screen and (max-width: 767.98px) {
        width: 100%;
      }
    }
  }
  .avatar {
    padding-top: $margin-3;
    padding-bottom: $margin-3;
    width: 100%;
    .avatar-row {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 100px;
      margin-left: auto;
      margin-right: auto;
      .avatar-img {
        object-fit: cover;
        width: 100% !important;
        height: 100% !important;
        vertical-align: middle;
        justify-content: center;
        border-radius: 50px;
      }
    }
  }
  .avatar-inupt-row {
    padding-top: $margin;
    padding-bottom: $margin;
  }
}
</style>