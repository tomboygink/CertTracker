'use client'

import {
	CategoryCert,
	useAllCategoryCertQuery,
	useCertDocsQuery
} from '@/src/entities'
import {
	FormBtn,
	FormInput,
	useAppSelector,
	useGetSuccessMessage
} from '@/src/shared'
import { useChangeCert } from '../model/hooks/useChangeCert'
import { useEffect, useRef } from 'react'
import { useHandleFileChange } from '../../add_cert/model/hooks/useHandleFileChange'
import { base64ToFile } from '../model/service/base64toFile'

const isDocValuePresent = (value?: string | null) => {
	if (!value) return false
	const normalizedValue = String(value).trim().toLowerCase()
	return normalizedValue !== 'null' && normalizedValue !== 'undefined'
}

const getDocFileName = (doc?: Record<string, unknown>) => {
	if (!doc) return 'document.pdf'

	const rawName =
		doc.filename ??
		doc.fileName ??
		doc.name ??
		doc.docsname ??
		doc.docname ??
		doc.originalname

	if (!rawName) return 'document.pdf'
	return String(rawName)
}

export default function ChangeCertModal() {
	const selectCert = useAppSelector(state => state.selectCert.selectCert)
	const { data: categoryCert } = useAllCategoryCertQuery({})
	const { data: certDocs } = useCertDocsQuery({ id: selectCert?.id })

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

	const successMessage = useGetSuccessMessage(
		isSuccess,
		'Данные успешно изменены'
	)

	const { base64, handleChangeFile } = useHandleFileChange()
	const currentDoc = certDocs?.data?.[0]
	const fileRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (!fileRef.current) return
		if (!isDocValuePresent(currentDoc?.docs)) {
			fileRef.current.value = ''
			return
		}

		const file = base64ToFile(currentDoc?.docs, getDocFileName(currentDoc))
		if (!file) {
			fileRef.current.value = ''
			return
		}

		const dataTransfer = new DataTransfer()
		dataTransfer.items.add(file)

		fileRef.current.files = dataTransfer.files
	}, [currentDoc])

	useEffect(() => {
		setValue(
			'docs',
			isDocValuePresent(currentDoc?.docs) ? currentDoc?.docs : ''
		)
	}, [currentDoc, setValue])

	useEffect(() => {
		if (!base64) return
		setValue('docs', String(base64))
	}, [base64, setValue])

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
				ref={fileRef}
				type="file"
				accept=".pdf"
				label="Документ"
				onChange={e => {
					handleChangeFile(e)
				}}
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
