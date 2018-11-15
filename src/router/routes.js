const routes = [
  {
    path: '/',
    component: () => import('layouts/Splash')
  },
  {
    path: '/login',
    component: () => import('layouts/Login')
  },
  {
    path: '/forgot',
    component: () => import('layouts/ForgotPassword')
  },
  {
    path: '/app',
    component: () => import('layouts/App'),
    children: [
      {
        path: '/',
        component: () => import('pages/Home'),
        meta: {
          showBack: false,
          title: 'Início'
        }
      },
      {
        path: 'config',
        component: () => import('pages/Config'),
        meta: {
          showBack: false,
          title: 'Configurações'
        }
      },
      {
        path: 'about',
        component: () => import('pages/ConfigAbout'),
        meta: {
          showBack: true,
          title: 'Sobre'
        }
      },
      {
        path: 'help',
        component: () => import('pages/ConfigHelp'),
        meta: {
          showBack: true,
          title: 'Ajuda'
        }
      },
      {
        path: 'profile',
        component: () => import('pages/Profile'),
        meta: {
          showBack: true,
          title: 'Perfil'
        }
      },
      {
        path: 'logs',
        component: () => import('pages/Logs'),
        meta: {
          showBack: false,
          title: 'Ocorrências'
        }
      },
      {
        path: 'comodosAuth',
        component: () => import('pages/ComodosAuth'),
        meta: {
          showBack: false,
          title: 'Permissões'
        }
      },
      {
        path: 'authComodo/:id',
        component: () => import('pages/AuthComodo'),
        meta: {
          showBack: true,
          title: 'Usuários'
        }
      },
      {
        path: 'authUser/:id',
        component: () => import('pages/AuthUser'),
        meta: {
          showBack: true,
          title: 'Usuário'
        }
      },
      {
        path: 'sensors',
        component: () => import('pages/Sensors'),
        meta: {
          showBack: false,
          title: 'Sensores'
        }
      },
      {
        path: 'sensor/:id',
        component: () => import('pages/SensorView'),
        meta: {
          showBack: true,
          title: 'Sensores'
        }
      }
    ]
  },
  {
    path: '*',
    component: () => import('layouts/404')
  }
]
export default routes
