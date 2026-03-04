import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dept } from '../types/dept.types'

type DeptState = {
	loading: boolean
	error: string | null
	dept: Dept[] | null
}

const initialState: DeptState = {
	loading: false,
	error: null,
	dept: null
}

export const deptSlice = createSlice({
	name: 'dept',
	initialState,
	reducers: {
		setDept(state, action: PayloadAction<Dept[]>) {
			state.error = null
			state.loading = false
			state.dept = action.payload
		},
		clearDept(state) {
			state.dept = null
		}
	}
})

export const { setDept, clearDept } = deptSlice.actions
export default deptSlice.reducer
