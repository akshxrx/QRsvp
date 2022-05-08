import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/signup', component: () => import('pages/SignupPage.vue') },
    ],
  },
  {
    path: '/portal',
    component: () => import('layouts/PortalLayout.vue'),
    children: [
      {
        path: 'event/:eventId',
        component: () => import('pages/EventPage.vue'),
      },
      {
        path: 'dashboard',
        component: () => import('pages/portal/DashboardPage.vue'),
      },
      {
        path: 'events',
        component: () => import('pages/portal/EventsPage.vue'),
      },
      {
        path: 'settings',
        component: () => import('pages/portal/SettingsPage.vue'),
      },
      { path: 'wifi', component: () => import('pages/portal/WifiPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
