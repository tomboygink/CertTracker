'use client'

import { FC, InputHTMLAttributes } from 'react'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
	errorMessage?: string
	label?: string
}

export const FormInput: FC<FormInputProps> = props => {
	const { errorMessage, label, ...other } = props

	return (
		<label className="flex flex-col gap-1">
			{label && <span className="text-[16px] text-[#7f7f7f]">{label}</span>}
			<input
				className="w-full py-2 pl-2 border-1 border-[var(--bg-color)] bg-white rounded-md focus:outline-[var(--bg-color)]"
				{...other}
			/>
			<span className="text-[14px] font-light text-red-400">
				{errorMessage}
			</span>
		</label>
	)
}
