import { Event, User } from '@/src/entities'
import moment from 'moment'
import { FC } from 'react'

interface UpdateHistoryItemProps {
	event: Event
	user: User
}

export const UpdateHistoryItem: FC<UpdateHistoryItemProps> = ({
	event,
	user
}) => {
	return (
		<div className="flex items-center w-full py-[16px] border-b-1 border-[#e0dfdf]">
			<div className="flex items-center gap-[16px]">
				<div>
					<p>
						{user.firstname.charAt(0).toUpperCase() +
							user.lastname.charAt(0).toUpperCase()}
					</p>
				</div>
				<div>
					<p>
						{user.firstname.charAt(0).toUpperCase() +
							user.firstname.slice(1).toLowerCase() +
							' ' +
							user.lastname.charAt(0).toUpperCase()}
						<span>{event.msg}</span>
					</p>
					<p>{moment(event.datecreatemsg).format('LL')}</p>
				</div>
			</div>
		</div>
	)
}
