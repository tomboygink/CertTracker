'use client'

import { NotificationBtn, useAllCertQuery } from '@/src/entities'
import { AddCertBtn, SearchInput } from '@/src/features'
import { selectRoles, useAppSelector } from '@/src/shared'

export const HeaderSearchInputAndBtns = () => {
	const { data: allCert } = useAllCertQuery({})
	const roles = useAppSelector(selectRoles)
	return (
		<div className="flex items-center justify-between w-full h-full px-[32px] py-[14px]">
			<SearchInput
				isSearchible={true}
				allCert={allCert?.data}
				placeholder="Поиск по сертификатам..."
			/>
			<div className="flex items-center gap-[16px] shrink-0">
				<NotificationBtn />
				{roles.isAdmin || roles.isManager ? (
					<AddCertBtn text={'+ Добавить'} />
				) : null}
			</div>
		</div>
	)
}
