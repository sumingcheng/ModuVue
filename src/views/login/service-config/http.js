import http from '@serv/http/index'

export function getData() {
  return http({
    url: '/todos/1',
    method: 'get'
  })
}
