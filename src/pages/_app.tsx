import type { AppProps } from 'next/app'
import React from 'react'
import Theme from '../theme/theme'
import NavBar from '../components/navbar'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Theme>
			<NavBar />
			{/* <Component {...pageProps} /> */}
		</Theme>
	)
}
