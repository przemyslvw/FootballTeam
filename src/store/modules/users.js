import router from '../../router';

const state = {
    loading: true,
    nextid: 0,
    editUserdata: {
    },
    users: []
};

const getters = {
    geteditUserdata: state => state.editUserdata,
    allUsers: state => state.users,
    rows: state => state.users.length,
    loading: state => state.loading,
    getnextId: state => state.nextid
};
const actions = {
    async createdUsers({ commit }) {
        const response = await axios
            .get("/users", {
                params: {
                    per_page: 12
                }
            })
            .then(response => {
                console.log("Pobrane", response);
                commit('setUsers', response.data.data);
                commit('setLoader', false);
                commit('setnextid');
            })
            .catch(err => console.log("Error", err));
    },

    async remove({ commit }, id) {
        if (confirm(`Jesteś pewien?`)) {
            if (id != undefined) {

                const response = await axios
                    .delete(`/users/${id}`)
                    .then(response => {
                        console.log("Wykasowany", response);
                    })
                    .catch(err => console.log("Error", err));
                commit('deleteUser', id);
                commit('setnextid');
            }
        }
    },
    async adding({ commit }, userData) {
        const response = await axios
            .post("/users/", userData)
            .then(response => {
                console.log("Dodany", response);
            })
            .catch(err => console.log("Error", err));
        commit('addUser', userData);
        commit('setnextid');

    },
    async saveEdit({ commit }, editData) {
        const response = await axios
            .patch(`/users/${editData.id}`, editData)
            .then(response => {
                console.log("Edytowany", response);
            })
            .catch(err => console.log("Error", err));
        commit('editUser', editData);
    },
    async gotoedit({ commit }, data) {
        commit('seteditUser', data);
        router.push('/edit')
    }
};
const mutations = {
    seteditUser: (state, data) => (state.editUserdata = data),
    setUsers: (state, users) => (state.users = users),
    deleteUser: (state, id) => (state.users = state.users.filter(user => user.id !== id)),
    addUser: (state, userData) => (state.users.push(userData)),
    setLoader: (state, loading) => (state.loading = loading),
    setnextid: (state) => {
        // sprawdzenie najwyższego id i ustawienie nexxtid aby wykluczyc powielenie
        state.nextid = 0;
        for (var i = 0; i < state.users.length; i++) {
            if (state.users[i].id >= state.nextid) {
                state.nextid = state.users[i].id + 1;
            }
        }
    },
    editUser: (state, editData) => {
        //szuka elementu w state o danym id
        var item = state.users.find(item => item.id == editData.id);
        // podmienia wartości w state
        item.first_name = editData.first_name;
        item.last_name = editData.last_name;
        item.avatar = editData.avatar;
    },
};

export default {
    getters,
    state,
    actions,
    mutations
}