import { request } from '@/api/request.js'

export function getDataView() {
  return request({
    url: '/api/common/getDataView',
    method: 'get'
  })
}