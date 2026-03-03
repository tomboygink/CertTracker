'use client'

import { useAppDispatch } from '@/src/shared'
import { openModal } from '@/src/widgets'
import { FC } from 'react'

interface AddCertBtnProps {
	text: string
}

export const AddCertBtn: FC<AddCertBtnProps> = ({ text }) => {
	const dispatch = useAppDispatch()

	return (
		<button
			onClick={() =>
				dispatch(openModal({ type: 'addCert', payload: undefined }))
			}
			className="px-[16px] py-[8px] bg-[var(--bg-color)] rounded-[6px] font-medium text-[14px] text-white cursor-pointer hover:bg-[var(--bg-color-hover)] transition-all duration-300"
		>
			{text}
		</button>
	)
}
