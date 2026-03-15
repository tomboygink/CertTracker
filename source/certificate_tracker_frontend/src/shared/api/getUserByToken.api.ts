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
			credentials:"include",
			body: JSON.stringify({
				cmd: 'GetUser',
				args: {}
			}),
			cache: 'no-store'
		}
	)

	const data = await response.json()
	console.log("this",data)
	if (data?.err) return data?.err;

	return data?.data?.[0] 
}
