'use client'

import { FC, InputHTMLAttributes } from 'react'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
	errorMessage?: string
}

export const FormInput: FC<FormInputProps> = props => {
	const { errorMessage, ...other } = props

	return (
		<label className="flex flex-col gap-1">
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
