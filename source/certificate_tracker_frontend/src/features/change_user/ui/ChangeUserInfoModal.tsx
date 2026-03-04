'use client'

import { FormBtn, FormInput, useGetSuccessMessage } from '@/src/shared'
import { useChangeInfoUser } from '../hooks/useChangeInfoUser'
import {
	Access,
	useAllAccessQuery,
	useAllWorkPositionQuery,
	User,
	WorkPosition
} from '@/src/entities'
import { useEffect } from 'react'

interface ChangeUserInfoModalProps {
	user: User
}

export default function ChangeUserInfoModal({
	user
}: ChangeUserInfoModalProps) {
	if (!user) return null

	const { data: allAccess } = useAllAccessQuery({})
	const { data: allWorkPos } = useAllWorkPositionQuery({})

	const {
		form: {
			register,
			handleSubmit,
			formState: { errors },
			watch
		},
		handleChangeUserInfo,
		isLoading,
		isSuccess
	} = useChangeInfoUser(user)

	const successMessage = useGetSuccessMessage(
		isSuccess,
		'Данные успешно изменены'
	)

	useEffect(() => {
		console.log(errors)
	}, [errors])

	useEffect(() => {
		console.log(watch())
	}, [watch()])

	return (
		<form
			// ref={formRef}
			onSubmit={handleSubmit(handleChangeUserInfo)}
			className="flex flex-col gap-2"
		>
			<h2 className="text-[20px] font-medium mb-4">
				Изменить информация о пользователе
			</h2>
			<FormInput
				type="text"
				placeholder="Фамилия"
				label="Фамилия"
				{...register('lastname')}
				errorMessage={errors.lastname?.message}
			/>
			<FormInput
				type="text"
				placeholder="Имя"
				label="Имя"
				{...register('firstname')}
				errorMessage={errors.firstname?.message}
			/>
			<label className="flex flex-col gap-1">
				<span className="text-[16px] text-[#7f7f7f]">Уровень доступа</span>
				<select
					{...register('access_id', {
						valueAsNumber: true
					})}
					className="w-full py-2 pl-2 border-1 border-[var(--bg-color)] bg-white rounded-md focus:outline-[var(--bg-color)]"
				>
					{allAccess?.data?.map((item: Access) => (
						<option key={item.id} value={item.id}>
							{item.accessname}
						</option>
					))}
				</select>
				{errors?.access_id?.message && (
					<span className="text-[14px] font-light text-red-400">
						{errors?.access_id?.message}
					</span>
				)}
			</label>
			<FormInput
				type="email"
				label="E-mail"
				placeholder="E-mail"
				{...register('email')}
				errorMessage={errors?.email?.message}
			/>
			<label className="flex items-center gap-[12px]">
				<input className="w-6 h-6" type="checkbox" {...register('sendmail')} />
				<span>Включить уведомления?</span>
				{errors?.sendmail?.message && (
					<span className="text-[14px] font-light text-red-400">
						{errors?.sendmail?.message}
					</span>
				)}
			</label>
			<label className="flex flex-col gap-1">
				<span className="text-[16px] text-[#7f7f7f]">Должность</span>
				<select
					{...register('workposition_id')}
					className="w-full py-2 pl-2 border-1 border-[var(--bg-color)] bg-white rounded-md focus:outline-[var(--bg-color)]"
					name="certCategory"
				>
					{allWorkPos?.data?.map((item: WorkPosition) => (
						<option key={item.id} value={item.id}>
							{item.workpositionname}
						</option>
					))}
				</select>
				{errors?.workposition_id?.message && (
					<span className="text-[14px] font-light text-red-400">
						{errors?.workposition_id?.message}
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
