import type { AppProps } from 'next/app'
import React from 'react'
import theme from '../theme/theme'
import { ThemeProvider } from '@mui/material'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}
