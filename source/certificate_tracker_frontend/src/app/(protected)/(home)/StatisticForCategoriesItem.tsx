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
				<p className="text-[12px] text-[#7f7f7f] leading-[20px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px]">
					{categoryName}
				</p>
				<span className="text-[12px] text-[#202020] font-medium leading-[20px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px] 2xl:text-[14px]">
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
