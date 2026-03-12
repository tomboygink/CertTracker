import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { changeDeptSchema } from '../validation/changeDeptSchema'
import { ChangeDeptFormValues } from '../types/changeDeptFormValues.types'
import { Dept } from '@/src/entities'

export const useChangeDeptForm = (dept: Dept) => {
	const form = useForm<ChangeDeptFormValues>({
		resolver: zodResolver(changeDeptSchema),
		defaultValues: {
			id: Number(dept.id),
			deptname: dept.deptname ?? ''
		},
		mode: 'all',
		reValidateMode: 'onSubmit'
	})
	return form
}
