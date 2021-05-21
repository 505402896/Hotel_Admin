import { request } from '@/api/request'

export function getInBook(page) {
  return request({
    url: '/api/book/getInBook',
    method: 'get',
    params: { page }
  })
}

export function editBook(data) {
  return request({
    url: '/api/book/editBook',
    method: 'post',
    data
  })
}

export function checkOut(data) {
  return request({
    url: '/api/book/checkOut',
    method: 'post',
    data
  })
}
