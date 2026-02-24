import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Status } from "../types/status.types"

export type StatusCertState = {
    loading: boolean,
    error: string | null,
    status: Status[] | null
}

const initialState: StatusCertState = {
    loading: false,
    error: null,
    status: null,
}

export const statusCertSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        setStatus(state, action: PayloadAction<Status[]>) {
            state.loading = false
            state.status = action.payload
        },
        clearStatus(state) {
            state.status = null
        }
    }
})

export const { setStatus, clearStatus } = statusCertSlice.actions
export default statusCertSlice.reducer