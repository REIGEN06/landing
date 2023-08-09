'use client'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material'

declare module '@mui/material/styles' {
	interface Palette {
		border: Palette['primary']
	}

	interface PaletteOptions {
		border?: PaletteOptions['primary']
	}
}

let theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#ffffff',
			dark: '#f2f4f8',
		},
		secondary: {
			main: '#458FF6',
			light: '#54c0e2',
			dark: '#5b9af2',
		},
		border: {
			main: '#c1c7cd',
		},
	},
	typography: {
		fontFamily: ['Roboto', 'Verdana', 'sans-serif'].join(','),
		body1: {
			fontWeight: 400,
		},
		body2: {
			fontWeight: 700,
		},
	},
})

theme = responsiveFontSizes(theme)

const Theme = ({ children }: React.PropsWithChildren) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
