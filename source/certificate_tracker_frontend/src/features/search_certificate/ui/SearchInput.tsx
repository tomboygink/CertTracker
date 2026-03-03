import { FC, InputHTMLAttributes } from 'react'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const SearchInput: FC<SearchInputProps> = props => {
	return (
		<input
			className="block min-w-[300px] max-w-[560px] w-full h-[36px] pl-[36px] text-[14px] text-[#7f7f7f] border-1 border-transparent rounded-[6px] bg-[var(--bg-search-input)] bg-[url(/searchSvg.svg)] bg-no-repeat bg-[10px] shadow-[0_2px_2px_rgba(0,0,0,0.05)] hover:border-1 hover:border-[var(--bg-color)] focus:outline-[var(--bg-color)] transition-all duration-300"
			type="search"
			{...props}
		/>
	)
}
