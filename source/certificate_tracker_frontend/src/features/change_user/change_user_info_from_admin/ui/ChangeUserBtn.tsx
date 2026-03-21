'use client'

import { User } from '@/src/entities'
import { FormBtn, useAppDispatch, useClickOutside } from '@/src/shared'
import { openModal } from '@/src/widgets'
import { FC, useRef, useState } from 'react'

interface ChangeUserBtnProps {
	user: User
}

export const ChangeUserBtn: FC<ChangeUserBtnProps> = ({ user }) => {
	const [open, setOpen] = useState<boolean>(false)
	const dispatch = useAppDispatch()

	const ref = useRef<HTMLDivElement | null>(null)
	useClickOutside(ref, () => setOpen(false))

	return (
		<div ref={ref} className="relative w-full">
			<button
				onClick={() => setOpen(prev => (prev = !prev))}
				className="flex items-center justify-center w-8 h-8 rounded-md bg-[var(--bg-color)] cursor-pointer hover:bg-[var(--bg-color-hover)] transition-all diration-300"
			>
				<svg className="w-5 h-5 fill-[#fff]" viewBox="0 0 24 24">
					<path d="m19.71 8.04-2.34 2.33-3.75-3.75 2.34-2.33c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41M3 17.25 13.06 7.18l3.75 3.75L6.75 21H3zM16.62 5.04l-1.54 1.54 2.34 2.34 1.54-1.54zM15.36 11 13 8.64l-9 9.02V20h2.34z" />
				</svg>
			</button>
			{open && (
				<div className="absolute top-10 z-[5] flex flex-col gap-[12px] p-[12px] min-w-[300px] bg-white border-1 border-[#E0DFDF] rounded-md shadow-md left-0 xl:left-auto xl:right-0">
					<FormBtn
						onClick={() => {
							setOpen(false)
							dispatch(
								openModal({ type: 'changeUserInfoAdmin', payload: user })
							)
						}}
						text="Редактировать информацию"
					/>
					<FormBtn
						onClick={() => {
							setOpen(false)
							dispatch(
								openModal({ type: 'changeUserPassAdmin', payload: user })
							)
						}}
						text="Редактировать пароль"
					/>
				</div>
			)}
		</div>
	)
}
