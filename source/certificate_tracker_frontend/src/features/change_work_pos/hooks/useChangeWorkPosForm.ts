import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { changeWorkPosSchema } from '../validation/changeWorkPosSchema'
import { ChangeWorkPosFormValues } from '../types/changeWorkPosFormValues.types'
import { WorkPosition } from '@/src/entities'

export const useChangeWorkPosForm = (workPos: WorkPosition) => {
	const form = useForm<ChangeWorkPosFormValues>({
		resolver: zodResolver(changeWorkPosSchema),
		defaultValues: {
			workpositionname: workPos.workpositionname ?? '',
			dept_id: Number(workPos.dept_id),
			id: Number(workPos.id)
		},
		mode: 'all',
		reValidateMode: 'onSubmit'
	})
	return form
}
