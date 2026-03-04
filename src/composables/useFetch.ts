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
    baseUrl: 'https://185.106.176.15:3000',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
  })

  instance.interceptors.request.use(requestInterceptors, requestErrorInterceptors)

  instance.interceptors.response.use(responseInterceptors, responseErrorInterceptors)

  return { post: instance.post, get: instance.get, put: instance.put, delete: instance.delete }
}
