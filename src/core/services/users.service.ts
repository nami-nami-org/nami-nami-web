import lex_api from './root.service'

async function getAllUsers() {
	try {
		const res = await lex_api.get('/admin/list-users')
		return res.data
	} catch (err: any) {
		const message = err.response?.data?.message || err.message || 'Error al obtener usuarios'
		throw new Error(message)
	}
}

interface NewUserPayload {
	name: string
	email: string
	password: string
	role?: string | null
	data?: string | null
}
async function createUser(payload: NewUserPayload) {
	try {
		const res = await lex_api.post('/admin/create-user', payload, {
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

interface UpdateUserPayload {
	id: string
	name: string
	role: string
	banned: boolean
	banReason: string
}
async function updateUser(payload: UpdateUserPayload) {
	try {
		const { id, ...data } = payload
		const payloadMapped = { userId: id, data }
		const res = await lex_api.post('/admin/update-user', payloadMapped, {
			headers: { 'Content-Type': 'application/json' }
		})
		return res.data
	} catch (err: any) {
		const message = err.response?.data?.message || err.message || 'Error al actualizar usuario'
		throw new Error(message)
	}
}

export const userService = {
	getAllUsers,
	createUser,
	updateUser
}
