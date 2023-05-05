import AxiosInstances from '@serv/http/index'

// get test
export function getData() {
  return AxiosInstances({
    url: 'todos/1',
    method: 'get'
  })
}

// post test
export function postData(data) {
  return AxiosInstances({
    url: 'posts/',
    method: 'post',
    data
  })
}

// table test
export function getTableData() {
  return AxiosInstances({
    url: 'posts/1/comments',
    method: 'get'
  })
}
