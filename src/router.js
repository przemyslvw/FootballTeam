import Vue from 'vue'
import Router from 'vue-router'

import Users from './components/Users'
import EditUsers from './components/EditUser'
import AddUser from './components/AddUser'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: "/list",
        },
        {
            path: '/list',
            name: 'lista',
            component: Users,
        },
        {
            path: '/edit',
            name: 'edit',
            component: EditUsers,
        },
        {
            path: '/add',
            name: 'add',
            component: AddUser,
        },
    ]
})
