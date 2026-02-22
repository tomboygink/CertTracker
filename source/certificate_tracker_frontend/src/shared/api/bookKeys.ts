export const bookKeys = {
	login: () => [{ type: 'login' }] as const,
	register: () => [{ type: 'register' }] as const,
	user: () => [{ type: 'user' }] as const,
	logout: () => [{ type: 'logout' }] as const,
	categoryCert: () => [{ type: 'categoryCert' }] as const,
	workPos: () => [{ type: 'workPos' }] as const,
	certificate: () => [{ type: 'certificate' }] as const
}
