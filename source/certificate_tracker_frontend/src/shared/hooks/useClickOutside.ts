'use client'

import { RefObject, useEffect } from 'react'

export const useClickOutside = (
	ref: RefObject<HTMLElement | null>,
	callback: () => void
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent | TouchEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback()
			}
		}

		// Слушаем и мышку, и тачи на мобилках
		document.addEventListener('mousedown', handleClickOutside)
		document.addEventListener('touchstart', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			document.removeEventListener('touchstart', handleClickOutside)
		}
	}, [ref, callback])
}
