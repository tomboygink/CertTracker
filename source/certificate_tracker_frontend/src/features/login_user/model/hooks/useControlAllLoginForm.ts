import { useRouter } from 'next/navigation'
import { useLoginForm } from './useLoginForm'
import { setUser, useLoginUserMutation } from '@/src/entities'
import { LoginFormValues } from '../types/loginFormValues.types'
import { useState } from 'react'
import { useAppDispatch } from '@/src/shared'

export const useControlAllLoginForm = () => {
	const router = useRouter()
	const form = useLoginForm()
	const [loginUserMutation, result] = useLoginUserMutation()
	const [loginErrorMessage, setLoginErrorMessage] = useState('')
	const dispatch = useAppDispatch()

	const handleLoginUserSubmit = (data: LoginFormValues) => {
		loginUserMutation(data).then(res => {
			if (res.data.err) {
				setLoginErrorMessage(res.data.err)
				return
			}
			if (res.data.data) {
				dispatch(setUser(res?.data?.data[0]))
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
