import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { addDeptSchema } from '../validation/addDeptSchema'
import { AddDeptFormValues } from '../types/addDeptFormValues.types'

export const useAddDeptForm = () => {
	const form = useForm<AddDeptFormValues>({
		resolver: zodResolver(addDeptSchema),
		mode: 'all',
		reValidateMode: 'onSubmit'
	})
	return form
}
