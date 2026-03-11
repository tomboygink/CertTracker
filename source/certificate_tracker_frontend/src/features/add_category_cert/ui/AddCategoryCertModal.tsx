'use client'

import { FormBtn, FormInput, useGetSuccessMessage } from '@/src/shared'
import { useAddCategoryCert } from '../hooks/useAddCategoryCert'

export default function AddCategoryCertModal() {
	const {
		form: {
			handleSubmit,
			register,
			formState: { errors }
		},
		handleAddCategoryCertSubmit,
		isLoading,
		isSuccess
	} = useAddCategoryCert()

	const successMessage = useGetSuccessMessage(
		isSuccess,
		'Категория успешно добавлена'
	)

	return (
		<form
			onSubmit={handleSubmit(handleAddCategoryCertSubmit)}
			className="flex flex-col gap-2"
		>
			<h2 className="text-[20px] font-medium mb-4">Добавить категорию</h2>
			<FormInput
				type="text"
				placeholder="Название категории"
				label="Введите название"
				{...register('categoryname')}
				errorMessage={errors.categoryname?.message}
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
