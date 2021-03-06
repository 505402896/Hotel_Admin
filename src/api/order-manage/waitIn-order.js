import { request } from '@/api/request'

export function getWaitInBook(page) {
  return request({
    url: '/api/book/getWaitInBook',
    method: 'get',
    params: { page }
  })
}

export function checkIn(data) {
  return request({
    url: '/api/book/checkIn',
    method: 'post',
    data
  })
}