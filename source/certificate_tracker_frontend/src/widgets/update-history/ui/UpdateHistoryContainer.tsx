export const UpdateHistoryContainer = () => {
	return (
		<div className="w-full h-[calc(100vh-(92px+486px+113px))] p-[24px] bg-red-200 border-1 border-[#E0DFDF] rounded-[12px]">
			<div className="flex flex-col gap-[8px] w-full mb-[24px]">
				<h2 className="text-[16px] text-[#202020] font-semibold leading-[16px]">
					История обновлений
				</h2>
				<p className="text-[14px] text-[#7f7f7f] leading-[20px]">
					Последние действия с документами в системе
				</p>
			</div>
		</div>
	)
}
