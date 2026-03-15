import { useAddCategoryCertMutation } from '@/src/entities'
import { useAddCategoryCertForm } from './useAddCategoryCertForm'
import { AddCategoryCertFormValues } from '../types/addCategoryCertFormValues.types'

export const useAddCategoryCert = () => {
	const form = useAddCategoryCertForm()

	const [mutate, result] = useAddCategoryCertMutation()

	const handleAddCategoryCertSubmit = (data: AddCategoryCertFormValues) => {
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
		handleAddCategoryCertSubmit,
		isLoading: result.isLoading,
		isSuccess: result.isSuccess
	}
}
