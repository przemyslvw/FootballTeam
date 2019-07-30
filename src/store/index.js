import Vuex from 'vuex';
import Vue from 'vue';
import users from './modules/users';
import 'es6-promise/auto';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        users
    }
});
