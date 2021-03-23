import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard', affix: true }
    }]
  },
  {
    path: '/blog',
    component: Layout,
    redirect: '/blog/list',
    name: 'Blog',
    meta: { title: '博客管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'list',
        name: 'ListBlog',
        component: () => import('@/views/blog'),
        meta: { title: '文章列表', icon: 'table' }
      },
      {
        path: 'add',
        name: 'AddBlog',
        component: () => import('@/views/blog/add'),
        meta: { title: '新增文章', icon: 'tree' }
      }
    ]
  },
  {
    path: '/type',
    component: Layout,
    redirect: '/type/index',
    children: [
      {
        path: 'index',
        name: 'Type',
        component: () => import('@/views/type'),
        meta: { title: '类型管理', icon: 'el-icon-s-help' }
      }
    ]
  },
  {
    path: '/tag',
    component: Layout,
    redirect: '/tag/index',
    name: 'Tag',
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/tag/index'),
        meta: { title: '标签管理', icon: 'el-icon-s-help' }
      }
    ]
  },
  {
    path: '/log',
    component: Layout,
    redirect: '/log/loginLog',
    name: 'Log',
    meta: { title: '日志管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'loginLog',
        name: 'loginLog',
        component: () => import('@/views/log/loginLog'),
        meta: { title: '登录日志', icon: 'table' }
      },
      {
        path: 'operationLog',
        name: 'OperationLog',
        component: () => import('@/views/log/operationLog'),
        meta: { title: '操作日志', icon: 'tree' }
      }
    ]
  },
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/user',
    name: 'Permission',
    meta: { title: '权限管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/permission/user'),
        meta: { title: '用户管理', icon: 'table' }
      },
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/permission/role'),
        meta: { title: '角色管理', icon: 'tree' }
      },
      {
        path: 'menu',
        name: 'Menu',
        component: () => import('@/views/permission/menu'),
        meta: { title: '菜单管理', icon: 'tree' }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/onlineUser',
    name: 'System',
    meta: { title: '系统监控', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'onlineUser',
        name: 'OnlineUser',
        component: () => import('@/views/system/onlineUser'),
        meta: { title: '在线用户', icon: 'table' }
      },
      {
        path: 'service',
        name: 'Service',
        component: () => import('@/views/system/service'),
        meta: { title: '服务监控', icon: 'tree' }
      },
      {
        path: 'cache',
        name: 'Cache',
        component: () => import('@/views/system/cache'),
        meta: { title: '缓存监控', icon: 'tree' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
