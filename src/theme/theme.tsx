import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material'

declare module '@mui/material/styles' {
	interface Palette {
		border: Palette['primary']
	}
	interface PaletteOptions {
		border?: PaletteOptions['primary']
	}
	interface TypographyVariants {
		regular: React.CSSProperties
		medium: React.CSSProperties
		bold: React.CSSProperties
	}
	interface TypographyVariantsOptions {
		regular: React.CSSProperties
		medium: React.CSSProperties
		bold: React.CSSProperties
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		regular: true
		medium: true
		bold: true
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
		fontFamily: 'Roboto, sans-serif',
		body1: {
			fontWeight: 400,
		},
		regular: {
			fontWeight: 400,
			fontFamily: 'Roboto, sans-serif',
			lineHeight: 1.5,
			fontSize: '1rem',
		},
		medium: {
			fontWeight: 500,
			fontFamily: 'Roboto, sans-serif',
			lineHeight: 1.5,
			fontSize: '1rem',
		},
		bold: {
			fontWeight: 700,
			fontFamily: 'Roboto, sans-serif',
			lineHeight: 1.5,
			fontSize: '1rem',
		},
	},
	components: {
		MuiTypography: {
			defaultProps: {
				variantMapping: {
					regular: 'p',
					medium: 'p',
					bold: 'p',
				},
			},
		},
	},
})

theme = responsiveFontSizes(theme)

const Theme = ({ children }: React.PropsWithChildren) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
