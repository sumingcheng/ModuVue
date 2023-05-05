import AxiosInstances from '@serv/http/index'

// base
export function getData() {
  return AxiosInstances({
    url: 'todos/1',
    method: 'get'
  })
}

