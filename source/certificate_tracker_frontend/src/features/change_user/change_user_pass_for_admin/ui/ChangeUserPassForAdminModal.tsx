'use client'

import { FormBtn, FormInput, useGetSuccessMessage } from '@/src/shared'
import { useChangeUserPassForAdmin } from '../hooks/useChangeUserPassForAdmin'
import { User } from '@/src/entities'

interface ChangeUserPassForAdminModalProps {
	user: User
}

export default function ChangeUserPassForAdminModal({
	user
}: ChangeUserPassForAdminModalProps) {
	if (!user) return null

	const {
		handleChangeUserPassForAdminSubmit,
		form: {
			formState: { errors },
			handleSubmit,
			register
		},
		isLoading,
		isSuccess
	} = useChangeUserPassForAdmin(user)

	const successMessage = useGetSuccessMessage(
		isSuccess,
		'Пароль успешно изменен'
	)

	return (
		<form
			onSubmit={handleSubmit(handleChangeUserPassForAdminSubmit)}
			className="flex flex-col gap-2"
		>
			<h2 className="text-[20px] font-medium mb-4">
				Изменить пароль{' '}
				{user
					? user?.firstname.at(0)?.toUpperCase() +
						user?.firstname.slice(1).toLowerCase()
					: null}{' '}
				{user
					? user?.lastname.at(0)?.toUpperCase() +
						user?.lastname.slice(1).toLowerCase()
					: null}
			</h2>
			<FormInput
				type="password"
				placeholder="Пароль"
				label="Пароль"
				{...register('password')}
				errorMessage={errors.password?.message}
			/>
			{successMessage && (
				<span className="text-[14px] font-light text-green-400">
					{successMessage}
				</span>
			)}
			<FormBtn type="submit" text="Применить изменения" disabled={isLoading} />
		</form>
	)
}
