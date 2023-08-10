import type { AppProps } from 'next/app'
import React from 'react'
import Theme from '../theme/theme'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Theme>
			<Component {...pageProps} />
		</Theme>
	)
}
