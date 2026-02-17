import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginFormSchema } from '../validation/loginFormSchema'
import { LoginFormValues } from '../types/loginFormValues.types'

export const useLoginForm = () => {
	const form = useForm<LoginFormValues>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			auth: 'not_jwt'
		},
		mode: 'all',
		reValidateMode: 'onSubmit'
	})
	return form
}
