export const bookKeys = {
	login: () => [{ type: 'login' }] as const,
	register: () => [{ type: 'register' }] as const,
	user: () => [{ type: 'user' }] as const,
	logout: () => [{ type: 'logout' }] as const
}
