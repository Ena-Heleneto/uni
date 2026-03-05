import type { UnConfig, UnError, UnResponse } from '@uni-helper/uni-network'

export function useFetch() {
  function requestInterceptors(config: UnConfig) {
    return config
  }

  function requestErrorInterceptors(error: UnError) {
    return Promise.reject(error)
  }

  function responseInterceptors(response: UnResponse) {
    return response
  }

  function responseErrorInterceptors(error: UnError) {
    return Promise.reject(error)
  }

  const instance = un.create({
    baseUrl: 'http://185.106.176.15:3000',
    // baseUrl: 'http://172.21.155.113:3000',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
  })

  instance.interceptors.request.use(requestInterceptors, requestErrorInterceptors)
  instance.interceptors.response.use(responseInterceptors, responseErrorInterceptors)

  const get = (...args: Parameters<typeof instance.get>) =>
    instance.get(...args).then(response => response.data)
  const post = (...args: Parameters<typeof instance.post>) =>
    instance.post(...args).then(response => response.data)
  const put = (...args: Parameters<typeof instance.put>) =>
    instance.put(...args).then(response => response.data)
  const del = (...args: Parameters<typeof instance.delete>) =>
    instance.delete(...args).then(response => response.data)

  return { post, get, put, delete: del }
}
