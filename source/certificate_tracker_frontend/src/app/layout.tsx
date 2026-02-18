import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { inter_font } from '../shared'
import { Header } from '../widgets'
import { Providers } from './providers/Providers'

export const metadata: Metadata = {
	title: 'CertTracker',
	description: 'CertTracker by SBI'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<Providers>
			<html lang="ru">
				<body className={`flex ${inter_font.variable} antialiased`}>
					{children}
				</body>
			</html>
		</Providers>
	)
}
