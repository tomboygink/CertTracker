export const bookKeys = {
	login: () => [{ type: 'login' }] as const,
	register: () => [{ type: 'register' }] as const,
	user: () => [{ type: 'user' }] as const,
	logout: () => [{ type: 'logout' }] as const,
	categoryCert: () => [{ type: 'categoryCert' }] as const,
	workPos: () => [{ type: 'workPos' }] as const,
	certificate: () => [{ type: 'certificate' }] as const,
	status: () => [{ type: 'status' }] as const,
	docs: () => [{ type: 'docs' }] as const,
	notification: () => [{ type: 'notification' }] as const,
	events: () => [{ type: 'events' }] as const,
	dept: () => [{ type: 'dept' }] as const
}
