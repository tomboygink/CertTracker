'use client'

import { AddCertBtn } from '@/src/features'
import { selectRoles, TitleAndDescrPages, useAppSelector } from '@/src/shared'

export const DocumentHeader = () => {
	const roles = useAppSelector(selectRoles)

	return (
		<div className="flex items-center justify-between w-full mb-[24px]">
			<TitleAndDescrPages
				title="Реестр документов"
				descr="Управление и поиск по базе всех сертификатов компании."
			/>
			{roles.isAdmin || roles.isManager ? (
				<AddCertBtn text={'+ Добавить'} />
			) : null}
		</div>
	)
}
