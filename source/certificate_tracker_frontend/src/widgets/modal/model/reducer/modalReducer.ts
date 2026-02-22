import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Modal, ModalType } from '../types/modal.types'

const initialState: Modal = {
	payload: undefined,
	type: null
}

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openModal(state, action: PayloadAction<{ type: ModalType; payload: any }>) {
			state.payload = action.payload.payload
			state.type = action.payload.type
		},
		closeModal(state) {
			state.payload = undefined
			state.type = null
		}
	}
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
