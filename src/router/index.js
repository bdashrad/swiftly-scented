import { createRouter, createWebHistory } from 'vue-router'
import TheWelcome from '../components/TheWelcome.vue'
import Game from '../components/Game.vue'
const routes = [
  {
    path: '/',
    name: 'welcome',
    component: TheWelcome,
  },
  {
    path: '/game',
    name: 'game',
    component: Game,
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
export default router
//# sourceMappingURL=index.js.map
