'use client'

import { Provider } from 'react-redux'
import { usePathname } from 'next/navigation'
import { Header } from '@/src/widgets'
import { PUBLIC_ROUTES, store } from '@/src/shared'

interface Providers {
	children: React.ReactNode
}

export const Providers = ({ children }: Providers) => {
	const pathname = usePathname()
	return (
		<Provider store={store}>
			{PUBLIC_ROUTES.includes(pathname) ? null : <Header />}
			{children}
		</Provider>
	)
}
