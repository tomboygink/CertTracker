import { Event, User } from '@/src/entities'
import { useMemo } from 'react'

export const useCreateFullData = (allEvents: Event[], allUsers: User[]) => {
	const fullEventsInfo = useMemo(() => {
		const result = new Map<string, { event: Event; user: User }>()

		if (!allEvents && !allUsers) return []

		allEvents?.forEach((item: Event) => {
			const filteredUser: User[] = allUsers?.filter(
				(user: User) => user.id === item.user_id
			)
			result.set(item.id, { user: filteredUser?.[0], event: item })
		})

		return Array.from(result, ([key, value]) => ({ key, ...value }))
	}, [allEvents, allUsers])
	return fullEventsInfo
}
