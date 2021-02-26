import Home from '../views/Home';
import About from '../views/About';
import Link from '../views/Link';
import Other from '../views/Other';

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '',
    component: Other,
    routes: [
      {
        path: '/about',
        component: About
      },
      {
        path: '/link',
        component: Link
      }
    ]
  }
];

export default routes;
