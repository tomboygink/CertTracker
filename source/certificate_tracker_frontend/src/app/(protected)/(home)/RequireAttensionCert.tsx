'use client'

import { Cert, Status, useAllCertQuery } from '@/src/entities'
import { PAGES } from '@/src/shared'
import Link from 'next/link'
import { FC, useMemo } from 'react'
import { RequireAttensionCertItem } from './RequireAttensionCertItem'
import { RequireAttensionCertItemMobile } from './RequireAttensionCertItemMobile'

interface RequireAttensionCertProps {
	certificates?: Cert[]
	status?: Status[]
}

export const RequireAttensionCert: FC<RequireAttensionCertProps> = ({
	certificates,
	status
}) => {
	const { data: allCertificates = certificates } = useAllCertQuery(
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
		<div className="flex min-h-0 w-full min-w-0 max-h-[calc(100dvh-420px)] flex-col rounded-[12px] border-1 border-[#E0DFDF] px-4 py-5 shadow-md sm:px-6 sm:py-[26px] lg:flex-[2]">
			<div className="mb-2 flex w-full flex-col sm:mb-[26px] sm:flex-row sm:items-center sm:justify-between sm:mb-5 md:mb-5 lg:mb-5 xl:mb-5 2xl:mb-5">
				<h2 className="max-w-[300px] text-md font-semibold leading-7 text-[#202020] sm:text-md sm:leading-[28px] md:text-md lg:text-lg xl:text-lg 2xl:text-lg">
					Требуют внимания
				</h2>
				<Link
					className="w-fit py-[6px] text-[14px] font-medium leading-[20px] text-[#202020]"
					href={PAGES.DOCUMENTS}
				>
					Все сертификаты →
				</Link>
			</div>
			<div className="hidden min-h-0 min-w-0 flex-1 overflow-hidden rounded-[6px] sm:hidden md:block lg:block lg:min-h-[200px] xl:block 2xl:block">
				<div className="max-h-[min(300px,55vh)] overflow-x-auto overflow-y-auto no-scrollbar sm:max-h-[300px] lg:h-full lg:max-h-none">
					<table className="w-full min-w-[640px] table-auto">
						<thead className="sticky top-0 z-[1] h-10 bg-[#d9d9d9] px-4 py-3">
							<tr>
								<td className="py-2 w-[40%] max-w-[250px] pl-4 text-[12px] font-bold uppercase leading-4 text-[#7f7f7f] sm:pl-10">
									<span className="block max-w-[250px] whitespace-normal">
										Название
									</span>
								</td>
								<td className="py-2 w-[20%] max-w-[190px] text-[12px] font-bold uppercase leading-4 text-[#7f7f7f]">
									<span className="block max-w-[190px] whitespace-normal">
										Начало действия
									</span>
								</td>
								<td className="py-2 w-[20%] max-w-[190px] text-[12px] font-bold uppercase leading-4 text-[#7f7f7f]">
									<span className="block max-w-[190px] whitespace-normal">
										Окончание действия
									</span>
								</td>
								<td className="py-2 w-[20%] max-w-[190px] text-[12px] font-bold uppercase leading-4 text-[#7f7f7f]">
									<span className="block max-w-[190px] whitespace-normal">
										Статус
									</span>
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
			<div className="flex flex flex-col gap-2 w-full max-h-[160px] overflow-y-auto no-scrollbar rounded-[6px] sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden">
				{almostExpiredAndExpired?.map((item: Cert) => (
					<RequireAttensionCertItemMobile certificate={item} key={item.id} />
				))}
			</div>
		</div>
	)
}
