import config from '../../../../config/config.json'

export const getUserByToken = async (token: string) => {
	const response = await fetch(
		`${config.server_config.protocol}${config.server_config.host}:${config.server_config.port}/api`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Cookie: `access_token=${token}`
			},
			body: JSON.stringify({
				cmd: 'GetUser',
				args: {}
			}),
			cache: 'no-store'
		}
	)

	const data = await response.json()

	if (data.err) return null

	return data.data[0]
}
