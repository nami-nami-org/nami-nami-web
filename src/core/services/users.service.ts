import nami_api from './root.service'

interface NewUserPayload {
  email: string
  password: string
}

async function login(payload: NewUserPayload) {
  try {
    const res = await nami_api.post('/auth/login', payload, {
      headers: { 'Content-Type': 'application/json' }
    })

    const { token } = res.data

    if (typeof window !== 'undefined' && token) {
      document.cookie = `Nami_Auth_Session=${token}; path=/; max-age=${60 * 60 * 24}; samesite=lax; secure=${process.env.NODE_ENV === 'production'}`
    }

    return res.data
  } catch (err: any) {
    const message = err.response?.data?.message || err.message || 'Error al iniciar sesión'
    throw new Error(message)
  }
}
interface User {
  name: string
  email: string
  password: string
  phone: string
}

async function createUser(payload: User) {
  try {
    const res = await nami_api.post('/auth/register', payload, {
      headers: { 'Content-Type': 'application/json' }
    })
    return res.data
  } catch (err: any) {
    const message = err.response?.data?.message || err.message || 'Error al crear usuario'
    throw new Error(message)
  }
}

async function refreshToken() {
  try {
    const res = await nami_api.post('/auth/refresh')
    return res.data
  } catch (err: any) {
    console.log('err', err)
    const message = err.response?.data?.message || err.message || 'Error al refrescar token'
    throw new Error(message)
  }
}

async function me() {
  try {
    const res = await nami_api.get('/auth/me')
    return res.status === 200
  } catch (err: any) {
    console.log('err', err)
    const message = err.response?.data?.message || err.message || 'Error al validar el usuario'
    throw new Error(message)
  }
}

export async function meSessionToken(token: string) {
  try {
    const res = await nami_api.get('/auth/me', {
      method: 'GET',
      fetchOptions: { cache: 'no-store' },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    return res
  } catch (err: any) {
    if (err.response?.status !== 401) console.error('Error inesperado al validar la sesión:', err.message)
    return null
  }
}

export const userService = {
  login,
  createUser,
  refreshToken,
  me
}
