import { API_URL } from '@/shared/config/constants'
import axios from 'axios'

const nami_api = axios.create({
  baseURL: `${API_URL}/api/v1`
})

export default nami_api
