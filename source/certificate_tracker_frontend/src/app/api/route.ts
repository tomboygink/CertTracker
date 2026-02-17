import { NextRequest, NextResponse } from 'next/server'
import config from '../../../../config/config.json'
import { User } from '@/src/entities'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
	try {
		const body = await request.json()
		const { args, cmd } = body
		const cookiesStore = cookies()

		const response = await fetch(
			`http://${config?.server_config.host}:${config?.server_config.port}/api`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					cmd: `${cmd}`,
					args: args
				})
			}
		)

		if (!response.ok) {
			return NextResponse.json(
				{ message: 'Authorization failed' },
				{ status: response.status }
			)
		}
		const userData = await response.json()

		if (!userData.data[0].token) {
			return NextResponse.json(
				{ message: 'Token not provided' },
				{ status: 500 }
			)
		}

		const { token, ...safeUser } = userData.data[0]

		const res = NextResponse.json(safeUser, {
			status: 200
		})
		res.cookies.set('token', userData.data[0].token, {
			httpOnly: true,
			path: '/',
			maxAge: 60 * 60,
			sameSite: 'lax',
			secure: false
		})
		return res
	} catch (error) {
		return NextResponse.json(
			{ message: 'Internal server error' },
			{ status: 500 }
		)
	}
}
