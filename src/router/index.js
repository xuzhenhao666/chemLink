import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ProductPage from '@/views/ProductPage.vue'
import ProductDetailPage from '@/views/ProductDetailPage.vue'
import NewsPage from '@/views/NewsPage.vue'
import NewsDetailPage from '@/views/NewsDetailPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage, // 2. 直接使用变量名，不要加 () => import(...)
    },
    {
      path: '/products',
      name: 'products',
      component: ProductPage, // 同上
    },
    {
      path: '/products/:id',
      name: 'product',
      component: ProductDetailPage, // 同上
    },
    {
      path: '/news',
      name: 'news',
      component: NewsPage, // 新闻页面路由
    },
    {
      path: '/news/:id',
      name: 'news-detail',
      component: NewsDetailPage, // 新闻详情页面路由
    },
  ],
  props: true // 将路由参数解耦为组件的 props
})

export default router
