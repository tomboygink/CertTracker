import React from 'react'

export default function PublicLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="flex items-center justify-center w-full h-[100vh]">
			{children}
		</div>
	)
}
