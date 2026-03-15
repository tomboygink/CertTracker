'use client'

import { FormBtn, FormInput, useAppSelector } from '@/src/shared'
import { useChangeUserPassForUser } from '../hooks/useChangeUserPassForUser'

export default function ChangeUserPassForAUser() {
	const user = useAppSelector(state => state.user.user)

	if (!user) return <div>...Загрузка</div>

	const {
		form: {
			register,
			handleSubmit,
			formState: { errors }
		},
		handleChangeUserPassSubmit,
		isLoading,
		error,
		successMess
	} = useChangeUserPassForUser(user)

	return (
		<form
			onSubmit={handleSubmit(handleChangeUserPassSubmit)}
			className="flex flex-col gap-2"
		>
			<h2 className="text-[20px] font-medium mb-4">Изменить пароль</h2>
			<FormInput
				type="password"
				placeholder="Старый пароль"
				label="Старый пароль"
				{...register('old_password')}
				errorMessage={errors.old_password?.message}
			/>
			<FormInput
				type="password"
				placeholder="Новый пароль"
				label="Новый пароль"
				{...register('new_password')}
				errorMessage={errors.new_password?.message}
			/>
			{error && (
				<span className="text-[14px] font-light text-red-600">{error}</span>
			)}
			{successMess && (
				<span className="text-[14px] font-light text-green-400">
					{successMess}
				</span>
			)}
			<FormBtn type="submit" text="Применить изменения" disabled={isLoading} />
		</form>
	)
}
