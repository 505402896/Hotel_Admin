import { request } from '@/api/request.js'

export function getComment(page) {
  return request({
    url: '/api/comment/getComment',
    method: 'get',
    params: { page }
  })
}

export function getCommented(page) {
  return request({
    url: '/api/comment/getCommented',
    method: 'get',
    params: { page }
  })
}

export function getUnComment(page) {
  return request({
    url: '/api/comment/getUnComment',
    method: 'get',
    params: { page }
  })
}

export function delComment(cid) {
  return request({
    url: `/api/comment/delComment/${cid}`,
    method: 'delete'
  })
}

export function editComment(data) {
  return request({
    url: '/api/comment/editComment',
    method: 'post',
    data
  })
}