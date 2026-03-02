'use client'

import { useRef, useState } from 'react'
import { useAllNotifQuery } from '../api/notificationApi.api'
import { useAppSelector, useClickOutside } from '@/src/shared'
import { User } from '../../user'
import { NotificationList } from './NotificationList'

export const NotificationBtn = () => {
	const [open, setOpen] = useState<boolean>(false)
	const user: User | null = useAppSelector(state => state.user.user)

	const menuRef = useRef<HTMLDivElement | null>(null)
	useClickOutside(menuRef, () => setOpen(false))

	const { data: allNotif } = useAllNotifQuery(
		{ user_id: Number(user?.id) },
		{
			refetchOnFocus: true,
			refetchOnReconnect: true,
			refetchOnMountOrArgChange: true,
			pollingInterval: 1000 * 60 * 60
		}
	)

	return (
		<div className="relative" ref={menuRef}>
			<button
				onClick={() => setOpen(prev => (prev = !prev))}
				className="relative flex items-center justify-center w-[36px] h-[36px] border-1 border-[#e0dfdf] rounded-[6px] cursor-pointer"
			>
				<svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 24 24">
					<path
						stroke="color(display-p3 .1255 .1255 .1255)"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 1 0 6 8c0 4.499-1.411 5.956-2.738 7.326Z"
					/>
				</svg>
				{allNotif?.data && allNotif?.data?.length > 0 && (
					<div className="absolute top-[-3px] right-[-3px] flex items-center justify-center w-[12px] h-[12px] rounded-[50%] bg-white border-1 border-red-300">
						<div className="w-[6px] h-[6px] rounded-[50%] bg-red-300"></div>
					</div>
				)}
			</button>
			{open && (
				<div className="absolute z-[10] top-[45] right-0 w-[350px] h-[250px] p-2 bg-white border-1 border-[#e0dfdf] rounded-[8px] shadow-md overflow-y-auto no-scrollbar">
					{allNotif?.data?.length < 0 || allNotif?.data === null ? (
						<p className="flex items-center justify-center w-full h-full text-[18px]">
							Нет уведомлений
						</p>
					) : (
						<NotificationList notifications={allNotif?.data} />
					)}
				</div>
			)}
		</div>
	)
}
