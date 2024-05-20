import { createRouter, createWebHistory } from 'vue-router';
import Ingredient from './components/Ingredient/Ingredient.vue';
import Recipe from './components/Recipe/Recipe.vue';

const routes = [
  { path: '/ingredient', component: Ingredient },
  { path: '/recipeManagement', component: Recipe },
  // Other routes if needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
