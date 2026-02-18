'use client'

import { LogoutBtn } from '@/src/features'
import { useAppSelector } from '@/src/shared'

export const UserProfile = () => {
	const user = useAppSelector(state => state.user.user) // Глобальный текущий user

	return (
		<div className="flex items-center justify-between w-[255px] p-[12px] rounded-[8px] bg-[rgba(242,242,242,0.5)]">
			<div className="flex items-center gap-[12px]">
				<picture className="block w-[40px] h-[40px] rounded-[50%] border-1 border-[#e0dfdf] bg-gray-400">
					{user?.avatar ? (
						<img
							className="block w-full h-full"
							src={user?.avatar}
							alt="User Avatar"
						/>
					) : null}
				</picture>
				<div className="flex flex-col">
					<p className="font-medium text-[14px] text-[#202020] leading-md">
						{`${user?.firstname?.at(0)?.toUpperCase()}${user?.firstname?.slice(1).toLowerCase()} ${user?.lastname.at(0)?.toUpperCase()}.`}
					</p>
					{/* Пока что тут будет администратор, но потом буду прокидывать данные еще и с workPos и фильтровать по id */}
					<p className="text-[12px] text-[#7f7f7f] leading-sm">Администратор</p>
				</div>
			</div>
			{/* <button className="w-[32px] h-[32px] flex items-center justify-center cursor-pointer">
				<svg className="w-[24px] h-[24px] fill-[#7f7f7f]" viewBox="0 0 24 24">
					<path d="M5.616 20c-.46 0-.845-.154-1.153-.462-.308-.308-.462-.693-.463-1.154V5.616c0-.46.154-.845.463-1.153A1.57 1.57 0 0 1 5.616 4h5.903a.5.5 0 0 1 0 1H5.616a.591.591 0 0 0-.424.192.584.584 0 0 0-.192.424v12.769a.59.59 0 0 0 .192.423.582.582 0 0 0 .423.192h5.904a.5.5 0 0 1 0 1H5.616Zm11.206-4.821a.503.503 0 0 1-.711-.711l1.968-1.968H9.692a.5.5 0 0 1 0-1h8.387L16.11 9.531a.502.502 0 0 1 .71-.71l2.473 2.472a1 1 0 0 1 0 1.414l-2.471 2.472Z" />
				</svg>
			</button> */}
			<LogoutBtn />
		</div>
	)
}
