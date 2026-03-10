import { FC } from 'react'

interface ListSearchItemInfoProps {
	label: string
	text: string
}

export const ListSearchItemInfo: FC<ListSearchItemInfoProps> = ({
	label,
	text
}) => {
	return (
		<td className="py-3">
			<div className="flex flex-col gap-[4px]">
				<span className="text-[12px] text-[#7f7f7f]">{label}</span>
				<p className="text-[14px] text-[#202020] font-medium">{text}</p>
			</div>
		</td>
	)
}
