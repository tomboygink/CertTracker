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
				backgroundColor: isActive ? '#8848f9' : 'rgba(242,242,242,0.5)',
				color: isActive ? 'white' : '#7f7f7f'
			}}
			className="py-[8px] px-[16px] rounded-[8px] text-[14px] font-medium leading-[20px] cursor-pointer"
			{...other}
		>
			{text}
		</button>
	)
}
