import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '@/views/AboutView.vue')
  },
  // User routes
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/users/Login")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/users/Register")
  },
  {
    path: "/account",
    name: "account",
    component: () => import('./views/users/Account.vue'),
    beforeEach: (to, from, next) => {
      if (store.state.loggedIn == false) {
        next('register');
      } else {
        next()
      }
    }
  },
  {
    path: "/account/edit",
    name: "editAccount",
    component: () => import("@/views/users/EditAccount.vue"),
    /* This checks if the user is logged in - 
    if they are not, it redirects them to the register page. */
    beforeEach: (to, from, next) => {
      if (store.state.loggedIn == false) {
        next('register');
      } else {
        next()
      }
    }
  },

  // Messages

  {
    path: "/user/messages",
    name: "messages",
    component: () => import('./views/messages/Messages.vue')
  },
  {
    path: "/user/messages/create",
    name: "createMessage",
    component: () => import('./views/messages/CreateMessage.vue')
  },

  // User Items

  {
    path: "/items/user/:id",
    name: "viewUserItems",
    component: () => import('./views/users/UserItems.vue')
  },
  {
    path: "/user/:id",
    name: "viewUser",
    component: () => import('./views/users/ViewUser.vue')
  },

  // Items

  {
    path: "/items",
    name: "viewItems",
    component: () => import('./views/items/ViewItems.vue')
  },
  {
    path: "/items/add",
    name: "addItem",
    component: () => import('./views/items/AddItem.vue'),
    beforeEach: (to, from, next) => {
      if (store.state.loggedIn == false) {
        next('register');
      } else {
        next()
      }
    }
  },
  {
    path: "/items/:id",
    name: "viewSingleItem",
    component: () => import('./views/items/ViewSingleItem.vue')
  },
  {
    path: "/items/edit/:id",
    name: "editItem",
    component: () => import('./views/items/EditItem.vue'),
    beforeEach: (to, from, next) => {
      if (store.state.loggedIn == false) {
        next('register');
      } else {
        next()
      }
    }
  },

  // Categories
  {
    path: "/items/category/all",
    name: "allCategories",
    component: () => import('./views/categories/AllCategories.vue')
  },
  {
    path: "/items/category/:id",
    name: "viewSingleCategory",
    component: () => import('./views/categories/ViewSingleCategory.vue')
  },

  // Qualities
  {
    path: "/items/quality/all",
    name: "allQualities",
    component: () => import('./views/qualities/AllQualities.vue')
  },
  {
    path: "/items/quality/:id",
    name: "viewSingleQuality",
    component: () => import('./views/qualities/ViewSingleQuality.vue')
  },

  /* Catch-all route -
     If the user tries to go to a route that doesn't exist, 
     it will redirect them to the 404 page. */
  {
    path: '*',
    beforeEnter: (to, from, next) => {
      next('/404')
    }
  }, {
    path: '/404',
    name: '404',
    component: () => import('./views/PageNotFound.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router