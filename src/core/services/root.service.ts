import { API_URL } from '@/shared/config/constants'
import axios from 'axios'

const nami_api = axios.create({
  baseURL: `${API_URL}/api/v1`,
  withCredentials: true
})

nami_api.interceptors.request.use(config => {
  if (typeof document !== 'undefined') {
    const match = document.cookie.match(/Nami_Auth_Session=([^;]+)/)
    const token = match ? match[1] : null

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }

  return config
})

export default nami_api
