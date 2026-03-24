'use client'

import { AddCertBtn } from '@/src/features'
import { selectRoles, TitleAndDescrPages, useAppSelector } from '@/src/shared'

export const DocumentHeader = () => {
	const roles = useAppSelector(selectRoles)

	return (
		<div className="flex flex-col items-start gap-3 justify-between w-full mb-[24px] sm:flex-row sm:items-center sm:justify-between">
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
