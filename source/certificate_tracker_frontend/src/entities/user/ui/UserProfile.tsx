'use client'

import { LogoutBtn } from '@/src/features'
import { useAppSelector } from '@/src/shared'
import { useAllWorkPositionQuery, WorkPosition } from '@/src/entities'

export const UserProfile = () => {
	const user = useAppSelector(state => state.user.user)
	const { data: allWorkPos } = useAllWorkPositionQuery({})

	if (!allWorkPos?.data || !user) return null

	const filteredWorkPos: WorkPosition = allWorkPos?.data?.find(
		(item: WorkPosition) => item.id === user?.workposition_id
	)

	return (
		<div className="flex items-center justify-between w-[255px] p-[12px] rounded-[8px] bg-[rgba(242,242,242,0.5)]">
			<div className="flex items-center gap-[12px]">
				<picture className="block w-[40px] h-[40px] rounded-[50%] overflow-hidden border-1 border-[#e0dfdf] bg-gray-400">
					<img
						className="block w-full h-full"
						src={user?.avatar !== '' ? user?.avatar : '/avatar.jpg'}
						alt="User Avatar"
					/>
				</picture>
				<div className="flex flex-col">
					<p className="font-medium text-[14px] text-[#202020] leading-md">
						{`${user?.firstname?.at(0)?.toUpperCase()}${user?.firstname?.slice(1).toLowerCase()} ${user?.lastname.at(0)?.toUpperCase()}.`}
					</p>
					<p className="text-[12px] text-[#7f7f7f] leading-sm">
						{filteredWorkPos?.workpositionname}
					</p>
				</div>
			</div>
			<LogoutBtn />
		</div>
	)
}