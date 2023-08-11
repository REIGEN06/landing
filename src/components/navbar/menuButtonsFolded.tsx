import {
	Button,
	MenuItem,
	Stack,
	TextField,
	Typography,
	useTheme,
} from '@mui/material'
import { Theme, styled } from '@mui/material/styles'
import MenuNavbarIcon from '../../assets/icons/navbarIcons/MenuNavbar.svg'
import { menuNavbar } from './menuButtons'

const MenuButtons = () => {
	const theme = useTheme()

	const menuSize = 4
	return (
		<FlexibleStack>
			{menuNavbar.slice(0, menuSize).map((option) => (
				<NavBarButton key={option.value} theme={theme} value={option.value}>
					<NavBarTypography
						variant="medium"
						sx={{ alignItems: 'center', gap: 1 }}
					>
						{option.value === 0 && <MenuNavbarIcon />} {option.label}
					</NavBarTypography>
				</NavBarButton>
			))}

			<TextField
				InputProps={{ disableUnderline: true }}
				select
				variant="standard"
				defaultValue={menuSize}
			>
				{menuNavbar.slice(menuSize).map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</TextField>
		</FlexibleStack>
	)
}

export default MenuButtons

const FlexibleStack = styled(Stack)(({ theme }: { theme: Theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	gap: '8px',
	backgroundColor: theme.palette.primary.light,
	'@media (max-width: 890px)': {
		flexDirection: 'column',
		alignItems: 'center',
	},
}))

const NavBarButton = styled(Button)(
	({ theme, value }: { theme: Theme; value: number }) => ({
		borderRadius: '0px',
		border: !value ? `1px solid ${theme.palette.border.main}` : 'none',
		backgroundColor: !value ? theme.palette.primary.light : 'none',
	})
)

const NavBarTypography = styled(Typography)({
	display: 'flex',
})
