import { CategoryCert, useChangeCategoryCertMutation } from '@/src/entities'
import { useChangeCategoryCertForm } from './useChangeCategoryCertForm'
import { ChangeCategoryCertFormValues } from '../types/changeCategoryCertFormValues.types'

export const useChangeCategoryCert = (category: CategoryCert) => {
	const form = useChangeCategoryCertForm(category)
	const [mutate, result] = useChangeCategoryCertMutation()

	const handleChangeCategoryCertSubmit = (
		data: ChangeCategoryCertFormValues
	) => {
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
		handleChangeCategoryCertSubmit,
		isLoading: result.isLoading,
		isSuccess: result.isSuccess
	}
}
