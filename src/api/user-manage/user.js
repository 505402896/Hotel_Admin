import { request } from '@/api/request'

// 获取所有用户信息
export function getUser(page) {
  return request({
    url: '/api/user/getUser',
    method: 'get',
    params: { page }
  })
}

export function getUserByName(realName) {
  return request({
    url: '/api/user/getUserByName',
    method: 'get',
    params: { realName }
  })
}
