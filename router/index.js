// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../src/Layout.vue'
import Ingredient from '../src/components/Ingredient/Ingredient,vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', component: Ingredient } // Default route to Ingredient component
      // Add more routes as needed
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
