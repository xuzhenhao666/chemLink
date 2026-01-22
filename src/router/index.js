import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ProductPage from '@/views/ProductPage.vue'
import ProductDetailPage from '@/views/ProductDetailPage.vue'
import NcaProductDetailPage from '@/views/NcaProductDetailPage.vue'
import Co2fitProductDetailPage from '@/views/Co2fitProductDetailPage.vue'
import NewsPage from '@/views/NewsPage.vue'
import NewsDetailPage from '@/views/NewsDetailPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import ContactPage from '@/views/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage, // 2. 直接使用变量名，不要加 () => import(...)
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage, // 关于我们页面路由
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
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage, // 联系我们页面路由
    },
    {
      path: '/nca-pc25',
      name: 'nca-pc25',
      component: NcaProductDetailPage, // 负碳醇 (NCA-PC25) 详情页面
    },
    {
      path: '/products/nca-pc25',
      redirect: '/nca-pc25', // 重定向到主要路由
    },
    {
      path: '/co2fit-258',
      name: 'co2fit-258',
      component: Co2fitProductDetailPage, // CO₂FIT 258 详情页面
    },
    {
      path: '/products/co2fit-258',
      redirect: '/co2fit-258', // 重定向到主要路由
    },
  ],
  props: true // 将路由参数解耦为组件的 props
})

export default router
