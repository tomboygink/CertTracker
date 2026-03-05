import dynamic from 'next/dynamic'

export const ChangeUserInfoModalLazy = dynamic(
	() => import('./ChangeUserInfoModal'),
	{
		loading: () => <div>...Загрузка</div>
	}
)
