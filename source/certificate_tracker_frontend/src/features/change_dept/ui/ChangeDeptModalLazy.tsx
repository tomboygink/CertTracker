import dynamic from 'next/dynamic'

export const ChangeDeptModalLazy = dynamic(() => import('./ChangeDeptModal'), {
	loading: () => <div>...Загрузка</div>
})
