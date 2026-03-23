import { FC } from 'react'

interface HomeCertStatsItemProps {
	value: string
	bgColor: string
	title: string
	descr: string
	icon: string
}

export const HomeCertStatsItem: FC<HomeCertStatsItemProps> = ({
	value,
	bgColor,
	title,
	descr,
	icon
}) => {
	return (
		<div className="flex flex-col gap-[6px] w-full sm:gap-[6px] md:gap-[6px] lg:gap-[16px] xl:gap-[16px] 2xl:gap-[16px]">
			<div className="flex items-center gap-[12px] w-full max-w-[200px] xl:flex-col xl:items-start 2xl:flex-row 2xl:items-center">
				<div
					style={{ backgroundColor: bgColor, backgroundImage: `url(${icon})` }}
					className={`w-[32px] h-[32px] rounded-[12px] bg-center bg-no-repeat shrink-0 lg:w-[36px] lg:h-[36px] xl:w-[48px] xl:h-[48px] 2xl:w-[48px] 2xl:h-[48px]`}
				></div>
				<p className="max-w-[200px] font-medium text-[14px] text-[#202020] leading-[20px] sm:text-[14px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px]">
					{title}
				</p>
			</div>
			<div className="flex flex-col gap-[4px] sm:gap-[4px] md:gap-[4px] lg:gap-[8px] xl:gap-[8px] 2xl:gap-[8px]">
				<p className="font-bold text-[16px] text-[#202020] leading-[36px] tracking-[-0.75%] sm:text-[20px] md:text-[24px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px]">
					{value}
				</p>
				<span className="text-[12px] text-[#7f7f7f] leading-[16px]">
					{descr}
				</span>
			</div>
		</div>
	)
}
