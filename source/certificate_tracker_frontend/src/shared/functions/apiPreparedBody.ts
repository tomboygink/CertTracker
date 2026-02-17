import { TArgs } from '../types'

export const apiPreparedBody = (cmd: string, args: TArgs | TArgs[]) => {
	return {
		url: '/api',
		method: 'POST',
		body: {
			cmd: cmd,
			args
		}
	}
}
