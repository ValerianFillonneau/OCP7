import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import profilForm from '../views/profil.vue'
import Login from '../views/login.vue'
import detailPost from '../views/detailPost.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profil',
    name: 'Profil',
    component: profilForm
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/detail',
    name: 'detail',
    component: detailPost
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
