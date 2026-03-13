'use client'

import { FormBtn, FormInput, useGetSuccessMessage } from '@/src/shared'
import { useChangeDept } from '../hooks/useChangeDept'
import { Dept } from '@/src/entities'

interface ChangeDeptModalProps {
	dept: Dept | null
}

export default function ChangeDeptModal({ dept }: ChangeDeptModalProps) {
	if (!dept) return null

	const {
		form: {
			register,
			handleSubmit,
			formState: { errors }
		},
		handleChangeDeptSubmit,
		isLoading,
		isSuccess
	} = useChangeDept(dept)

	const successMessage = useGetSuccessMessage(
		isSuccess,
		'Данные успешно изменены'
	)

	return (
		<form
			onSubmit={handleSubmit(handleChangeDeptSubmit)}
			className="flex flex-col gap-2"
		>
			<h2 className="text-[20px] font-medium mb-4">
				Редактировать информафию об отделе
			</h2>
			<FormInput
				type="text"
				placeholder="Название отдела"
				label="Введите название"
				{...register('deptname')}
				errorMessage={errors.deptname?.message}
			/>

			{successMessage && (
				<span className="text-[14px] font-light text-green-400">
					{successMessage}
				</span>
			)}
			<FormBtn type="submit" text="Редактировать" disabled={isLoading} />
		</form>
	)
}
