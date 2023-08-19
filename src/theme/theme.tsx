import { createTheme, responsiveFontSizes } from '@mui/material'

declare module '@mui/material/styles' {
	interface Palette {
		border: Palette['primary']
		card: Palette['primary']
		subtitle: Palette['primary']
		price: Palette['primary']
		switchField: Palette['primary']
	}
	interface PaletteOptions {
		border?: PaletteOptions['primary']
		card?: PaletteOptions['primary']
		subtitle?: PaletteOptions['primary']
		price?: PaletteOptions['primary']
		switchField?: PaletteOptions['primary']
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
			light: '#67C3F3',
			dark: '#5A98F2',
		},
		border: {
			main: '#c1c7cd',
			light: '#dde1e6',
		},
		card: {
			main: '#697077',
		},
		subtitle: {
			main: '#001d6c',
		},
		price: {
			main: '#21272A',
			light: '#A2A9B0',
		},
		switchField: {
			main: '#0000003f',
		},
	},
	typography: {
		fontFamily: 'Roboto, sans-serif',
		body1: {
			fontWeight: 400,
			lineHeight: 1.4,
		},
		regular: {
			fontWeight: 400,
			fontFamily: 'Roboto, sans-serif',
			lineHeight: 1.4,
			fontSize: '1rem',
		},
		medium: {
			fontWeight: 500,
			fontFamily: 'Roboto, sans-serif',
			lineHeight: 1,
			fontSize: '1rem',
		},
		bold: {
			fontWeight: 700,
			fontFamily: 'Roboto, sans-serif',
			lineHeight: 1.1,
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

export default theme
