import dynamic from 'next/dynamic'

export const AddUserModalLazy = dynamic(() => import('./AddUserModal'), {
	loading: () => <div>...Загрузка</div>
})
