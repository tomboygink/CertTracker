import {
	AddCategoryCertBtn,
	CategoryCert,
	ChangeCategoryCertBtn
} from '@/src/entities'
import { FC } from 'react'

interface SettingsCategoryBlockProps {
	allCategory: CategoryCert[] | null
}

export const SettingsCategoryBlock: FC<SettingsCategoryBlockProps> = ({
	allCategory
}) => {
	if (!allCategory) return <div>...Загрузка</div>

	return (
		<div className="h-10">
			<div className="w-5/10 flex items-center justify-between mb-[24px]">
				<h2 className="text-[20px] font-medium leading-[20px]">
					Информация о категориях
				</h2>
				<AddCategoryCertBtn />
			</div>
			<div className="w-1/2 h-[calc(100vh-302px)] p-[24px] mb-[16px] bg-white rounded-[12px] border-1 border-[#E0DFDF] shadow-md">
				{allCategory && (
					<ul className="flex flex-col gap-[8px] h-full overflow-y-scroll no-scrollbar">
						{allCategory.map(item => (
							<li
								className="w-full flex items-center justify-between py-3 border-b-1 border-gray-200"
								key={item.id}
							>
								<div>
									<span className="text-[12px] text-gray-400">
										Название категории
									</span>
									<div className="flex items-center gap-[4px]">
										<p className="text-[16px] text-[#202020] font-medium">
											{item.categoryname}
										</p>
									</div>
								</div>
								<ChangeCategoryCertBtn category={item} />
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	)
}
