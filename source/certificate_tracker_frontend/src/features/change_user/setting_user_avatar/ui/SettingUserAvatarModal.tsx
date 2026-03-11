'use client'

import { FormBtn, FormInput, useAppSelector } from '@/src/shared'
import { useSettingUserAvatar } from '../hooks/useSettingUserAvatar'
import { useEffect, useState } from 'react'
import { handleFileChange } from '../service/handleFileChange'

export default function SettingUserAvatarModal() {
	const [base64, setBase64] = useState<string | null>(null)
	const user = useAppSelector(state => state.user.user)

	if (!user) return null

	const {
		form: {
			register,
			handleSubmit,
			formState: { errors },
			watch,
			setValue
		},
		handleChangeUserAvatarSubmit,
		isLoading,
		successMessage,
		errorMessage
	} = useSettingUserAvatar(user, base64)

	return (
		<form
			onSubmit={handleSubmit(handleChangeUserAvatarSubmit)}
			className="flex flex-col gap-2"
		>
			<h2 className="text-[20px] font-medium mb-4">Установить аватар</h2>
			<FormInput
				onChange={e => handleFileChange(e, setBase64, setValue)}
				type="file"
				accept="image/png, image/jpeg"
				label="Выберите изображение"
				errorMessage={errors.avatar?.message}
			/>

			<input type="hidden" {...register('avatar')} />
			{successMessage && (
				<span className="text-[14px] font-light text-green-400">
					{successMessage}
				</span>
			)}
			{errorMessage && (
				<span className="text-[14px] font-light text-red-500">
					{errorMessage}
				</span>
			)}
			<FormBtn type="submit" text="Применить изменения" disabled={isLoading} />
		</form>
	)
}
