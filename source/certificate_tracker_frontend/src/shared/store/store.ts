import { configureStore } from '@reduxjs/toolkit'

import { baseApi } from '../api'
import {
	categoryCertReducer,
	selectCertReducer,
	statusCertReducer,
	userReducer
} from '@/src/entities'
import { modalReducer } from '@/src/widgets'

export const store = configureStore({
	reducer: {
		user: userReducer,
		modal: modalReducer,
		categoryCert: categoryCertReducer,
		statusCert: statusCertReducer,
		selectCert: selectCertReducer,
		[baseApi.reducerPath]: baseApi.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(baseApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
