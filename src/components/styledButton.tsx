import { Button, styled } from '@mui/material'

type ButtonProps = {
	outlined?: number
}

const StyledButton = styled(Button)<ButtonProps>(({ theme, outlined }) => ({
	color: outlined ? theme.palette.secondary.main : theme.palette.primary.dark,

	backgroundColor: outlined
		? theme.palette.primary.dark
		: theme.palette.secondary.main,

	border: `3px solid ${theme.palette.secondary.main}`,
	borderRadius: 0,
	height: theme.spacing(7),
	padding: theme.spacing(2),
	textTransform: 'none',

	'&:hover': {
		backgroundColor: `${theme.palette.secondary.light}`,
		color: outlined ? theme.palette.primary.main : 'none',
	},
}))

export default StyledButton
