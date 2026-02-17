import { useRouter } from 'next/navigation'
import { useLoginForm } from './useLoginForm'
import { useLoginUserMutation } from '@/src/entities'
import { LoginFormValues } from '../types/loginFormValues.types'
import { useState } from 'react'

export const useControlAllLoginForm = () => {
	const router = useRouter()
	const form = useLoginForm()
	const [loginUserMutation, result] = useLoginUserMutation()
	const [loginErrorMessage, setLoginErrorMessage] = useState('')

	const handleLoginUserSubmit = (data: LoginFormValues) => {
		loginUserMutation(data).then(res => {
			if (res.data.err) {
				setLoginErrorMessage(res.data.err)
				return
			}
			if (res.data.data) {
				console.log(res.data)
				router.replace('/')
			}
		})
	}

	return {
		isLoading: result.isLoading,
		handleLoginUserSubmit,
		form,
		loginErrorMessage
	}
}
