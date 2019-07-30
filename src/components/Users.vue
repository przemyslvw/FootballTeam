<template>
  <div class="list-view">
    <b-row class="container-views">
      <b-col md="12" class>
        <h3>User List</h3>
      </b-col>
    </b-row>
    <b-row class="container-view-list">
      <b-col md="12" class>
        <div class="list">
          <div key="1" v-if="loading" class="d-flex justify-content-center my-5">
            <b-spinner variant="primary" />
          </div>
          <b-row key="2" v-else>
            <b-container class="list-box">
              <b-row class="search-row">
                <b-col xs="4">
                  <b-form-group label class="mb-0">
                    <b-input-group>
                      <b-form-input v-model="filter" placeholder="Search for users..."></b-form-input>
                      <b-input-group-append>
                        <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                      </b-input-group-append>
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col xs="2">
                  <b-button class="addbutton" variant="primary" :to="`/add`">
                    <i class="material-icons">add</i>
                    <p>Add user</p>
                  </b-button>
                </b-col>
              </b-row>
              <b-table
                id="users-table"
                :fields="fields"
                :items="allUsers"
                :per-page="perPage"
                :current-page="currentPage"
                small
                :filter="filter"
                @filtered="onFiltered"
              >
                <template content-class="mt-3" slot="avatar" slot-scope="data">
                  <img class="avatar" v-bind:src="data.value" alt />
                </template>
                <template slot="fullname" slot-scope="data">{{ data.value }}</template>

                <template slot="id" slot-scope="data">
                  <b-button @click="gotoedit(data.item)" class="material-icons">edit</b-button>
                  <i @click="remove(data.value)" class="material-icons">delete</i>
                </template>
              </b-table>
              <b-pagination
                v-model="currentPage"
                :total-rows="totalRows"
                :per-page="perPage"
                aria-controls="my-table"
              ></b-pagination>
            </b-container>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
 
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      names: "",
      isEditing: false,
      perPage: 8,
      totalRows: 12,
      currentPage: 1,
      filter: null,
      fields: [
        { key: "avatar", label: "" },
        {
          key: "full_name",
          label: "Full Name",
          formatter: (value, key, item) => {
            return `${item.first_name}  ${item.last_name}`;
          }
        },
        { key: "id", label: "Actions" }
      ]
    };
  },
  name: "UserList",
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    ...mapActions(["createdUsers"]),
    ...mapActions(["remove"]),
    ...mapActions(["gotoedit"])
  },
  computed: {
    ...mapGetters(["allUsers"]),
    ...mapGetters(["rows"]),
    ...mapGetters(["loading"])
  }
};
</script>


<style lang="scss">
.search-row {
  padding: 25px 0;
}
#users-table {
  line-height: 50px;

  tbody {
    tr:nth-child(odd) {
      background: rgba(0, 0, 0, 0.03);
    }

    td[aria-colindex="1"] {
      width: 100px;
    }
    td[aria-colindex="3"] {
      width: 100px;
    }
  }
  .avatar {
    width: 50px;
    border-radius: 50px;
  }

  .material-icons:focus {
    -webkit-box-shadow: unset !important;
    box-shadow: unset !important;
  }
  .material-icons {
    background-color: unset !important;
    border-color: unset !important;
    vertical-align: unset !important;
    border: unset !important;
    padding: unset !important;
    line-height: 50px !important;
    cursor: pointer;
    color: grey;
    margin-right: 5px;
  }
}

.list-box {
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  border-color: rgba(223, 225, 229, 0);
  background-color: white;
}
.container-view-list {
  margin-left: 0px !important;
  margin-right: 0px !important;
}

.addbutton {
  display: flex !important;
  float: right;
  border-radius: 20px !important;
  p {
    margin: 0px;
  }
}
</style>