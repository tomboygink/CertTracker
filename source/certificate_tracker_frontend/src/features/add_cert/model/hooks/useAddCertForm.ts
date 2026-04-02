import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { addCertSchema } from '../validation/addCertSchema'
import { AddCertFormValues } from '../types/addCertFormValues.types'
import { useAppSelector } from '@/src/shared'

export const useAddCertForm = () => {
	const user = useAppSelector(state => state.user.user)
	const today = new Date().toISOString().slice(0, 10)

	const form = useForm<AddCertFormValues>({
		resolver: zodResolver(addCertSchema),
		defaultValues: {
			user_id: Number(user?.id),
			issuedate: today,
			certvalidityperiod: today
		},
		mode: 'all',
		reValidateMode: 'onSubmit'
	})

	return form
}
