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
        path: 'about',
        name: 'About',
        component: () => import('pages/ConfigAbout'),
        meta: {
          showBack: true,
          showSearch: false,
          title: 'Sobre'
        }
      },
      {
        path: 'help',
        name: 'Help',
        component: () => import('pages/ConfigHelp'),
        meta: {
          showBack: true,
          showSearch: false,
          title: 'Ajuda'
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
