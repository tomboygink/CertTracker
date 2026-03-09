import type { Metadata } from 'next'
import './globals.css'
import { inter_font } from '../shared'
import { ModalRoot } from '../widgets'
import { Providers } from './providers'
// import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

export const metadata: Metadata = {
	title: 'Трекер сертификатов',
	description: 'Трекер сертификатов'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru">
			<body className={`flex ${inter_font.variable} antialiased`}>
				<Providers>
					{/* <ChakraProvider value={defaultSystem}> */}
					{children}
					<ModalRoot />
					{/* </ChakraProvider> */}
				</Providers>
			</body>
		</html>
	)
}
