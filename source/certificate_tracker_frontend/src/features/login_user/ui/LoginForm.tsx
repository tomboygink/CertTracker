'use client'

import { useLoginUserMutation } from '@/src/entities'
import { ECommand, FormBtn, FormInput } from '@/src/shared'
import Link from 'next/link'
import { useLoginForm } from '../model/hooks/useLoginForm'
import { useEffect } from 'react'
import { LoginFormValues } from '../model/types/loginFormValues.types'
import { useRouter } from 'next/navigation'

export const LoginForm = () => {
	const [
		loginMutation,
		{ isSuccess, isError, isLoading, status, endpointName, data }
	] = useLoginUserMutation()
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch
	} = useLoginForm()

	const router = useRouter()

	const handleLoginUserSubmit = async (data: LoginFormValues) => {
		// loginMutation({ cmd: ECommand.auth, args: data })

		const response = await fetch(`/api`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify({
				cmd: 'Auth',
				args: data
			})
		})

		if (!response.ok) {
			console.log(`Status: ${response.status}`)
			console.log(`Хуета`)
		}

		const dataUser = await response.json()
		console.log(dataUser)
		router.replace('/')
		return dataUser
	}

	useEffect(() => {
		console.log(endpointName)
	}, [endpointName])

	useEffect(() => {
		console.log(status)
	}, [status])

	useEffect(() => {
		console.log(isSuccess)
		console.log(isError)
		console.log(isLoading)
	}, [isSuccess, isError, isLoading])

	return (
		<form
			onSubmit={handleSubmit(handleLoginUserSubmit)}
			className="flex flex-col items-center justify-center gap-8 min-w-140 min-h-100 p-10 bg-[#f5f5f5] border-1 border-[var(--bg-color)] rounded-xl"
		>
			<h1 className="text-2xl ">Авторизация</h1>
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
			</div>
			<div className="flex items-center gap-7">
				<Link
					href={''}
					className="border-b-1 border-transparent hover:border-black transition-all duration-300"
				>
					Забыли пароль?
				</Link>
				<FormBtn text="Войти" type="submit" />
			</div>
		</form>
	)
}
