'use client'

import { FormBtn, FormInput, useGetSuccessMessage } from '@/src/shared'
import { useChangeCategoryCert } from '../hooks/useChangeCategoryCert'
import { CategoryCert } from '@/src/entities'

interface ChangeCategoryCertModalProps {
	category: CategoryCert
}

export default function ChangeCategoryCertModal({
	category
}: ChangeCategoryCertModalProps) {
	const {
		form: {
			handleSubmit,
			register,
			formState: { errors }
		},
		handleChangeCategoryCertSubmit,
		isLoading,
		isSuccess
	} = useChangeCategoryCert(category)

	const successMessage = useGetSuccessMessage(
		isSuccess,
		'Данные успешно изменены'
	)

	return (
		<form
			onSubmit={handleSubmit(handleChangeCategoryCertSubmit)}
			className="flex flex-col gap-2"
		>
			<h2 className="text-[20px] font-medium mb-4">Редактировать категорию</h2>
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
			<FormBtn type="submit" text="Редактировать" disabled={isLoading} />
		</form>
	)
}
