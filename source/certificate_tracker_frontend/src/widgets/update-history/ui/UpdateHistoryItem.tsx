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

	if (!user || !event) return null

	return (
		<div className="flex items-center w-full py-[8px] border-b-1 border-[#e0dfdf] sm:py-[8px] md:py-[8px] lg:py-[16px] xl:py-[16px] 2xl:py-[16px]">
			<div className="flex items-center gap-[16px] w-full min-w-0">
				<div className="flex items-center justify-center shrink-0 w-[28px] h-[28px] rounded-[50%] bg-[#dbeafe] sm:w-[28px] sm:h-[28px] md:w-[28px] md:h-[28px] lg:w-[36px] lg:h-[36px] xl:w-[36px] xl:h-[36px] 2xl:w-[36px] 2xl:h-[36px]">
					<p className="text-[10px] text-[#155dfc] font-bold leading-[16px] sm:text-[10px] md:text-[10px] lg:text-[12px] xl:text-[12px] 2xl:text-[12px]">
						{user?.firstname.charAt(0).toUpperCase() +
							user?.lastname.charAt(0).toUpperCase()}
					</p>
				</div>
				<div className="flex-1 min-w-0">
					<p className="text-[12px] text-[#202020] whitespace-normal break-all font-medium leading-[20px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px]">
						{user?.firstname.charAt(0).toUpperCase() +
							user?.firstname.slice(1).toLowerCase() +
							' ' +
							user?.lastname.charAt(0).toUpperCase() +
							'.'}
						<span className="text-[12px] text-[#202020] font-medium leading-[20px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px]">
							{' '}
							- {event?.msg}
						</span>
					</p>
					<p className="text-[10px] text-[#7f7f7f] truncate leading-[16px] sm:text-[10px] md:text-[10px] lg:text-[12px] xl:text-[12px] 2xl:text-[12px]">
						{moment(event?.datecreatemsg).format('LL')}
					</p>
				</div>
			</div>
		</div>
	)
}
