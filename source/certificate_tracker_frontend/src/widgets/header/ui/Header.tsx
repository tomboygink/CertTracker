import { UserProfile } from '@/src/entities'
import { NavLinksList } from './NavLinksList'
import { HeaderSearchInputAndBtns } from './HeaderSearchInputAndBtns'

export const Header = () => {
	return (
		<>
			<div className="relative h-[100vh] min-w-[287px] border-r-1 border-[#e0dfdf]">
				<div className="flex items-center gap-[8px] w-full pl-[24px] py-[16px] border-b-1 border-[#e0dfdf]">
					<div className="flex items-center justify-center w-[32px] h-[32px] rounded-[8px] bg-[#8848f9]">
						<img src="./logo.svg" alt="CertTracker Logo" />
					</div>
					<p className="font-bold text-[18px] text-[#202020] leading-lg">
						CertTracker
					</p>
				</div>
				<div className="p-[16px] w-full h-auto">
					<NavLinksList />
				</div>
				<div className="absolute bottom-0 left-0 w-full p-[16px] border-t-1 border-[#e0dfdf]">
					<UserProfile />
				</div>
			</div>
			<div className="absolute top-0 right-0 w-full h-[65px] pl-[287px] border-b-1 border-[#e0dfdf]">
				<HeaderSearchInputAndBtns />
			</div>
		</>
	)
}
