'use client'

import { Dept, useAllDeptQuery } from '@/src/entities'
import { FormBtn, FormInput, useGetSuccessMessage } from '@/src/shared'
import { useAddWorkPos } from '../hooks/useAddWorkPos'
import { useEffect } from 'react'

export default function AddWorkPosModal() {
	const { data: allDept } = useAllDeptQuery({})

	if (!allDept) return null

	const {
		form: {
			register,
			handleSubmit,
			formState: { errors },
			watch
		},
		handleAddWorkPosSubmit,
		isLoading,
		isSuccess
	} = useAddWorkPos(allDept?.data)

	const successMessage = useGetSuccessMessage(
		isSuccess,
		'Должность успешно добавлена'
	)

	return (
		<form
			onSubmit={handleSubmit(handleAddWorkPosSubmit)}
			className="flex flex-col gap-2"
		>
			<h2 className="text-[20px] font-medium mb-4">Добавить должность</h2>
			<FormInput
				type="text"
				placeholder="Название должности"
				label="Введите название"
				{...register('workpositionname')}
				errorMessage={errors.workpositionname?.message}
			/>
			<label className="flex flex-col gap-1">
				<span className="text-[16px] text-[#7f7f7f]">Отдел</span>
				<select
					{...register('dept_id', {
						valueAsNumber: true
					})}
					className="w-full py-2 pl-2 border-1 border-[var(--bg-color)] bg-white rounded-md focus:outline-[var(--bg-color)]"
				>
					{allDept?.data?.map((item: Dept) => (
						<option key={item.id} value={item.id}>
							{item.deptname}
						</option>
					))}
				</select>
				{errors?.dept_id?.message && (
					<span className="text-[14px] font-light text-red-400">
						{errors?.dept_id?.message}
					</span>
				)}
			</label>

			{successMessage && (
				<span className="text-[14px] font-light text-green-400">
					{successMessage}
				</span>
			)}
			<FormBtn type="submit" text="Добавить" disabled={isLoading} />
		</form>
	)
}
