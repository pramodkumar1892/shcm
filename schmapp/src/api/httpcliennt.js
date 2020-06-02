import axios from 'axios'

let axiosInstance = null
const configurationSetting = () => {
  axiosInstance = axios.create()
  axiosInstance.defaults.baseURL = 'http://shcm-project.xyz'
}

async function fetch(url, tokencConfig = {}) {
  const baseConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...tokencConfig,
  }
  const response = await axiosInstance.get(url, baseConfig)
  if (response.status >= 200 && response.status < 300) {
    return { data: response.data, status: response.status }
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

async function post(url, data, tokencConfig = {}) {
  const baseConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...tokencConfig,
  }
  const response = await axiosInstance.post(url, data, baseConfig)
  if (response.status >= 200 && response.status < 300) {
    return { data: response.data, status: response.status }
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

async function put(url, data, tokencConfig = {}) {
  const baseConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...tokencConfig,
  }
  const response = await axiosInstance.put(url, data, baseConfig)
  if (response.status >= 200 && response.status < 300) {
    return { data: response.data, status: response.status }
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

async function remove(url, tokencConfig = {}) {
  const baseConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...tokencConfig,
  }
  const response = await axiosInstance.delete(url, baseConfig)
  if (response.status >= 200 && response.status < 300) {
    return { status: response.status }
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

export { fetch, post, put, remove }

export default configurationSetting