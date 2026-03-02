import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cert } from '../types/cert.types'

type SelectCertState = {
	loading: boolean
	error: string | null
	selectCert: Cert | null
}

const initialState: SelectCertState = {
	loading: false,
	error: null,
	selectCert: null
}

export const selectCertSlice = createSlice({
	name: 'selectCert',
	initialState,
	reducers: {
		setSelectCert(state, action: PayloadAction<Cert>) {
			state.loading = false
			state.error = null
			state.selectCert = action.payload
		},
		clearSelectCert(state) {
			state.selectCert = null
		}
	}
})

export const { setSelectCert, clearSelectCert } = selectCertSlice.actions
export default selectCertSlice.reducer
