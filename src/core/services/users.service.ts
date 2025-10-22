/* eslint-disable @typescript-eslint/no-explicit-any */
import nami_api from './root.service'
import lex_api from './root.service'

interface NewUserPayload {
	email: string
	password: string
}

async function loginQuery(payload: NewUserPayload) {
	try {
		const res = await nami_api.post('/auth/login', payload, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
		return res.data
	} catch (err: any) {
		const message = err.response?.data?.message || err.message || 'Error al crear usuario'
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
	try{
		const res = await lex_api.post('/auth/register', payload, {
			headers: { 'Content-Type': 'application/json' }
		})
		return res.data
	} catch (err: any) {
		const message = err.response?.data?.message || err.message || 'Error al crear usuario'
		throw new Error(message)
	}
}



export const userService = {
	loginQuery,
	createUser,
	
}
