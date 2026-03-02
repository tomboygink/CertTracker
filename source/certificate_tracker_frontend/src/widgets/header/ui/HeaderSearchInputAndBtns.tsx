'use client'

import { NotificationBtn } from '@/src/entities'
import { AddCertBtn, SearchInput } from '@/src/features'
import { useState } from 'react'

export const HeaderSearchInputAndBtns = () => {
	const [searchValue, setSearchValue] = useState<string>('')

	return (
		<div className="flex items-center justify-between w-full h-full px-[32px] py-[14px]">
			<SearchInput placeholder="Поиск по сертификатам..." />
			<div className="flex items-center gap-[16px]">
				<NotificationBtn />
				<AddCertBtn text={'+ Добавить'} />
			</div>
		</div>
	)
}
