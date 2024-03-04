import NProgress from 'nprogress';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

import 'nprogress/nprogress.css';
NProgress.configure({ showSpinner: false });

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, pos) {
    return pos || { x: 0, y: 0 };
  }
});

router.beforeEach(async (to, _, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
