'use client'

import { useEffect, useMemo } from 'react'
import { useGetAllData } from '../hooks/useGetAllData'
import { Event, User } from '@/src/entities'
import { UpdateHistoryList } from './UpdateHistoryList'
import { useCreateFullData } from '../hooks/useCreateFullData'

export const UpdateHistoryContainer = () => {
	const { allEvents, allUsers, isLoading, isSuccess } = useGetAllData()

	const fullEventsInfo = useCreateFullData(allEvents?.data, allUsers?.data)

	return (
		<div className="w-full h-[calc(100vh-(92px+486px+73px))] px-[24px] py-[12px] bg-white border-1 border-[#E0DFDF] rounded-[12px]">
			<div className="flex flex-col gap-[8px] w-full mb-[8px]">
				<h2 className="text-[16px] text-[#202020] font-semibold leading-[16px]">
					История обновлений
				</h2>
				<p className="text-[14px] text-[#7f7f7f] leading-[20px]">
					Последние действия с документами в системе
				</p>
			</div>
			<UpdateHistoryList allInfo={fullEventsInfo} />
		</div>
	)
}
