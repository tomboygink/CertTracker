import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Access } from '../types/access.types'

type AccessState = {
	loading: boolean
	error: string | null
	access: Access[] | null
}

const initialState: AccessState = {
	loading: false,
	error: null,
	access: null
}

export const accessSlice = createSlice({
	name: 'access',
	initialState,
	reducers: {
		setAccess(state, action: PayloadAction<Access[]>) {
			state.loading = false
			state.error = null
			state.access = action.payload
		},
		clearAccess(state) {
			state.access = null
		}
	}
})

export const { setAccess, clearAccess } = accessSlice.actions
export default accessSlice.reducer
