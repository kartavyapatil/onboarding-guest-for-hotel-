import { Router } from 'express';
import authRoutes from './authRoutes.js';
import guestRoutes from './guestRoutes.js';
import hotelRoutes from './hotel.Routes.js';
import guestformdetailsRoutes from './guestformdetails.routes.js';
const router = Router();

const routes = [
  {
    path: '/auth',
    route: authRoutes,
  },{
    path: '/guest',
    route: guestRoutes,
  },{
    path: '/hotel',
    route: hotelRoutes,
  },{
    path: '/guestformdetails',
    route: guestformdetailsRoutes,
  }
];

routes.forEach((cur) => {
  router.use(cur.path, cur.route);
});

export default router;
