'use client'

import { useChangeCertMutation } from '@/src/entities'
import { useChangeCertForm } from './useChangeCertForm'
import { ChangeCertFormValues } from '../types/changeCertFormValues.types'

export const useChangeCert = () => {
	const form = useChangeCertForm()

	const [changeCert, { isSuccess, isLoading }] = useChangeCertMutation()

	const handleChangeCertSubmit = (data: ChangeCertFormValues) => {
		console.log('Form data:', data)
		changeCert(data)
	}

	return {
		form,
		handleChangeCertSubmit,
		isSuccess,
		isLoading
	}
}
