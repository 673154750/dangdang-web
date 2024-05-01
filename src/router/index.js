import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home.vue'
import Category from '@/components/category/category.vue'
import Buy from '@/components/buy/buy.vue'
import Cart from '@/components/cart/cart.vue'
import Mine from '@/components/mine/mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'Mime',
      component: Mine
    }
  ]
})
