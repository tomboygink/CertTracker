import { Event, User } from '@/src/entities'
import { UpdateHistoryItem } from './UpdateHistoryItem'
import { FC } from 'react'

type HistoryProp = {
	key: string
	event: Event
	user: User
}

interface UpdateHistoryListProps {
	allInfo: HistoryProp[]
}

export const UpdateHistoryList: FC<UpdateHistoryListProps> = ({ allInfo }) => {
	return (
		<ul className="min-h-0 w-full flex-1 overflow-y-auto overscroll-contain no-scrollbar [-ms-overflow-style:auto] [scrollbar-gutter:stable]">
			{allInfo.map(item => (
				<li key={item.key}>
					<UpdateHistoryItem
						event={item.event}
						user={item.user}
						key={item.key}
					/>
				</li>
			))}
		</ul>
	)
}
