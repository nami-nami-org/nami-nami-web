import { API_URL } from '@/shared/config/constants'
import axios from 'axios'

const nami_api = axios.create({
  baseURL: `${API_URL}/api/v1`
})

// lex_api.interceptors.request.use(
// 	async (config) => {
// 		try {
// 			const { data, error } = await authClient.getSession()
// 			if (error) return config
// 			console.log('data prev', data)
// 			const token = String(data?.session?.token)
// 			console.log('plain-', token)
// 			console.log('encode', encodeURIComponent(token))
// 			const encodedToken = encodeURIComponent(token)

// 			if (token) {
// 				config.headers.Authorization = `Bearer ${encodedToken}`
// 			console.log('tiene token')
// 			}
// 		} catch (err) {
// 			console.error('Error en interceptor:', err)
// 		}
// 		return config
// 	},
// 	(error) => Promise.reject(error)
// )

export default nami_api
