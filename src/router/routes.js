const routes = [
  {
    path: '/',
    name: 'SplashLayout',
    component: () => import('layouts/Splash')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('layouts/Login')
  },
  {
    path: '/forgot',
    name: 'ForgotPassword',
    component: () => import('layouts/ForgotPassword')
  },
  {
    path: '/app',
    component: () => import('layouts/App'),
    children: [
      {
        path: '/',
        name: 'Home',
        // component: () => import('pages/Home'),
        meta: {
          showSearch: true,
          showBack: false,
          title: 'Início'
        }
      },
      {
        path: 'config',
        name: 'Configurations',
        component: () => import('pages/Config'),
        meta: {
          showBack: false,
          showSearch: false,
          title: 'Configurações'
        }
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
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: () => import('layouts/404')
  }
]
export default routes
