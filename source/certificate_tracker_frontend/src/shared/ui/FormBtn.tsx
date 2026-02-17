'use client'

import { ButtonHTMLAttributes, FC } from 'react'

interface FormBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
}

export const FormBtn: FC<FormBtnProps> = props => {
	const { text, ...other } = props

	return (
		<button
			className="py-[10px] px-[16px] text-[14px] font-medium text-white bg-[var(--bg-color)] rounded-md cursor-pointer hover:bg-[var(--bg-color-hover)] transition-all duration-300"
			{...other}
		>
			{text}
		</button>
	)
}
