import { useChangeWorkPositionMutation, WorkPosition } from '@/src/entities'
import { useChangeWorkPosForm } from './useChangeWorkPosForm'
import { ChangeWorkPosFormValues } from '../types/changeWorkPosFormValues.types'

export const useChangeWorkPos = (workPos: WorkPosition) => {
	const form = useChangeWorkPosForm(workPos)

	const [mutate, result] = useChangeWorkPositionMutation()

	const handleChangeWorkPosSubmit = (data: ChangeWorkPosFormValues) => {
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
		handleChangeWorkPosSubmit,
		isLoading: result.isLoading,
		isSuccess: result.isSuccess
	}
}
