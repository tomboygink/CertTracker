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
		<ul className="flex flex-col w-full h-[calc(100%-50px)] overflow-y-scroll no-scrollbar">
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
