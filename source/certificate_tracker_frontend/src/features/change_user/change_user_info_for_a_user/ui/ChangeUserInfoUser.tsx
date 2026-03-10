'use client'

import {
	FormBtn,
	FormInput,
	useAppSelector,
	useGetSuccessMessage
} from '@/src/shared'
import { useChangeUserForUser } from '../hooks/useChangeUserForUser'

export default function ChangeUserInfoUser() {
	const user = useAppSelector(state => state.user.user)

	if (!user) return null

	const {
		form: {
			register,
			handleSubmit,
			formState: { errors }
		},
		handleChangeUserInfoForUserSubmit,
		isLoading,
		isSuccess
	} = useChangeUserForUser(user)

	const successMessage = useGetSuccessMessage(
		isSuccess,
		'Данные успешно изменены'
	)

	return (
		<form
			onSubmit={handleSubmit(handleChangeUserInfoForUserSubmit)}
			className="flex flex-col gap-2"
		>
			<h2 className="text-[20px] font-medium mb-4">Изменить информацию</h2>
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
			<label className="flex items-center gap-[12px]">
				<input className="w-6 h-6" type="checkbox" {...register('sendmail')} />
				<span>Включить уведомления?</span>
				{errors?.sendmail?.message && (
					<span className="text-[14px] font-light text-red-400">
						{errors?.sendmail?.message}
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
