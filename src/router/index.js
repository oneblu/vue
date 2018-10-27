import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home'
import error404 from '../views/404'
import login from '../views/account/login'
import register from '../views/account/register'
import roles from '../views/roles'
import maps from '../views/maps'
import tasks from '../views/kanban'
import { validateToken } from '../assets/auth'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: home, meta: {layout: 'private', title: 'Principal'} },
    { path: '/login', name: 'login', component: login, meta: {layout: 'public', title: 'Iniciar sesíon'} },
    { path: '/register', name: 'register', component: register, meta: {layout: 'public', title: 'Registrarse'} },
    { path: '/roles', name: 'roles', component: roles, meta: {layout: 'private', title: 'Roles'}, beforeEnter: validateToken },
    { path: '/tasks', name: 'tasks', component: tasks, meta: {layout: 'private', title: 'Tareas'} },
    { path: '/maps', name: 'maps', component: maps, meta: {layout: 'private', title: 'Mapas'}, beforeEnter: validateToken },
    { path: '*', name: '404', component: error404, meta: {layout: 'public', title: 'opps'} }
  ]
})
