import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../../../../config/config.json'

const tagTypes = ['login', 'register', 'users'] as const

export const baseApi = createApi({
	reducerPath: 'mainApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `http://${config?.server_config.host}:${config?.server_config.port}`,
		credentials: 'include'
	}),
	endpoints: () => ({}),
	tagTypes
})
