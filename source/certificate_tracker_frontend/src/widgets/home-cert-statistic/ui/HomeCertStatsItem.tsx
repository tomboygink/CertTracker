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
		<div className="flex flex-col gap-[16px] w-full">
			<div className="flex items-center justify-between w-full">
				<div
					style={{ backgroundColor: bgColor, backgroundImage: `url(${icon})` }}
					className={`w-[48px] h-[48px] rounded-[12px] bg-center bg-no-repeat`}
				></div>
				<div className="flex items-center justify-center px-[8px] py-[4px] rounded-[6px] bg-[#f0fdf4]">
					<span className="font-medium text-[14px] text-[#00a63e] leading-[20px]">
						+12
					</span>
				</div>
			</div>
			<div className="flex flex-col gap-[4px]">
				<p className="font-medium text-[14px] text-[#7f7f7f] leading-[20px]">
					{title}
				</p>
				<p className="font-bold text-[30px] text-[#202020] leading-[36px] tracking-[-0.75%]">
					{value}
				</p>
				<span className="text-[12px] text-[#7f7f7f] leading-[16px]">
					{descr}
				</span>
			</div>
		</div>
	)
}
