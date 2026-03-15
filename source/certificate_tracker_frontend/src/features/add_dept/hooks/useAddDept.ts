import { useAddDeptMutation } from '@/src/entities'
import { useAddDeptForm } from './useAddDeptForm'
import { AddDeptFormValues } from '../types/addDeptFormValues.types'

export const useAddDept = () => {
	const form = useAddDeptForm()

	const [mutate, result] = useAddDeptMutation()

	const handleAddDeptSubmit = (data: AddDeptFormValues) => {
		mutate(data)
			.unwrap()
			.then(response => {
				if (response.err) {
					throw new Error(response.err)
				}
			})
			.catch(error => {
				throw new Error(error)
			})
	}

	return {
		form,
		handleAddDeptSubmit,
		isLoading: result.isLoading,
		isSuccess: result.isSuccess
	}
}
