'use client'

import {
	AddDeptBtn,
	ChangeDeptBtn,
	Dept,
	useAllDeptQuery
} from '@/src/entities'

export const SettingDeptBlock = () => {
	const { data: allDept } = useAllDeptQuery({})

	return (
		<div className="h-10">
			<div className="w-5/10 flex items-center justify-between mb-[24px]">
				<h2 className="text-[20px] font-medium leading-[20px]">
					Информация об отделах
				</h2>
				<AddDeptBtn />
			</div>
			<div className="w-1/2 h-[calc(100vh-302px)] p-[24px] mb-[16px] bg-white rounded-[12px] border-1 border-[#E0DFDF] shadow-md">
				{allDept?.data && (
					<ul className="flex flex-col gap-[8px] h-full overflow-y-scroll no-scrollbar">
						{allDept?.data.map((item: Dept) => (
							<li
								className="w-full flex items-center justify-between py-3 border-b-1 border-gray-200"
								key={item.id}
							>
								<div>
									<span className="text-[12px] text-gray-400">
										Название отдела
									</span>
									<div className="flex items-center gap-[4px]">
										<p className="text-[16px] text-[#202020] font-medium">
											{item.deptname}
										</p>
									</div>
								</div>
								<ChangeDeptBtn dept={item} />
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	)
}
