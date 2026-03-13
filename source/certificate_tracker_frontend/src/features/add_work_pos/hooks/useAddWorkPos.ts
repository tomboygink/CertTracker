import { Dept, useAddWorkPositionMutation } from '@/src/entities'
import { useAddWorkPosForm } from './useAddWorkPosForm'
import { AddWorkPosFormValues } from '../types/addWorkPosFormValues.types'

export const useAddWorkPos = (allDept: Dept[]) => {
	const form = useAddWorkPosForm(allDept)

	const [mutate, result] = useAddWorkPositionMutation()

	const handleAddWorkPosSubmit = (data: AddWorkPosFormValues) => {
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
		handleAddWorkPosSubmit,
		isLoading: result.isLoading,
		isSuccess: result.isSuccess
	}
}
