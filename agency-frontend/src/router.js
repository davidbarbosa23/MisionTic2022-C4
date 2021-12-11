import { createRouter, createWebHistory } from 'vue-router';

import TokenService from './services/token.service';

import Home from './views/Home.vue';
import PackList from './views/PackList.vue';
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import Contact from './views/Contact.vue';
// lazy-loaded
const PackPurchase = () => import('./views/PackPurchase.vue');
const Profile = () => import('./views/Profile.vue');
const AdminPackList = () => import('./views/Admin/PackList.vue');
const AdminPackForm = () => import('./views/Admin/PackForm.vue');
const AdminUserList = () => import('./views/Admin/UserList.vue');
const AdminPurchaseList = () => import('./views/Admin/PurchaseList.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: Contact,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/paquetes',
    name: 'PackList',
    component: PackList,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/paquete/:id',
    name: 'Pack',
    component: PackPurchase,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/registro',
    name: 'Register',
    component: Register,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/ingreso',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/perfil',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/paquetes',
    name: 'AdminPackList',
    component: AdminPackList,
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    path: '/admin/paquete/crear',
    name: 'AdminPackFormCreate',
    component: AdminPackForm,
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    path: '/admin/paquete/:id',
    name: 'AdminPackFormEdit',
    component: AdminPackForm,
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    path: '/admin/usuarios',
    name: 'AdminUserList',
    component: AdminUserList,
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    path: '/admin/compras',
    name: 'AdminPurchaseList',
    component: AdminPurchaseList,
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(({ meta }) => meta.requiresAuth);
  const token = TokenService.getLocalAccessToken();

  if (requiresAuth && !token) {
    next('/ingreso');
  } else {
    next();
  }
});

export default router;
