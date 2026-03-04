export type { Dept } from './types/dept.types'
export {
	useAddDeptMutation,
	useAllDeptQuery,
	useChangeDeptMutation
} from './api/deptApi.api'
export { setDept, clearDept } from './reducer/deptReducer'
export { default as deptReducer } from './reducer/deptReducer'
