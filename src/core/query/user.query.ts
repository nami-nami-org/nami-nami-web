import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { userService } from '../services/users.service'

const getAllUsers = () => {
	return useQuery({
		queryKey: ['get-all-users'],
		queryFn: userService.getAllUsers,
		staleTime: 1000 * 60 * 5,
		// Refetch al volver
		refetchOnMount: 'always',
		refetchOnWindowFocus: false
	})
}

const createUser = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: userService.createUser,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get-all-users'], refetchType: 'active' })
		}
	})
}

const updateUser = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: userService.updateUser,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get-all-users'], refetchType: 'active' })
		}
	})
}

export const useUsersQuery = {
	getAllUsers,
	createUser,
	updateUser
}
