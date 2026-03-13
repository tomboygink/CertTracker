'use client'

import { Dept, useAllDeptQuery, WorkPosition } from '@/src/entities'
import { FormBtn, FormInput, useGetSuccessMessage } from '@/src/shared'
import { useChangeWorkPos } from '../hooks/useChangeWorkPos'
import { FC } from 'react'

interface ChangeWorkPosModalProps {
	workPos: WorkPosition | null
}

export default function ChangeWorkPosModal({
	workPos
}: ChangeWorkPosModalProps) {
	if (!workPos) return null

	const { data: allDept } = useAllDeptQuery({})

	const {
		form: {
			register,
			handleSubmit,
			formState: { errors }
		},
		handleChangeWorkPosSubmit,
		isLoading,
		isSuccess
	} = useChangeWorkPos(workPos)

	const successMessage = useGetSuccessMessage(
		isSuccess,
		'Данные успешно изменены'
	)

	return (
		<form
			onSubmit={handleSubmit(handleChangeWorkPosSubmit)}
			className="flex flex-col gap-2"
		>
			<h2 className="text-[20px] font-medium mb-4">Редактировать должность</h2>
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
			<FormBtn type="submit" text="Применить изменения" disabled={isLoading} />
		</form>
	)
}
