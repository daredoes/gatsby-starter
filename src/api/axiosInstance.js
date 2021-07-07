import axios from 'axios'
import get from 'lodash/get'

import { API_PATH } from 'api/config'

class AxiosInstance {
  constructor() {
    this.client = axios.create({
      baseURL: API_PATH,
    })

    this.setupInterceptors()
  }

  setupInterceptors = () => {
    this.client.interceptors.request.use(
      this.reqConfigHandler,
      this.reqErrorHandler
    )
    this.client.interceptors.response.use(
      this.resSuccessHandler,
      this.resErrorHandler
    )
  }

  updateJWT = (jwt) => {
    if (jwt) {
      this.client.defaults.headers['X-Fair-Authorization'] = jwt
    } else {
      delete this.client.defaults.headers['X-Fair-Authorization']
    }
    return jwt
  }

  reqConfigHandler = (config) => {
    return config
  }

  reqErrorHandler = (err) => {
    const response = get(err, 'response', {})
    // TODO :: link error msg to sentry
    return Promise.reject(response)
  }

  resSuccessHandler = (res) => {
    return res
  }

  resErrorHandler = (err) => {
    const response = get(err, 'response', {})
    // TODO :: link error msg to sentry
    return Promise.reject(response.data)
  }
}

export default new AxiosInstance()
