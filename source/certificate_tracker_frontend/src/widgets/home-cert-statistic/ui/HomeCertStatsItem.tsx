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
			<div className="flex items-center gap-[12px] w-full">
				<div
					style={{ backgroundColor: bgColor, backgroundImage: `url(${icon})` }}
					className={`w-[48px] h-[48px] rounded-[12px] bg-center bg-no-repeat`}
				></div>
				<p className="font-medium text-[20px] text-[#202020] leading-[20px]">
					{title}
				</p>
			</div>
			<div className="flex flex-col gap-[4px]">
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
