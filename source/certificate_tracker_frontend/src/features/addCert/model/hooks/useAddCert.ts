import { useAddCertMutation, useAllCategoryCertQuery } from '@/src/entities'
import { useAddCertForm } from './useAddCertForm'
import { AddCertFormValues } from '../types/addCertFormValues.types'

export const useAddCert = () => {
	const form = useAddCertForm()
	const { data: categoryCert, isLoading } = useAllCategoryCertQuery(
		{},
		{
			refetchOnMountOrArgChange: true,
			refetchOnReconnect: true
		}
	)
	const [addCert, result] = useAddCertMutation()

	const handleSubmitAddCert = (data: AddCertFormValues) => {
		addCert(data)
	}

	return {
		form,
		isLoadingCategoryCert: isLoading,
		isLoadingAddCert: result.isLoading,
		isSuccessAddCertMutation: result.isSuccess,
		handleSubmitAddCert,
		categoryCert
	}
}
