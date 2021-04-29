import Vue from 'vue';
import Router from 'vue-router';
import login from './views/auth/login';
import dashboard from './views/pages/dashboard';
import ebooks from './views/pages/ebooks';
import transactions from './views/pages/transactions';
import videos from './views/pages/videos';
import users from './views/pages/userlist';
import messages from './views/pages/chats';
import profile from './views/pages/profile';
import robots from './views/pages/robots';
import viewResource from './components/views/viewResource';
import signals from './views/pages/signals'
import user from './components/views/viewUser'
import mobileResources from './views/pages/resources'
import viewTransaction from './components/views/viewTransactions'
// import page404 from './components/views/404'

Vue.use(Router);

// const newRouter = 

export default new Router ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      // {path: '/*',component: 404},
        {name: 'Login', path: '/', component: login,},
        {name: 'Dashboard', path: '/dashboard', component: dashboard,
        meta: {
            requiresAuth: true
          }},
        {name: 'PDFs', path: '/ebooks', component: ebooks,
         meta: {
        requiresAuth: true
      }},
        {name: 'Videos', path: '/videos', component: videos,
         meta: {
        requiresAuth: true
      }},
        {name: 'Users', path: '/users', component: users,
         meta: {
        requiresAuth: true
      }},
        {name: 'Transactions', path: '/transactions', component: transactions,
         meta: {
        requiresAuth: true
      }},
        {name: 'Messages', path: '/messages', component: messages,
         meta: {
        requiresAuth: true
      }},
        {name: 'Profile', path: '/profile', component: profile,
         meta: {
        requiresAuth: true
      }},
        {name: 'Robots', path: '/robots', component: robots,
         meta: {
        requiresAuth: true
      }},
      {name: 'Resources', path: '/resources', component: mobileResources,
         meta: {
        requiresAuth: true
      }},
      // {path: '/resource/:id', component: resource},
      {name: "viewResource", path: '/resource/:id', component: viewResource},
      {name: "viewUser", path: '/user/:id', component: user},
      {name: "viewTransactions", path: '/transactions/:id', component: viewTransaction},
      {name: 'Signals', path: '/signals', component: signals,
      meta: {
     requiresAuth: true
   }},
    ]
})

