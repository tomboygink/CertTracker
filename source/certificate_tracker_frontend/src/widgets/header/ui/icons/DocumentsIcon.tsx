import { FC } from 'react'

interface DocumentsIconProps {
	isActive: boolean
}

export const DocumentsIcon: FC<DocumentsIconProps> = ({ isActive }) => {
	return (
		<svg
			fill="none"
			className={`w-[18px] h-[18px] ${isActive ? 'fill-white' : 'fill-[#7f7f7f]'}`}
		>
			<path
				// fill="color(display-p3 .498 .498 .498)"
				d="M14.456 5.231 10.52 1.294a.51.51 0 0 0-.394-.169H4.5c-.619 0-1.125.506-1.125 1.125v13.5c0 .619.506 1.125 1.125 1.125h9c.619 0 1.125-.506 1.125-1.125V5.625a.51.51 0 0 0-.169-.394Zm-4.331-2.756 3.15 3.15h-3.15v-3.15ZM13.5 15.75h-9V2.25H9v3.375c0 .619.506 1.125 1.125 1.125H13.5v9Z"
			/>
			<path
				// fill="color(display-p3 .498 .498 .498)"
				d="M5.625 12.375h6.75V13.5h-6.75v-1.125Zm0-3.375h6.75v1.125h-6.75V9Z"
			/>
		</svg>
	)
}
