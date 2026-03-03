'use client'

import { ButtonHTMLAttributes, FC } from 'react'

interface FilterTabBtn extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
	isActive: boolean
}

export const FilterTabBtn: FC<FilterTabBtn> = props => {
	const { text, isActive, ...other } = props

	return (
		<button
			style={{
				backgroundColor: isActive ? '#8848f9' : '',
				color: isActive ? 'white' : ''
			}}
			className="py-[8px] px-[16px] rounded-[8px] text-[14px] font-medium leading-[20px] text-[#7f7f7f] bg-[rgba(242,242,242,0.5)] cursor-pointer hover:bg-[#8848f9] hover:text-white transition-all duration-300"
			{...other}
		>
			{text}
		</button>
	)
}
