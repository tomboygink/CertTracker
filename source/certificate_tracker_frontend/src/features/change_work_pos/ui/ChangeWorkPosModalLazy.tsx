import dynamic from 'next/dynamic'

export const ChangeWorkPosModalLazy = dynamic(
	() => import('./ChangeWorkPosModal'),
	{
		loading: () => <div>...Загрузка</div>
	}
)
