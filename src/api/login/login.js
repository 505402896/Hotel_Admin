import { request } from '@/api/request.js'

export function login({ username, password }) {
  return request({
    url: '/api/common/login',
    method: 'get',
    params: { username, password }
  })
}