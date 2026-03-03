import { FC } from 'react'

interface DetailedInformationProps {
	label: string
	value: string
}

export const DetailedInformation: FC<DetailedInformationProps> = ({
	label,
	value
}) => {
	return (
		<div className="flex flex-col gap-[4px] px-[8px] py-[16px] border-b-1 border-gray-200">
			<span className="text-[12px] text-gray-400">{label}</span>
			<p className="text-[16px] text-[#202020] font-medium">
				{label === 'E-mail'
					? value
					: value.at(0)?.toUpperCase() + value.slice(1).toLowerCase()}
			</p>
		</div>
	)
}
