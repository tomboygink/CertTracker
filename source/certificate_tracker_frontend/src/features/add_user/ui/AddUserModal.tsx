'use client'

import { Access, WorkPosition } from '@/src/entities'
import {
	FormBtn,
	FormInput,
	useAppDispatch,
	useClickOutside,
	useGetSuccessMessage
} from '@/src/shared'
import { useAddUser } from '../hooks/useAddUser'
import { useRef } from 'react'
import { closeModal } from '@/src/widgets'

export default function AddUserModal() {
	const {
		allAccessData,
		allWorkPosData,
		form: {
			register,
			handleSubmit,
			formState: { errors }
		},
		isLoading,
		isLoadingMutation,
		isSuccessMutation,
		handleAddUserSubmit
	} = useAddUser()

	const successMessage = useGetSuccessMessage(
		isSuccessMutation,
		'Пользователь успешно добавлен'
	)
	if (isLoading) return null

	return (
		<form
			onSubmit={handleSubmit(handleAddUserSubmit)}
			className="flex flex-col gap-2"
		>
			<h2 className="text-[20px] font-medium mb-4">
				Изменить информация о пользователе
			</h2>
			<FormInput
				type="text"
				placeholder="Логин"
				label="Логин"
				{...register('login')}
				errorMessage={errors.login?.message}
			/>
			<FormInput
				type="text"
				placeholder="Пароль"
				label="Пароль"
				{...register('password')}
				errorMessage={errors.password?.message}
			/>
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
					{allAccessData?.map((item: Access) => (
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
			<label className="flex flex-col gap-1 mb-[24px]">
				<span className="text-[16px] text-[#7f7f7f]">Должность</span>
				<select
					{...register('workposition_id')}
					className="w-full py-2 pl-2 border-1 border-[var(--bg-color)] bg-white rounded-md focus:outline-[var(--bg-color)]"
				>
					{allWorkPosData?.map((item: WorkPosition) => (
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
			<FormBtn
				type="submit"
				text="Добавить пользователя"
				disabled={isLoadingMutation}
			/>
		</form>
	)
}
