import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { addCategoryCertSchema } from '../validation/addCategoryCertSchema'
import { AddCategoryCertFormValues } from '../types/addCategoryCertFormValues.types'

export const useAddCategoryCertForm = () => {
	const form = useForm<AddCategoryCertFormValues>({
		resolver: zodResolver(addCategoryCertSchema),
		mode: 'all',
		reValidateMode: 'onSubmit'
	})
	return form
}
