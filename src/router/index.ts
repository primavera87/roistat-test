import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import EmployeesView from '@/views/employees/employeesView.vue'

import store from '@/store';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/employees',
    name: 'employees',
    component: EmployeesView,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
    store.dispatch('initDataEmployees');
});

export default router;
