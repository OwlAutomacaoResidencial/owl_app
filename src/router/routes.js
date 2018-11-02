const routes = [
  {
    path: '/',
    name: 'SplashLayout',
    component: () => import('layouts/Splash')
  },
  {
    path: '/app',
    component: () => import('layouts/App'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('pages/Home')
      },
      {
        path: 'logs',
        name: 'Logs',
        component: () => import('pages/Logs')
      },
      {
        path: 'comodosAuth',
        name: 'ComodosAuth',
        component: () => import('pages/ComodosAuth')
      },
      {
        path: 'sensors',
        name: 'Sensors',
        component: () => import('pages/Sensors')
      },
      {
        path: '*',
        name: '404',
        component: () => import('pages/404')
      }
    ]
  }
]
export default routes
