import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { addWorkPosSchema } from '../validation/addWorkPosSchema'
import { AddWorkPosFormValues } from '../types/addWorkPosFormValues.types'
import { Dept } from '@/src/entities'

export const useAddWorkPosForm = (allDept: Dept[]) => {
	const form = useForm<AddWorkPosFormValues>({
		resolver: zodResolver(addWorkPosSchema),
		// defaultValues: {
		// 	dept_id:
		// },
		mode: 'all',
		reValidateMode: 'onSubmit'
	})

	return form
}
