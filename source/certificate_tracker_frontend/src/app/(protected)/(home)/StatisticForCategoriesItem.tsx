import { FC } from 'react'

interface StatisticForCategoriesItemProps {
	categoryName: string
	percent: string
	bgColor: string
}

export const StatisticForCategoriesItem: FC<
	StatisticForCategoriesItemProps
> = ({ categoryName, percent, bgColor }) => {
	return (
		<div className="flex flex-col gap-1">
			<div className="flex items-center justify-between w-full">
				<p className="text-[14px] text-[#7f7f7f] leading-[20px]">
					{categoryName}
				</p>
				<span className="text-[14px] text-[#202020] font-medium leading-[20px]">
					{`${percent}%`}
				</span>
			</div>
			<div className="relative w-full h-[8px] bg-[#F1E4FB] rounded-[6px]">
				<div
					className={`absolute top-0 left-0 h-[8px] rounded-[6px]`}
					style={{ backgroundColor: bgColor, width: `${percent}%` }}
				></div>
			</div>
		</div>
	)
}
