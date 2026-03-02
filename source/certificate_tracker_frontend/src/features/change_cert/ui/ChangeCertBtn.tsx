'use client'

import { useAppDispatch } from '@/src/shared'
import { openModal } from '@/src/widgets'
import { FC } from 'react'

interface ChangeCertBtnProps {
	handleClose: () => void
}

export const ChangeCertBtn: FC<ChangeCertBtnProps> = ({ handleClose }) => {
	const dispatch = useAppDispatch()

	return (
		<button
			onClick={() => {
				dispatch(openModal({ type: 'changeCert', payload: {} }))
				handleClose()
			}}
			className="text-left text-[14px] text-purple-600 cursor-pointer"
		>
			Внести изменения
		</button>
	)
}
