'use client'

import { FC } from 'react'

interface EyesBtnProps {
	setState: () => void
}

export const EyesBtn: FC<EyesBtnProps> = ({ setState }) => {
	return (
		<button
			type="button"
			onClick={setState}
			className="absolute top-1/2 -translate-y-1/2 right-2 group flex items-center justify-center w-7 h-7 bg-transparent rounded-full cursor-pointer hover:bg-[var(--bg-color)] transition-all duration-300"
		>
			<svg
				className="fill-[#9a9a9a] w-4 h-4 group-hover:fill-white transition-all duration-300"
				viewBox="0 0 24 24"
			>
				<path d="M11.5 18c4 0 7.46-2.22 9.24-5.5C18.96 9.22 15.5 7 11.5 7s-7.46 2.22-9.24 5.5C4.04 15.78 7.5 18 11.5 18m0-12c4.56 0 8.5 2.65 10.36 6.5C20 16.35 16.06 19 11.5 19S3 16.35 1.14 12.5C3 8.65 6.94 6 11.5 6m0 2C14 8 16 10 16 12.5S14 17 11.5 17 7 15 7 12.5 9 8 11.5 8m0 1a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" />
			</svg>
		</button>
	)
}
