'use client'

import {
	FormBtn,
	useAppDispatch,
	useAppSelector,
	useClickOutside
} from '@/src/shared'
import { DetailedInformation } from './DetailedInformation'
import { openModal } from '../../modal'
import { useRef, useState } from 'react'

export const SettingsAllBlock = () => {
	const [open, setOpen] = useState<boolean>(false)
	const user = useAppSelector(state => state.user.user)
	const dispatch = useAppDispatch()

	const divRef = useRef<HTMLDivElement | null>(null)
	useClickOutside(divRef, () => setOpen(false))

	if (!user) return null

	return (
		<div>
			<h2 className="mb-[24px] text-[20px] font-medium leading-[20px]">
				Подробная информация
			</h2>
			<div className="w-1/2 p-[24px] mb-[16px] bg-white rounded-[12px] border-1 border-[#E0DFDF] shadow-md">
				<DetailedInformation label="Имя" value={user.firstname} />
				<DetailedInformation label="Фамилия" value={user.lastname} />
				<DetailedInformation label="E-mail" value={user.email} />
			</div>
			<div ref={divRef} className="relative">
				<FormBtn
					onClick={() => setOpen(prev => (prev = !prev))}
					type="button"
					text="Редактировать"
				/>
				{open && (
					<div className="absolute top-[50px] left-0 flex flex-col gap-[8px] p-3 bg-white rounded-md border-1 border-[#E0DFDF] shadow-md">
						<FormBtn
							onClick={() => {
								setOpen(false)
								dispatch(
									openModal({ type: 'changeUserInfoForUser', payload: user })
								)
							}}
							text="Редактировать информацию"
						/>
						<FormBtn
							onClick={() => {
								setOpen(false)
								dispatch(openModal({ type: 'changeUserPassUser', payload: {} }))
							}}
							text="Редактировать пароль"
						/>
					</div>
				)}
			</div>
		</div>
	)
}
