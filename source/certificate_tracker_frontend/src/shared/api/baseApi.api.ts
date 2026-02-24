import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../../../../config/config.json'

const tagTypes = [
	'login',
	'register',
	'user',
	'logout',
	'categoryCert',
	'workPos',
	'certificate'
] as const

export const baseApi = createApi({
	reducerPath: 'mainApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${config?.server_config.protocol}${config?.server_config.host}:${config?.server_config.port}`,
		credentials: 'include'
	}),
	endpoints: () => ({}),
	tagTypes
})
