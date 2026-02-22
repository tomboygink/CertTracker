'use client'

import { FormBtn, FormInput, useAppSelector } from '@/src/shared'
import { useAddCert } from '../model/hooks/useAddCert'
import { useEffect, useState } from 'react'
import { CategoryCert } from '@/src/entities'

export const AddCertModal = () => {
	const {
		form: {
			register,
			handleSubmit,
			formState: { errors },
			watch
		},
		handleSubmitAddCert,
		isLoadingAddCert,
		isLoadingCategoryCert,
		isSuccessAddCertMutation,
		categoryCert
	} = useAddCert()
	const [selectCategoryCert, setSelectCategoryCert] = useState(
		categoryCert?.data[0]
	)

	const user = useAppSelector(state => state.user.user)

	// if (!isLoadingCategoryCert) return null

	useEffect(() => {
		console.log(selectCategoryCert)
	}, [selectCategoryCert])

	useEffect(() => {
		console.log(watch())
	}, [watch()])

	useEffect(() => {
		console.log(user)
		console.log(user?.id)
	}, [user])

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
			/>
			{/* <FormInput
				type="text"
				placeholder="Категория сертификата"
				label="Категория сертификата"
			/> */}
			<label className="flex flex-col gap-1">
				<span className="text-[16px] text-[#7f7f7f]">
					Категория сертификата
				</span>
				<select
					className="w-full py-2 pl-2 border-1 border-[var(--bg-color)] bg-white rounded-md focus:outline-[var(--bg-color)]"
					name="certCategory"
				>
					{categoryCert?.data?.map((item: CategoryCert) => (
						<option key={item.id} value={item.id}>
							{item.categoryname}
						</option>
					))}
				</select>
			</label>
			<FormInput type="date" label="Дата выпуска" />
			<FormInput type="date" label="Период действия" />
			<FormInput type="file" label="Документ" />
			<FormBtn type="submit" text="Добавить" disabled={isLoadingAddCert} />
		</form>
	)
}
