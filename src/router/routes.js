const routes = [
  {
    path: '/',
    component: () => import('layouts/Login.vue')
  },
  {
    path: '/Registro',
    component: () => import('layouts/Register.vue'),
    children: [
      { path: 'Email', component: () => import('pages/Email.vue') },
      { path: 'Telefono', component: () => import('pages/Telefono.vue') }
    ]
  },
  {
    path: '/Dashboard',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'Cursos', component: () => import('pages/Cursos.vue') },
      { path: 'Sesiones', component: () => import('pages/Sesiones.vue') },
      { path: 'Opciones', component: () => import('pages/Opciones.vue') },
      { path: 'Mascursos', component: () => import('pages/Mascursos.vue') }
    ]
  },
  {
    path: '/Confirm',
    component: () => import('layouts/Confirm.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
