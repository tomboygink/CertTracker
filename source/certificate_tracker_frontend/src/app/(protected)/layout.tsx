import { getUserByToken } from '@/src/shared'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'
import { UserHydration } from '../providers'

export default async function PrivatePagesLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
	const cookieStore = cookies()
	const token = (await cookieStore).get('access_token')?.value

	if (!token) {
		redirect('/login')
	}

	const user = await getUserByToken(token)

	if (!user) {
		redirect('/login')
	}

	return (
		<UserHydration user={user}>
			<div className="w-full h-[100vh] pt-[81px] px-[32px] pb-[32px]">
				{children}
			</div>
		</UserHydration>
	)
}
