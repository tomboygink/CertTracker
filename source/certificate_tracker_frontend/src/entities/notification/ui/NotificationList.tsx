import { FC } from 'react'
import { Notification } from '../types/notification.types'
import { NotificationItem } from './NotificationItem'

interface NotificationListProps {
	notifications: Notification[]
}

export const NotificationList: FC<NotificationListProps> = ({
	notifications
}) => {
	return (
		<ul>
			{notifications?.map(item => (
				<li key={item.id}>
					<NotificationItem notification={item} />
				</li>
			))}
		</ul>
	)
}
