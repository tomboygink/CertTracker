'use client'

import { AddCertModal } from '@/src/features'
import { useAppDispatch, useAppSelector } from '@/src/shared'
import { closeModal } from '../model'

export const ModalRoot = () => {
	const dispatch = useAppDispatch()
	const { type, payload } = useAppSelector(state => state.modal)

	let content = null

	switch (type) {
		case 'addCert':
			content = <AddCertModal />
			break

		default:
			content = null
			break
	}

	if (!type) return null

	return (
		<div className="absolute inset-0 z-[9999] w-full h-[100vh] flex items-center justify-center bg-black/50">
			<div className="relative min-w-140 px-10 py-20 rounded-2xl bg-white">
				<button
					onClick={() => dispatch(closeModal())}
					className="absolute right-4 top-4 flex items-center justify-center w-10 h-10 rounded-[50%] cursor-pointer bg-[var(--bg-color)] hover:bg-[var(--bg-color-hover)] transition-all duration-300"
				>
					<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
						<path
							fill="#fff"
							d="m12 13.4-4.9 4.9a.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275.948.948 0 0 1-.275-.7c0-.283.092-.517.275-.7l4.9-4.9-4.9-4.9a.948.948 0 0 1-.275-.7c0-.283.092-.517.275-.7a.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275l4.9 4.9 4.9-4.9a.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275a.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7L13.4 12l4.9 4.9a.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7.948.948 0 0 1-.7.275.949.949 0 0 1-.7-.275L12 13.4Z"
						/>
					</svg>
				</button>
				{content}
			</div>
		</div>
	)
}
