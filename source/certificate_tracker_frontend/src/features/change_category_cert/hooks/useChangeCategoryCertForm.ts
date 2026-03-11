import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { changeCategoryCertSchema } from '../validation/changeCategoryCertSchema'
import { ChangeCategoryCertFormValues } from '../types/changeCategoryCertFormValues.types'
import { CategoryCert } from '@/src/entities'

export const useChangeCategoryCertForm = (category: CategoryCert) => {
	const form = useForm<ChangeCategoryCertFormValues>({
		resolver: zodResolver(changeCategoryCertSchema),
		defaultValues: {
			id: Number(category.id),
			categoryname: category.categoryname ?? ''
		},
		mode: 'all',
		reValidateMode: 'onSubmit'
	})
	return form
}
