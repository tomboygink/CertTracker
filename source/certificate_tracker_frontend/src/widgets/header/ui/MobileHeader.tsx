'use client'

import { NotificationBtn, useAllCertQuery } from '@/src/entities'
import {
	selectRoles,
	useAppSelector,
	useAppDispatch,
	useClickOutside,
	FormBtn
} from '@/src/shared'
import { AddCertBtnMobile, SearchInput, LogoutBtn } from '@/src/features'
import { NavLinksList } from './NavLinksList'
import { useState, useRef, useCallback } from 'react'
import { openModal } from '@/src/widgets/modal'

export const MobileHeader = () => {
	const roles = useAppSelector(selectRoles)
	const user = useAppSelector(state => state.user.user)
	const dispatch = useAppDispatch()
	const { data: allCert } = useAllCertQuery({})

	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isSearchOpen, setIsSearchOpen] = useState(false)
	const [isAvatarOpen, setIsAvatarOpen] = useState(false)

	const menuRef = useRef<HTMLDivElement | null>(null)
	const searchRef = useRef<HTMLDivElement | null>(null)
	const avatarRef = useRef<HTMLDivElement | null>(null)

	useClickOutside(menuRef, () => setIsMenuOpen(false))
	useClickOutside(searchRef, () => setIsSearchOpen(false))
	useClickOutside(avatarRef, () => setIsAvatarOpen(false))

	const handleSearchClick = useCallback(() => {
		setIsSearchOpen(!isSearchOpen)
		setIsMenuOpen(false)
		setIsAvatarOpen(false)
	}, [isSearchOpen])

	const handleMenuClick = useCallback(() => {
		setIsMenuOpen(!isMenuOpen)
		setIsSearchOpen(false)
		setIsAvatarOpen(false)
	}, [isMenuOpen])

	const handleNavLinkClick = useCallback(() => {
		setIsMenuOpen(false)
		setIsSearchOpen(false)
		setIsAvatarOpen(false)
	}, [setIsMenuOpen, setIsSearchOpen, setIsAvatarOpen])

	return (
		<div className="flex xl:hidden fixed top-0 left-0 w-full h-[60px] bg-white border-b-1 border-[#e0dfdf] items-center justify-between px-[16px] z-50">
			{/* Левый контейнер */}
			<div className="flex items-center gap-[16px]">
				<div ref={menuRef}>
					<button
						className="flex items-center justify-center w-[32px] h-[32px] shrink-0"
						aria-label="Меню"
						onClick={handleMenuClick}
					>
						<svg className="w-7 h-7 fill-[#202020]" viewBox="0 0 24 24">
							<path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
						</svg>
					</button>
					{isMenuOpen && (
						<div className="absolute top-[60px] left-0 w-full bg-white border-b-1 border-[#e0dfdf] shadow-md z-40 p-4 animate-in fade-in slide-in-from-top-2 duration-200">
							<NavLinksList handleNavLinkClick={handleNavLinkClick} />
						</div>
					)}
				</div>

				<div ref={searchRef}>
					<button
						className="flex items-center justify-center w-[32px] h-[32px] shrink-0"
						aria-label="Поиск"
						onClick={handleSearchClick}
					>
						<svg className="w-6 h-6 fill-[#202020]" viewBox="0 0 24 24">
							<path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
						</svg>
					</button>
					{isSearchOpen && (
						<div className="absolute top-[60px] left-0 w-full p-4 bg-white border-b-1 border-[#e0dfdf] shadow-md z-40 animate-in fade-in slide-in-from-top-2 duration-200">
							<SearchInput
								isSearchible={true}
								allCert={allCert?.data}
								placeholder="Поиск по сертификатам..."
								autoFocus
							/>
						</div>
					)}
				</div>
			</div>

			{/* Правый контейнер */}
			<div className="flex items-center gap-[12px]">
				{(roles.isAdmin || roles.isManager) && <AddCertBtnMobile />}

				<NotificationBtn />

				<div className="relative" ref={avatarRef}>
					<button
						onClick={() => {
							setIsAvatarOpen(!isAvatarOpen)
							setIsMenuOpen(false)
							setIsSearchOpen(false)
						}}
						className="block w-[36px] h-[36px] rounded-full overflow-hidden border-2 border-transparent hover:border-[#8848f9] transition-all bg-gray-400 shrink-0 cursor-pointer"
					>
						<img
							className="block w-full h-full object-cover"
							src={user && user.avatar !== '' ? user.avatar : '/avatar.jpg'}
							alt="User Avatar"
						/>
					</button>

					{isAvatarOpen && (
						<div className="absolute top-[50px] right-0 z-[50] flex flex-col gap-[12px] p-[12px] min-w-[260px] bg-white border-1 border-[#E0DFDF] rounded-md shadow-md animate-in fade-in slide-in-from-top-2 duration-200">
							<FormBtn
								onClick={() => {
									setIsAvatarOpen(false)
									dispatch(
										openModal({ type: 'changeUserInfoForUser', payload: user })
									)
								}}
								text="Редактировать информацию"
							/>
							<FormBtn
								onClick={() => {
									setIsAvatarOpen(false)
									dispatch(
										openModal({ type: 'settingUserAvatar', payload: user })
									)
								}}
								text="Изменить аватар"
							/>
							<FormBtn
								onClick={() => {
									setIsAvatarOpen(false)
									dispatch(
										openModal({ type: 'changeUserPassUser', payload: user })
									)
								}}
								text="Изменить пароль"
							/>
							<div className="flex items-center justify-between pt-1 mt-1 border-t-1 border-gray-100">
								<span className="text-[14px] font-medium text-gray-600 pl-2">
									Выйти из аккаунта
								</span>
								<LogoutBtn />
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
