'use client'

import { CategoryCert, useAllCategoryCertQuery } from '@/src/entities'
import { FormBtn, FormInput, useGetSuccessMessage } from '@/src/shared'
import { useChangeCert } from '../model/hooks/useChangeCert'
import { useEffect } from 'react'
import { useHandleFileChange } from '../../add_cert/model/hooks/useHandleFileChange'

export default function ChangeCertModal() {
	const { data: categoryCert } = useAllCategoryCertQuery({})

	const {
		form: {
			register,
			handleSubmit,
			formState: { errors },
			setValue
		},
		handleChangeCertSubmit,
		isLoading,
		isSuccess
	} = useChangeCert()

	const { base64, handleChangeFile } = useHandleFileChange()

	const successMessage = useGetSuccessMessage(
		isSuccess,
		'Данные успешно изменены'
	)

	useEffect(() => {
		setValue('docs', String(base64))
	}, [base64])

	useEffect(() => {
		console.log(errors)
	}, [errors])

	return (
		<form
			onSubmit={handleSubmit(handleChangeCertSubmit)}
			className="flex flex-col gap-2"
		>
			<h2 className="text-[20px] font-medium mb-4">
				Редактировать данные сертификата
			</h2>
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
				{...register('issuedate')}
				errorMessage={errors.issuedate?.message}
			/>
			<FormInput
				type="date"
				label="Период действия"
				{...register('certvalidityperiod')}
				errorMessage={errors.certvalidityperiod?.message}
			/>
			<FormInput
				type="file"
				accept=".pdf"
				label="Документ"
				onChange={e => handleChangeFile(e)}
			/>
			<input type="hidden" {...register('docs')} />
			{successMessage && (
				<span className="text-[14px] font-light text-green-400">
					{successMessage}
				</span>
			)}
			<FormBtn type="submit" text="Сохранить изменения" disabled={isLoading} />
		</form>
	)
}
