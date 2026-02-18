'use client'

import { Provider } from 'react-redux'
import { usePathname } from 'next/navigation'
import { Header } from '@/src/widgets'
import { PUBLIC_ROUTES, store } from '@/src/shared'
import { RefreshAuthProvider } from './RefreshAuthProvider'

interface Providers {
	children: React.ReactNode
}

export const Providers = ({ children }: Providers) => {
	const pathname = usePathname()
	return (
		<Provider store={store}>
			<RefreshAuthProvider>
				{PUBLIC_ROUTES.includes(pathname) ? null : <Header />}
				{children}
			</RefreshAuthProvider>
		</Provider>
	)
}
