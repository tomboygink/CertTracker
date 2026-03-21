'use client'

import {
	AddCategoryCertModalLazy,
	AddCertModalLazy,
	AddDeptModalLazy,
	AddUserModalLazy,
	AddWorkPosModalLazy,
	ChangeCategoryCertModalLazy,
	ChangeCertModalLazy,
	ChangeDeptModalLazy,
	ChangeUserInfoModalFromAdminLazy,
	ChangeUserInfoUserLazy,
	ChangeUserPassForAdminModalLazy,
	ChangeUserPassForAUserLazy,
	ChangeWorkPosModalLazy,
	SettingUserAvatarModalLazy
} from '@/src/features'
import { useAppDispatch, useAppSelector, useClickOutside } from '@/src/shared'
import { closeModal } from '../model'
import { useRef } from 'react'

export const ModalRoot = () => {
	const dispatch = useAppDispatch()
	const { type, payload } = useAppSelector(state => state.modal)

	const divRef = useRef<HTMLDivElement | null>(null)
	useClickOutside(divRef, () => dispatch(closeModal()))

	let content = null

	switch (type) {
		case 'addCert':
			content = <AddCertModalLazy />
			break

		case 'changeCert':
			content = <ChangeCertModalLazy />
			break

		case 'changeUserInfoAdmin':
			content = <ChangeUserInfoModalFromAdminLazy user={payload} />
			break

		case 'changeUserInfoForUser':
			content = <ChangeUserInfoUserLazy />
			break

		case 'addUser':
			content = <AddUserModalLazy />
			break

		case 'changeUserPassAdmin':
			content = <ChangeUserPassForAdminModalLazy user={payload} />
			break

		case 'changeUserPassUser':
			content = <ChangeUserPassForAUserLazy />
			break

		case 'settingUserAvatar':
			content = <SettingUserAvatarModalLazy />
			break

		case 'addCategory':
			content = <AddCategoryCertModalLazy />
			break

		case 'changeCategory':
			content = <ChangeCategoryCertModalLazy category={payload} />
			break

		case 'addDept':
			content = <AddDeptModalLazy />
			break

		case 'changeDept':
			content = <ChangeDeptModalLazy dept={payload} />
			break

		case 'addWorkPos':
			content = <AddWorkPosModalLazy />
			break

		case 'changeWorkPos':
			content = <ChangeWorkPosModalLazy workPos={payload} />
			break

		default:
			content = null
			break
	}

	if (!type) return null

	return (
		<div className="fixed inset-0 z-[9999] w-full h-[100dvh] flex items-center justify-center sm:bg-black/50 overflow-hidden sm:p-4">
			<div
				ref={divRef}
				className="relative w-full h-full sm:h-auto sm:min-w-[560px] sm:w-auto p-4 pt-16 sm:px-10 sm:py-20 rounded-none sm:rounded-2xl bg-white overflow-y-auto flex flex-col justify-start sm:justify-center"
			>
				<button
					onClick={() => dispatch(closeModal())}
					className="absolute right-3 top-3 sm:right-4 sm:top-4 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-[50%] cursor-pointer bg-[var(--bg-color)] hover:bg-[var(--bg-color-hover)] transition-all duration-300"
				>
					<svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24">
						<path
							fill="#fff"
							d="m12 13.4-4.9 4.9a.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275.948.948 0 0 1-.275-.7c0-.283.092-.517.275-.7l4.9-4.9-4.9-4.9a.948.948 0 0 1-.275-.7c0-.283.092-.517.275-.7a.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275l4.9 4.9 4.9-4.9a.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275a.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7L13.4 12l4.9 4.9a.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7.948.948 0 0 1-.7.275.949.949 0 0 1-.7-.275L12 13.4Z"
						/>
					</svg>
				</button>
				{content}
			</div>
		</div>
	)
}
