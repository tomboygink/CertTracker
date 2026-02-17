'use client'

import { FormBtn, FormInput } from '@/src/shared'
import Link from 'next/link'
import { useControlAllLoginForm } from '../model/hooks/useControlAllLoginForm'

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
			className="flex flex-col items-center justify-center gap-8 min-w-120 min-h-120 p-10 bg-[#f5f5f5] border-1 border-[var(--bg-color)] rounded-[12%]"
		>
			<div className="w-40 h-40 rounded-[50%] bg-gray-300 bg-[url(/user.svg)] bg-no-repeat bg-center bg-size-[70px]"></div>
			<div className="flex flex-col gap-5 w-full">
				<FormInput
					type="text"
					placeholder="Введите логин"
					{...register('login')}
					errorMessage={errors.login?.message}
				/>
				<FormInput
					type="password"
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
			<div className="flex items-center gap-7">
				<Link
					href={''}
					className="border-b-1 border-transparent hover:border-black transition-all duration-300"
				>
					Забыли пароль?
				</Link>
				<FormBtn text="Войти" type="submit" disabled={isLoading} />
			</div>
		</form>
	)
}
