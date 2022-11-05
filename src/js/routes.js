
import WordCatalog from '../pages/WordCatalogPage.vue'
import SystemRules from '../pages/SystemRulesPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

const routes = [
  {
    path: '/',
    component: WordCatalog
  },
  {
    path: '/rules/',
    component: SystemRules
  },
  {
    path: '(.*)',
    component: NotFoundPage
  }
]

export default routes
