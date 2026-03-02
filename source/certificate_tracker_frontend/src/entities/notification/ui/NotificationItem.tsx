import { FC } from 'react'
import { Notification } from '../types/notification.types'
import moment from 'moment'
import { ReadNotifBtn } from '@/src/features'

interface NotificationItemProps {
	notification: Notification
}

export const NotificationItem: FC<NotificationItemProps> = ({
	notification
}) => {
	return (
		<div className="flex flex-col gap-[12px] w-full p-2 border-b-1 border-[#e0dfdf]">
			<div className="flex items-center justify-between w-full">
				<p className="font-semibold text-[12px] text-red-600">
					{notification.titlenotif}
				</p>
				<p className="text-[12px]">
					{moment(notification.datecreatenotif).format('DD.MM.YYYY')}
				</p>
			</div>
			<div className="flex items-center justify-between w-full gap-[12px]">
				<p className="text-[12px]">{notification.msgnotif}</p>
				<ReadNotifBtn notification={notification} />
			</div>
		</div>
	)
}
