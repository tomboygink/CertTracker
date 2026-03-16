import { RootState } from '../store'

export const selectRoles = (
	state: RootState
): {
	isAdmin: boolean
	isManager: boolean
	isUser: boolean
} => {
	const roleId = state.user.user?.access_id

	return {
		isAdmin: roleId === '1',
		isManager: roleId === '2',
		isUser: roleId === '3'
	}
}
