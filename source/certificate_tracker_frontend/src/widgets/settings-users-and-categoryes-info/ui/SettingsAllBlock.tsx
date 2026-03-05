'use client'

import { FormBtn, useAppDispatch, useAppSelector } from '@/src/shared'
import { DetailedInformation } from './DetailedInformation'
import { openModal } from '../../modal'

export const SettingsAllBlock = () => {
	const user = useAppSelector(state => state.user.user)
	const dispatch = useAppDispatch()
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
			<FormBtn
				onClick={() =>
					dispatch(openModal({ type: 'changeUserInfoForUser', payload: user }))
				}
				type="button"
				text="Редактировать"
			/>
		</div>
	)
}
