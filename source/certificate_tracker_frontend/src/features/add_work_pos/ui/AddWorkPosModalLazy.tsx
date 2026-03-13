import dynamic from 'next/dynamic'

export const AddWorkPosModalLazy = dynamic(() => import('./AddWorkPosModal'), {
	loading: () => <div>...Загрузка</div>
})
