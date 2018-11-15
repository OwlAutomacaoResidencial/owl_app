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
        component: () => import('pages/Home'),
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
        path: 'profile',
        name: 'Profile',
        component: () => import('pages/Profile'),
        meta: {
          showBack: true,
          showSearch: false,
          title: 'Perfil'
        }
      },
      {
        path: 'logs',
        name: 'Logs',
        component: () => import('pages/Logs'),
        meta: {
          showBack: false,
          showSearch: true,
          title: 'Ocorrências'
        }
      },
      {
        path: 'comodosAuth',
        name: 'ComodosAuth',
        component: () => import('pages/ComodosAuth')
      },
      {
        path: 'sensors',
        name: 'Sensors',
        component: () => import('pages/Sensors'),
        meta: {
          showBack: false,
          showSearch: true,
          title: 'Sensores'
        }
      },
      {
        path: 'sensor/:id',
        name: 'Sensor Id',
        component: () => import('pages/SensorView'),
        meta: {
          showBack: true,
          showSearch: true,
          title: 'Sensores'
        }
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
