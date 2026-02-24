export type { WorkPosition } from './types/workPosition.types'
export { default as workPositionReducer } from './reducer/workPositionReducer'
export { setWorkPos, clearWorkPos } from './reducer/workPositionReducer'
export {
	useAddWorkPositionMutation,
	useAllWorkPositionQuery,
	useChangeWorkPositionMutation
} from './api/workPositionApi.api'
