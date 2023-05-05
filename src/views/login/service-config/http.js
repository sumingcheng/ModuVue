import AxiosInstances from '@serv/http/index'

export function getData() {
  return AxiosInstances({
    url: '/todos/1',
    method: 'get'
  })
}
