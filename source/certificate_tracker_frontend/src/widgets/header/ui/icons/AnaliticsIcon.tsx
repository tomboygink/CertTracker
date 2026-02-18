import { FC } from 'react'

interface AnaliticsIconProps {
	isActive: boolean
}

export const AnaliticsIcon: FC<AnaliticsIconProps> = ({ isActive }) => {
	return (
		<svg
			className={`w-[18px] h-[18px] ${isActive ? 'stroke-white fill-white' : 'stroke-[#7f7f7f] fill-[#7f7f7f]'}`}
			fill="none"
			viewBox="0 0 18 18"
		>
			<path
				// fill="color(display-p3 .498 .498 .498)"
				// stroke="color(display-p3 .498 .498 .498)"
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M3.656 11.25H2.531a.281.281 0 0 0-.281.281v5.063c0 .155.126.281.281.281h1.125a.281.281 0 0 0 .281-.281V11.53a.281.281 0 0 0-.28-.281ZM11.531 7.875h-1.125a.281.281 0 0 0-.281.281v8.438c0 .155.126.281.281.281h1.125a.281.281 0 0 0 .281-.281V8.156a.281.281 0 0 0-.28-.281ZM15.469 3.938h-1.125a.281.281 0 0 0-.281.28v12.376c0 .155.125.281.28.281h1.126a.281.281 0 0 0 .281-.281V4.219a.281.281 0 0 0-.281-.282ZM7.594 1.125H6.469a.281.281 0 0 0-.282.281v15.188c0 .155.126.281.282.281h1.125a.281.281 0 0 0 .281-.281V1.406a.281.281 0 0 0-.281-.281Z"
			/>
		</svg>
	)
}
