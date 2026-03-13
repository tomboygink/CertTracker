import dynamic from 'next/dynamic'

export const ChangeCategoryCertModalLazy = dynamic(
	() => import('./ChangeCategoryCertModal'),
	{
		loading: () => <div>...Загрузка</div>
	}
)
