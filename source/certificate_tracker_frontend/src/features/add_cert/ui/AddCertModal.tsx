'use client'

import { FormBtn, FormInput, useGetSuccessMessage } from '@/src/shared'
import { useAddCert } from '../model/hooks/useAddCert'
import { useEffect, useState } from 'react'
import { CategoryCert } from '@/src/entities'
import { useHandleFileChange } from '../model/hooks/useHandleFileChange'

export default function AddCertModal() {
	const [dateStart, setDateStart] = useState<Date | null>(null)

	const {
		form: {
			register,
			handleSubmit,
			formState: { errors },
			setValue
		},
		handleSubmitAddCert,
		isLoadingAddCert,
		isLoadingCategoryCert,
		isSuccessAddCertMutation,
		categoryCert
	} = useAddCert()
	const { base64, handleChangeFile } = useHandleFileChange()

	const successMessage = useGetSuccessMessage(
		isSuccessAddCertMutation,
		'Сертификат успешно добавлен'
	)

	useEffect(() => {
		setValue('docs', String(base64))
	}, [base64])

	if (isLoadingCategoryCert) return null

	return (
		<form
			onSubmit={handleSubmit(handleSubmitAddCert)}
			className="flex flex-col gap-2"
		>
			<h2 className="text-[20px] font-medium mb-4">Добавить сертификат</h2>
			<FormInput
				type="text"
				placeholder="Название сертификата"
				label="Название сертификата"
				{...register('certname')}
				errorMessage={errors.certname?.message}
			/>
			<FormInput
				type="text"
				placeholder="Номер сертификата"
				label="Номер сертификата"
				{...register('certnumber')}
				errorMessage={errors.certnumber?.message}
			/>
			<label className="flex flex-col gap-1">
				<span className="text-[16px] text-[#7f7f7f]">
					Категория сертификата
				</span>
				<select
					{...register('category_id', {
						valueAsNumber: true
					})}
					className="w-full py-2 pl-2 border-1 border-[var(--bg-color)] bg-white rounded-md focus:outline-[var(--bg-color)]"
					// name="certCategory"
				>
					{categoryCert?.data?.map((item: CategoryCert) => (
						<option key={item.id} value={item.id}>
							{item.categoryname}
						</option>
					))}
				</select>
				{errors?.category_id?.message && (
					<span className="text-[14px] font-light text-red-400">
						{errors?.category_id?.message}
					</span>
				)}
			</label>
			<FormInput
				type="date"
				label="Дата выпуска"
				{...register('issuedate', {
					onChange: e => setDateStart(e.target.value)
				})}
				errorMessage={errors?.issuedate?.message}
			/>
			<FormInput
				type="date"
				label="Период действия"
				{...register('certvalidityperiod')}
				errorMessage={errors?.certvalidityperiod?.message}
				disabled={!dateStart}
				min={dateStart ? String(dateStart) : undefined}
			/>
			<FormInput
				type="file"
				accept=".pdf"
				label="Документ"
				onChange={e => handleChangeFile(e)}
				errorMessage={errors?.docs?.message}
			/>
			<input type="hidden" {...register('docs')} />
			{successMessage && (
				<span className="text-[14px] font-light text-green-400">
					{successMessage}
				</span>
			)}
			<FormBtn type="submit" text="Добавить" disabled={isLoadingAddCert} />
		</form>
	)
}
