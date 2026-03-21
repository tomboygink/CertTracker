'use client'

import { useGetAllData } from '../hooks/useGetAllData'
import { UpdateHistoryList } from './UpdateHistoryList'
import { useCreateFullData } from '../hooks/useCreateFullData'

export const UpdateHistoryContainer = () => {
	const { allEvents, allUsers } = useGetAllData()

	const fullEventsInfo = useCreateFullData(allEvents?.data, allUsers?.data)

	return (
		<div className="flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-[12px] border-1 border-[#E0DFDF] bg-white px-4 py-3 sm:px-6 sm:py-3">
			<div className="mb-2 flex w-full shrink-0 flex-col sm:mb-2 sm:gap-2 md:mb-2 md:gap-2 lg:mb-2 lg:gap-2 xl:mb-2 xl:gap-2 2xl:mb-2 2xl:gap-2">
				<h2 className="text-[12px] font-semibold leading-5 text-[#202020] sm:text-[16px] sm:leading-4 lg:text-[16px] xl:text-[16px] 2xl:text-[16px]">
					История обновлений
				</h2>
				<p className="text-xs leading-5 text-[#7f7f7f] sm:text-xs sm:leading-5 md:text-xs md:leading-5 lg:text-xs lg:leading-5 xl:text-xs xl:leading-5 2xl:text-xs 2xl:leading-5">
					Последние действия с документами в системе
				</p>
			</div>
			<UpdateHistoryList allInfo={fullEventsInfo} />
		</div>
	)
}
