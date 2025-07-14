import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter); // This is required in Vue 2


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue'),
  },
  {
    path: '/signup',
    name: 'SignUp',// check if it has to be: RegistrationPage
    component: () => import('../views/RegistrationPage.vue'),
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',// check if it has to be: RegistrationPage
    component: () => import('../views/EmailForgotPass.vue'),
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',// check if it has to be: RegistrationPage
    component: () => import('../views/ResetPassword.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
