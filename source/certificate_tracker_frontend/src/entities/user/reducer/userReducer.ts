import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../types/user.types'

type UserState = {
	user: User | null
	loading: boolean
	error: null | string
}

const initialState: UserState = {
	user: null,
	loading: false,
	error: null
}

export const userReducer = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<User>) {
			state.user = action.payload
			state.loading = false
		},
		clearUser(state) {
			state.user = null
		},
		partiallyUpdateUser(state, action: PayloadAction<Partial<User>>) {
			if (!state.user) {
				return
			}

			state.user = { ...state.user, ...action.payload }
		}
	}
})

export const { setUser, clearUser, partiallyUpdateUser } = userReducer.actions
export default userReducer.reducer
