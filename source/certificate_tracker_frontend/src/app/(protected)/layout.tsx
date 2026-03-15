// import { getUserByToken } from '@/src/shared'
// import { cookies } from 'next/headers'
// import { redirect } from 'next/navigation'
// import React from 'react'
// import { UserHydration } from '../providers'
// import { User } from '@/src/entities'

// export default async function PrivatePagesLayout({
// 	children
// }: Readonly<{ children: React.ReactNode }>) {

// 	const cookieStore = cookies()
// 	const token = (await cookieStore).get('access_token')?.value

// 	if (!token) {
// 		redirect('/login')
// 	}

// 	const user: User = await getUserByToken(token)
// 	console.log(user)

// 	if (!user) {
// 		redirect('/login')
// 	}

// 	return (
// 		<UserHydration user={user}>
// 			<div className="w-full h-[100vh] pt-[81px] px-[32px] pb-[32px] bg-[#fcfcfc]">
// 				{children}
// 			</div>
// 		</UserHydration>
// 	)
// }

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getUserByToken } from '@/src/shared'
import React from 'react'
import { UserHydration } from '../providers'
export default async function PrivatePagesLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
	const cookieStore = await cookies()
	const token = cookieStore.get('access_token')?.value

	// Нет токена → редирект
	if (!token) {
		redirect('/login')
	}

	// Проверяем токен и пользователя
	// const user: User = await getUserByToken(token)
	const data = await getUserByToken(token)
	console.log('data layout', data)
	// Токен некорректный или пользователь заблокирован
	if (data === 'user_blocked') {
		console.log('FUCK YOU')
		return (
			<div className="w-full h-[100vh] pt-[81px] px-[32px] pb-[32px] bg-[#fcfcfc]">
				пшел вон, редирект на block и отравка для удаления куков
			</div>
		)
	}
	// Пользователь валидный
	return (
		<UserHydration user={data}>
			<div className="w-full h-[100vh] pt-[81px] px-[32px] pb-[32px] bg-[#fcfcfc]">
				{children}{' '}
			</div>
		</UserHydration>
	)
}
