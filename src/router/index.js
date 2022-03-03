import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Products from '@/views/Products.vue'
import Cart from '@/views/Cart.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Profile from '@/views/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Products',
    name: 'Products',
    component: Products
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/Login', '/Register', 'Home'];
//   const authrequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   if(to.path == '/Products' || to.path == '/Cart' && !loggedIn) next({name: 'Register'})
//   else next()
// });

export default router