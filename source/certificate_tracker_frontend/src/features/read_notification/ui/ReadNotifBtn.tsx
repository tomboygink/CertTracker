'use client'

import { Notification, useNotifReadMutation } from '@/src/entities'
import { useAppSelector } from '@/src/shared'
import { FC } from 'react'

interface ReadNotifBtnProps {
	notification: Notification
}

export const ReadNotifBtn: FC<ReadNotifBtnProps> = ({ notification }) => {
	const [readNotif, result] = useNotifReadMutation()
	const user = useAppSelector(state => state.user.user)

	const handleReadNotif = () => {
		if (notification && user) {
			readNotif({
				notification_id: Number(notification.id),
				user_id: Number(user.id)
			})
		}
	}

	return (
		<button
			onClick={handleReadNotif}
			className="flex items-center justify-center shrink-0 w-[24px] h-[24px] bg-[var(--bg-color)] rounded-[4px]"
		>
			<svg className="fill-[#fff] w-4 h-4" viewBox="0 0 24 24">
				<path d="m9.55 15.15 8.475-8.475q.3-.3.7-.3t.7.3.3.713a.97.97 0 0 1-.3.712l-9.175 9.2q-.3.3-.7.3a.96.96 0 0 1-.7-.3L4.55 13a.93.93 0 0 1-.288-.712q.013-.412.313-.713.301-.3.713-.3t.712.3z" />
			</svg>
		</button>
	)
}
