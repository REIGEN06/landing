import type { AppProps } from 'next/app'
import React from 'react'
import theme from '../theme/theme'
import { ThemeProvider } from '@mui/material'
import NavBar from '@/components/navbar/navbar'


export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}
