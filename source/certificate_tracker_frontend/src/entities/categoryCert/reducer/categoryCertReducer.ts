import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CategoryCert } from '../types/categoryCert.types'

export type CategoryCertState = {
	loading: boolean
	error: string | null
	categoryCert: CategoryCert[] | null
}

const initialState: CategoryCertState = {
	loading: false,
	error: null,
	categoryCert: null
}

export const categoryCertSlice = createSlice({
	name: 'categoryCert',
	initialState,
	reducers: {
		selectCategoryCert(state, action: PayloadAction<CategoryCert[]>) {
			state.loading = false
			state.error = null
			state.categoryCert = action.payload
		},
		setLoadingCategoryCert(state) {
			state.loading = true
		},
		setErrorCategoryCert(state, action: PayloadAction<string>) {
			state.error = action.payload
		},
		clearCategoryCert(state) {
			state.categoryCert = null
		}
	}
})

export const {
	selectCategoryCert,
	setErrorCategoryCert,
	setLoadingCategoryCert,
	clearCategoryCert
} = categoryCertSlice.actions
export default categoryCertSlice.reducer
