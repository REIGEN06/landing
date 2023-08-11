import { Button, Grid, Stack, Typography, useTheme } from '@mui/material'
import { Theme, styled } from '@mui/material/styles'
import MenuNavbarIcon from '../../assets/icons/navbarIcons/MenuNavbar.svg'

export const menuNavbar = [
	{
		value: 0,
		label: 'Меню',
	},
	{
		value: 1,
		label: 'Главная',
	},
	{
		value: 2,
		label: 'О проекте',
	},
	{
		value: 3,
		label: 'Статьи',
	},
	{
		value: 4,
		label: 'Отзывы',
	},
	{
		value: 5,
		label: 'Знания',
	},
	{
		value: 6,
		label: 'Вопросы',
	},
	{
		value: 7,
		label: 'Цены',
	},
	{
		value: 8,
		label: 'Оставить заявку',
	},
	{
		value: 9,
		label: 'Спонсоры',
	},
]

const MenuButtons = () => {
	const theme = useTheme()

	return (
		<FlexibleStack
			sx={{
				backgroundColor: theme.palette.primary.dark,
			}}
		>
			<Grid container spacing={1}>
				{menuNavbar.map((option) => (
					<Grid key={option.value} item xs={12} md={2} xl={1}>
						<NavBarButton theme={theme} value={option.value}>
							<NavBarTypography
								variant="medium"
								sx={{ alignItems: 'center', gap: 1 }}
							>
								{option.value === 0 && <MenuNavbarIcon />} {option.label}
							</NavBarTypography>
						</NavBarButton>
					</Grid>
				))}
			</Grid>
		</FlexibleStack>
	)
}

export default MenuButtons

const FlexibleStack = styled(Stack)(({ theme }: { theme: Theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	padding: '8px 80px',
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
