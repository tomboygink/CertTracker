'use client'

import { FC, InputHTMLAttributes, useState } from 'react'
import { EyesBtn } from './EyesBtn'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
	errorMessage?: string
	label?: string
	ref?: any
}

export const FormInput: FC<FormInputProps> = props => {
	const [show, setShow] = useState<boolean>(false)
	const { errorMessage, label, type, ref, ...other } = props

	const inputType = type === 'password' ? (show ? 'text' : 'password') : type

	return (
		<label className="flex flex-col gap-1 flex-1">
			{label && <span className="text-[16px] text-[#7f7f7f]">{label}</span>}
			{type === 'password' ? (
				<div className="relative">
					<input
						ref={ref}
						key={inputType}
						type={inputType}
						className="w-full py-[6px] sm:py-[8px] pl-[8px] text-[14px] sm:text-[16px] border-1 border-[var(--bg-color)] bg-white rounded-md focus:outline-[var(--bg-color)] transition-all duration-300"
						{...other}
					/>
					<EyesBtn
						setState={() => {
							if (inputType === 'password') {
								setShow(true)
							} else {
								setShow(false)
							}
						}}
					/>
				</div>
			) : (
				<input
					ref={ref}
					type={type}
					className="w-full py-[6px] sm:py-[8px] pl-[8px] text-[14px] sm:text-[16px] border-1 border-[var(--bg-color)] bg-white rounded-md focus:outline-[var(--bg-color)] transition-all duration-300"
					{...other}
				/>
			)}
			<span className="text-[14px] font-light text-red-400">
				{errorMessage}
			</span>
		</label>
	)
}
