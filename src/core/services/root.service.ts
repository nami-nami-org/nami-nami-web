import { API_URL } from '@/shared/config/constants'
import axios from 'axios'

console.log('API_URLAPI_URLAPI_URLAPI_URLAPI_URLAPI_URLAPI_URLAPI_URLAPI_URLAPI_URL', API_URL)
const nami_api = axios.create({
  baseURL: `${API_URL}/api/v1`,
  withCredentials: true
})

export default nami_api
