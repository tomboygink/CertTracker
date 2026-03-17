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
			<div className="w-5/10 flex items-center justify-between mb-[24px]">
				<h2 className="text-[20px] font-medium leading-[20px]">
					Информация о должностях
				</h2>
				<AddWorkPosBtn />
			</div>
			{workPos ? (
				<div className="w-1/2 h-[calc(100vh-302px)] p-[24px] mb-[16px] bg-white rounded-[12px] border-1 border-[#E0DFDF] shadow-md">
					<ul className="flex flex-col gap-[8px] h-full overflow-y-scroll no-scrollbar">
						{workPos.map((item: WorkPosition) => (
							<li
								className="w-full flex items-center justify-between py-3 border-b-1 border-gray-200"
								key={item.id}
							>
								<div>
									<span className="text-[12px] text-gray-400">
										Название должности
									</span>
									<div className="flex items-center gap-[4px]">
										<p className="text-[16px] text-[#202020] font-medium">
											{item.workpositionname}
										</p>
									</div>
								</div>
								<ChangeWorkPosBtn workPos={item} />
							</li>
						))}
					</ul>
				</div>
			) : (
				<p className="w-5/10 p-3 bg-gray-100 rounded-md">
					Нет доступных должностей
				</p>
			)}
		</div>
	)
}
