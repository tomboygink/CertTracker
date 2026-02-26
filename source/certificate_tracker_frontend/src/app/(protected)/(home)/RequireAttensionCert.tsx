'use client'

import { Cert, Status, useAllCertQuery } from '@/src/entities'
import { PAGES } from '@/src/shared'
import Link from 'next/link'
import { FC, useMemo } from 'react'
import { RequireAttensionCertItem } from './RequireAttensionCertItem'

interface RequireAttensionCertProps {
	certificates?: Cert[]
	status?: Status[]
}

export const RequireAttensionCert: FC<RequireAttensionCertProps> = ({
	certificates,
	status
}) => {
	const { data: allCertificates } = useAllCertQuery(
		{},
		{
			refetchOnMountOrArgChange: true,
			refetchOnReconnect: true,
			selectFromResult: result => ({
				...result,
				data: certificates || result.data
			})
		}
	)

	const almostExpiredAndExpired = useMemo(() => {
		if (!status) return

		return allCertificates?.filter(
			(item: Cert) =>
				item.statuscert_id === status[1].id ||
				item.statuscert_id === status[2].id
		)
	}, [allCertificates, status])

	return (
		<div className="w-full max-w-2/3 rounded-[12px] py-[26px] px-[24px] border-1 border-[#E0DFDF] shadow-md h-110">
			<div className="flex items-center justify-between w-full mb-[26px]">
				<h2 className="text-[20px] text-[#202020] font-semibold leading-[28px]">
					Требуют внимания
				</h2>
				<Link
					className="py-[6px] px-[10px] text-[14px] text-[#202020] font-medium leading-[20px]"
					href={PAGES.DOCUMENTS}
				>
					Все сертификаты →
				</Link>
			</div>
			<div className="overflow-hidden">
				{/* Контейнер с прокруткой */}
				<div className="overflow-y-scroll max-h-[300px]">
					<table className="w-full rounded-[6px] table-auto">
						<thead className="sticky top-0 px-[16px] py-[12px] bg-[#d9d9d9] h-10">
							<tr>
								<td className="text-[12px] text-[#7f7f7f] font-bold leading-[16px] uppercase w-4/10 pl-10">
									Название
								</td>
								<td className="text-[12px] text-[#7f7f7f] font-bold leading-[16px] uppercase w-2/10">
									Создан
								</td>
								<td className="text-[12px] text-[#7f7f7f] font-bold leading-[16px] uppercase w-2/10">
									Истекает
								</td>
								<td className="text-[12px] text-[#7f7f7f] font-bold leading-[16px] uppercase w-2/10">
									Статус
								</td>
							</tr>
						</thead>
						<tbody>
							{almostExpiredAndExpired?.map((item: Cert) => (
								<tr
									key={item.id}
									className="h-[71px] py-[16px] border-b-1 border-gray-200"
								>
									<RequireAttensionCertItem certificate={item} />
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}
