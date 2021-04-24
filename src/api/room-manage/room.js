import { request } from '@/api/request'

// 获取所有房间信息
export function getRoom(page) {
  return request({
    url: '/api/room/getRoom',
    method: 'get',
    params: { page }
  })
}

export function addRoom(data) {
  return request({
    url: '/api/room/addRoom',
    method: 'put',
    data
  })
}

export function delRoom(data) {
  return request({
    url: '/api/room/delRoom',
    method: 'delete',
    data
  })
}