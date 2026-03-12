import { Dept, useChangeDeptMutation } from '@/src/entities'
import { useChangeDeptForm } from './useChangeDeptForm'
import { ChangeDeptFormValues } from '../types/changeDeptFormValues.types'

export const useChangeDept = (dept: Dept) => {
	const form = useChangeDeptForm(dept)

	const [mutate, result] = useChangeDeptMutation()

	const handleChangeDeptSubmit = (data: ChangeDeptFormValues) => {
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
		handleChangeDeptSubmit,
		isLoading: result.isLoading,
		isSuccess: result.isSuccess
	}
}
