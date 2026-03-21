import { AddWorkPosBtn, ChangeWorkPosBtn, WorkPosition } from '@/src/entities'
import { FC } from 'react'

interface SettingWorkPosBlockProps {
	workPos: WorkPosition[]
}

export const SettingWorkPosBlock: FC<SettingWorkPosBlockProps> = ({
	workPos
}) => {
	return (
		<div className="h-10">
			<div className="w-full max-w-[830px] flex flex-col items-start gap-3 justify-between mb-[12px] sm:mb-[16px] md:mb-[24px] lg:mb-[24px] xl:mb-[24px] 2xl:mb-[24px] sm:flex-row sm:items-center md:flex-row md:items-center lg:flex-row lg:items-center xl:flex-row xl:items-center 2xl:flex-row 2xl:items-center">
				<h2 className="text-[16px] font-medium leading-[20px] sm:text-[16px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px]">
					Информация о должностях
				</h2>
				<AddWorkPosBtn />
			</div>
			{workPos ? (
				<div className="w-full max-w-[830px] h-[calc(100vh-302px)] p-[24px] mb-[16px] bg-white rounded-[12px] border-1 border-[#E0DFDF] shadow-md">
					<ul className="flex flex-col gap-[8px] h-full overflow-y-scroll no-scrollbar">
						{workPos.map((item: WorkPosition) => (
							<li
								className="w-full flex flex-row items-center justify-between py-3 border-b-1 border-gray-200 gap-[12px]"
								key={item.id}
							>
								<div className="min-w-0">
									<span className="text-[12px] text-gray-400">
										Название должности
									</span>
									<div className="flex items-center gap-[4px] min-w-0">
										<p className="text-[16px] text-[#202020] font-medium break-words whitespace-normal">
											{item.workpositionname}
										</p>
									</div>
								</div>
								<div className="flex-shrink-0">
									<ChangeWorkPosBtn workPos={item} />
								</div>
							</li>
						))}
					</ul>
				</div>
			) : (
				<p className="w-full max-w-[830px] p-3 bg-gray-100 rounded-md">
					Нет доступных должностей
				</p>
			)}
		</div>
	)
}
