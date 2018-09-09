const routes = [
  {
    path: '/app',
    component: () => import('layouts/Home'),
    children: [
      {
        path: '/',
        component: () => import('pages/Home'),
        meta: {
          title: 'Home'
        }
      },
      {
        path: 'logs',
        component: () => import('pages/Logs'),
        meta: {
          title: 'Logs'
        }
      },
      {
        path: 'comodosAuth',
        component: () => import('pages/ComodosAuth'),
        meta: {
          title: 'Auth'
        }
      },
      {
        path: 'sensors',
        component: () => import('pages/Sensors'),
        meta: {
          title: 'Sensors'
        }
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404')
  })
}

export default routes
