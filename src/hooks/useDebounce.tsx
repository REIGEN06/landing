import { useRef } from 'react'

const useDebounce = (func: () => void, delay: number) => {
	const ref = useRef<null | number>(null)

	return () => {
		ref.current && clearTimeout(ref.current)
		ref.current = window.setTimeout(() => func(), delay)
	}
}

export default useDebounce
