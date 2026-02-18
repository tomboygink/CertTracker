import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WorkPosition } from '../types/workPosition.types'

type WorkPositionState = {
	error: string | null
	workPosition: WorkPosition | null
	loading: boolean
}

const initialState: WorkPositionState = {
	error: null,
	workPosition: null,
	loading: false
}

export const workPositionSlice = createSlice({
	name: 'workPosition',
	initialState,
	reducers: {
		setWorkPos(state, action: PayloadAction<WorkPosition>) {
			state.error = null
			state.loading = false
			state.workPosition = action.payload
		},
		clearWorkPos(state) {
			state.workPosition = null
		}
	}
})

export const { setWorkPos, clearWorkPos } = workPositionSlice.actions
export default workPositionSlice.reducer
