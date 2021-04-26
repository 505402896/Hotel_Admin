import { request } from '@/api/request'

// 获取所有订单信息
export function getBook(page) {
  return request({
    url: '/api/book/getBook',
    method: 'get',
    params: { page }
  })
}

export function delBook(bid) {
  return request({
    url: `/api/book/delBook/${bid}`,
    method: 'delete'
  })
}

export function getBookById(bid) {
  return request({
    url: '/api/book/getBookById',
    method: 'get',
    params: { bid }
  })
}

export function getBookByRealName(realName) {
  return request({
    url: '/api/book/getBookByRealName',
    method: 'get',
    params: { realName }
  })
}