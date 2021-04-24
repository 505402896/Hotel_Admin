import { request } from '@/api/request'

// 获取所有订单信息
export function getUser(page) {
  return request({
    url: '/api/user/get',
    method: 'get',
    params: { page }
  })
}