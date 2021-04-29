import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/index'
import Login from '@/views/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      auth: true
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Layout',
    name: 'Layout',
    redirect: '/Layout/all-order',
    component: Layout,
    children: [
      {
        path: 'all-order',
        component: () => import('@/views/all-order'),
        meta: {
          name: '全部订单'
        }
      },
      {
        path: 'wait-order',
        component: () => import('@/views/wait-order'),
        meta: {
          name: '未入住订单'
        }
      },
      {
        path: 'in-order',
        component: () => import('@/views/in-order'),
        meta: {
          name: '已入住订单'
        }
      },
      {
        path: 'user-manage',
        component: () => import('@/views/user-manage'),
        meta: {
          name: '用户管理'
        }
      },
      {
        path: 'comment-manage',
        component: () => import('@/views/comment-manage'),
        meta: {
          name: '评论管理'
        }
      },
      {
        path: 'rooms-manage',
        component: () => import('@/views/rooms-manage'),
        meta: {
          name: '房间管理'
        }
      },
      {
        path: 'data-view',
        component: () => import('@/views/data-view'),
        meta: {
          name: '数据分析'
        }
      }
    ]
  }
]

const router = new VueRouter({
  base: '/Hotel_Admin/',  // 部署后访问的基础路径
  routes
})

router.beforeEach((to, from, next) => {
  const adminInfo = localStorage.getItem('adminInfo')
  if (to.meta.auth) {
    // 判断该页面是否有已记录用户信息
    if (adminInfo) {
      next({
        path: '/Layout'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
