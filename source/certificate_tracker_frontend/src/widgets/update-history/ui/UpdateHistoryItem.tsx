import { Event, User } from '@/src/entities'
import moment from 'moment'
import { FC } from 'react'

interface UpdateHistoryItemProps {
	event: Event
	user: User
	key: string
}

export const UpdateHistoryItem: FC<UpdateHistoryItemProps> = ({
	event,
	user
}) => {
	moment.locale('ru')

	return (
		<div className="flex items-center w-full py-[16px] border-b-1 border-[#e0dfdf]">
			<div className="flex items-center gap-[16px]">
				<div className="flex items-center justify-center w-[36px] h-[36px] rounded-[50%] bg-[#dbeafe]">
					<p className="text-[12px] text-[#155dfc] font-bold leading-[16px]">
						{user?.firstname.charAt(0).toUpperCase() +
							user?.lastname.charAt(0).toUpperCase()}
					</p>
				</div>
				<div>
					<p className="text-[14px] text-[#202020] font-medium leading-[20px]">
						{user?.firstname.charAt(0).toUpperCase() +
							user?.firstname.slice(1).toLowerCase() +
							' ' +
							user?.lastname.charAt(0).toUpperCase()}
						<span className="text-[14px] text-[#202020] font-medium leading-[20px]">
							{' '}
							- {event?.msg}
						</span>
					</p>
					<p className="text-[12px] text-[#7f7f7f] leading-[16px]">
						{moment(event?.datecreatemsg).format('LL')}
					</p>
				</div>
			</div>
		</div>
	)
}
