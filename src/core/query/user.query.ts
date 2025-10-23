import { useMutation, useQueryClient } from '@tanstack/react-query'

import { userService } from '../services/users.service'

const loginUser = () => {
  return useMutation({
    mutationFn: userService.login
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

export const useUsersQuery = {
  loginUser,
  createUser
}
