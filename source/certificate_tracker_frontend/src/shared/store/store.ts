import { configureStore } from '@reduxjs/toolkit'

import { baseApi } from '../api'
import {
	accessReducer,
	categoryCertReducer,
	deptReducer,
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
		access: accessReducer,
		dept: deptReducer,
		[baseApi.reducerPath]: baseApi.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(baseApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
