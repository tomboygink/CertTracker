'use client'

import { FormBtn, FormInput, useGetSuccessMessage } from '@/src/shared'
import { useAddDept } from '../hooks/useAddDept'

export default function AddDeptModal() {
	const {
		form: {
			register,
			handleSubmit,
			formState: { errors }
		},
		handleAddDeptSubmit,
		isLoading,
		isSuccess
	} = useAddDept()

	const successMessage = useGetSuccessMessage(
		isSuccess,
		'Отдел успешно добавлен'
	)

	return (
		<form
			onSubmit={handleSubmit(handleAddDeptSubmit)}
			className="flex flex-col gap-2"
		>
			<h2 className="text-[20px] font-medium mb-4">Добавить отдел</h2>
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
			<FormBtn type="submit" text="Добавить" disabled={isLoading} />
		</form>
	)
}
