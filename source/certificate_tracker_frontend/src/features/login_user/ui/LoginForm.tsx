'use client'

import { FormBtn, FormInput } from '@/src/shared'
import { useControlAllLoginForm } from '../model/hooks/useControlAllLoginForm'
import { useState } from 'react'

export const LoginForm = () => {
	const {
		isLoading,
		form: {
			handleSubmit,
			formState: { errors },
			register
		},
		handleLoginUserSubmit,
		loginErrorMessage
	} = useControlAllLoginForm()

	return (
		<form
			onSubmit={handleSubmit(handleLoginUserSubmit)}
			className="flex flex-col items-center justify-center gap-6 sm:gap-8 w-[calc(100%-32px)] max-w-[480px] mx-4 sm:mx-0 min-h-[400px] sm:min-h-[480px] p-6 sm:p-10 bg-[#f5f5f5] border-1 border-[var(--bg-color)] rounded-[24px]"
		>
			<div className="w-24 h-24 sm:w-40 sm:h-40 rounded-[50%] shrink-0 bg-gray-300 bg-[url(/user.svg)] bg-no-repeat bg-center bg-[length:50px] sm:bg-[length:70px]"></div>
			<div className="flex flex-col gap-5 w-full">
				<FormInput
					type="text"
					placeholder="Введите логин"
					{...register('login')}
					errorMessage={errors.login?.message}
				/>
				<FormInput
					type={'password'}
					placeholder="Введите пароль"
					{...register('password')}
					errorMessage={errors.password?.message}
				/>
				{loginErrorMessage && (
					<span className="text-[14px] font-light text-red-400">
						{loginErrorMessage}
					</span>
				)}
			</div>
			<div className="flex items-center gap-7 w-full mt-4">
				<FormBtn 
					text="Войти" 
					type="submit" 
					disabled={isLoading} 
					className="w-full py-3 text-[16px] font-medium text-white bg-[var(--bg-color)] rounded-md cursor-pointer hover:bg-[var(--bg-color-hover)] transition-all duration-300"
				/>
			</div>
		</form>
	)
}
