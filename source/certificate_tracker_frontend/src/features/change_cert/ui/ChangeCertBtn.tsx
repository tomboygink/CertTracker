'use client'

import { useAppDispatch } from '@/src/shared'
import { openModal } from '@/src/widgets'

export const ChangeCertBtn = () => {
	const dispatch = useAppDispatch()

	return (
		<button
			onClick={() => dispatch(openModal({ type: 'changeCert', payload: {} }))}
			className="text-left text-[14px] text-purple-600 cursor-pointer"
		>
			Внести изменения
		</button>
	)
}
