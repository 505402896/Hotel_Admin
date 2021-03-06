import { request } from '@/api/request'

// 获取所有客房信息
export function getHotel(page) {
  return request({
    url: '/api/hotel/getHotel',
    method: 'get',
    params: { page }
  })
}

export function addRoomType(data) {
  return request({
    url: '/api/hotel/addRoomType',
    method: 'post',
    data
  })
}

export function editRoomType(data) {
  return request({
    url: '/api/hotel/editRoomType',
    method: 'post',
    data
  })
}

export function delRoomType(hid) {
  return request({
    url: `/api/hotel/delRoomType/${hid}`,
    method: 'delete'
  })
}

export function getAllRoomType() {
  return request({
    url: '/api/common/getAllRoomType',
    method: 'get'
  })
}