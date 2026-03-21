'use client'

import { ButtonHTMLAttributes, FC } from 'react'

interface FormBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
}

export const FormBtn: FC<FormBtnProps> = props => {
	const { text, ...other } = props

	return (
		<button
			className="py-[10px] px-[8px] text-[10px] font-medium text-white bg-[var(--bg-color)] rounded-md cursor-pointer hover:bg-[var(--bg-color-hover)] transition-all duration-300 sm:text-[10px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px] sm:px-[8px] md:px-[16px] lg:px-[16px] xl:px-[16px] 2xl:px-[16px]"
			{...other}
		>
			{text}
		</button>
	)
}
