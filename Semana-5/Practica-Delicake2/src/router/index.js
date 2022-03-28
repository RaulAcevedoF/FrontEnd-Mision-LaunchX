import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views/index.vue'
import menu from '../views/menuView.vue'
import pedido from '../views/pedidoView.vue'
import nosotros from '../views/nosotrosView.vue'
import pastelero from '../views/pasteleroView.vue'


const routes = [

  {
    path: '/',
    name: 'index',
    component: index
  },

  {
    path: '/menu',
    name: 'menu',
    component: menu
  },

  {
    path: '/pedido',
    name: 'pedido',
    component: pedido
  },

  {
    path: '/nosotros',
    name: 'nosotros',
    component: nosotros
  },

  {
    path: '/pastelero',
    name: 'pastelero',
    component: pastelero
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
