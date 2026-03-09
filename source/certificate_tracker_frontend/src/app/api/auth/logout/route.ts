import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	const cookiesStore = await cookies()
	cookiesStore.delete('access_token')

	const loginUrl = new URL('/login', request.nextUrl.origin)

	return NextResponse.redirect(loginUrl)
}
