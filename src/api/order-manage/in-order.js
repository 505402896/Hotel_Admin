import { request } from '@/api/request'

export function getInBook(page) {
  return request({
    url: '/api/book/getInBook',
    method: 'get',
    params: { page }
  })
}