import { NextRequest, NextResponse } from 'next/server'
import { PUBLIC_ROUTES } from './shared'

export const middleware = (request: NextRequest) => {
	const { pathname } = request.nextUrl

	if (
		pathname.startsWith('/_next') ||
		pathname.startsWith('/api') ||
		pathname.startsWith('/favicon') ||
		pathname.match(/\.(png|jpg|jpeg|svg|webp|ico|css|js)$/)
	) {
		return NextResponse.next()
	}

	const token = request.cookies.get('access_token')
	const isAuth = !!token
	const isPublicRoute = PUBLIC_ROUTES.includes(pathname)

	if (isPublicRoute && isAuth) {
		return NextResponse.redirect(new URL('/', request.url))
	}

	if (!isPublicRoute && !isAuth) {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	return NextResponse.next()
}
