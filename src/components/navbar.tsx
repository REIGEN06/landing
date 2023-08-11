import {
	AppBar,
	Box,
	Button,
	Container,
	Grid,
	InputAdornment,
	Link,
	MenuItem,
	TextField,
	Typography,
	useTheme,
} from '@mui/material'
import { Theme, styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import NavBarLogo from '../assets/icons/NavbarLogo.svg'
import MapMarkerIcon from '../assets/icons/MapMarker.svg'
import ShoppingCartIcon from '../assets/icons/ShoppingCart.svg'
import UserNavbarIcon from '../assets/icons/UserNavbar.svg'
import SearchNavbarIcon from '../assets/icons/SearchNavbar.svg'
import MenuNavbarIcon from '../assets/icons/MenuNavbar.svg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const NavBar = () => {
	const theme = useTheme()

	const categories = [
		{
			value: 0,
			label: 'Все категории',
		},
		{
			value: 1,
			label: 'Тонометры',
		},
		{
			value: 2,
			label: 'Дерматология',
		},
		{
			value: 3,
			label: 'Инфекционные болезни',
		},
		{
			value: 4,
			label: 'Кардиология',
		},
		{
			value: 5,
			label: 'Неврология',
		},
		{
			value: 6,
			label: 'Общая медицина',
		},
		{
			value: 7,
			label: 'Терапия',
		},
		{
			value: 8,
			label: 'Хирургия',
		},
	]
	const menu = [
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

	return (
		<AppBar position="sticky" sx={{ boxShadow: 'none' }}>
			<FlexibleStack
				sx={{
					borderBottom: `1px solid ${theme.palette.border.main}`,
					justifyContent: 'space-between',
				}}
			>
				<NavBarLink href="#">
					<MapMarkerIcon />
					<NavBarTypography variant="medium">Москва</NavBarTypography>
				</NavBarLink>

				<Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 3 }}>
					<NavBarLink href="#">
						<UserNavbarIcon />
						<NavBarTypography variant="medium">Профиль</NavBarTypography>
						<KeyboardArrowDownIcon />
					</NavBarLink>
					<NavBarLink href="#">
						<ShoppingCartIcon />
						<NavBarTypography variant="medium">Корзина</NavBarTypography>
						<KeyboardArrowDownIcon />
					</NavBarLink>
				</Box>
			</FlexibleStack>

			<FlexibleStack sx={{ p: '24px 80px', gap: 3 }}>
				<Link href="#">
					<NavBarLogo />
				</Link>
				<Grid container rowSpacing={1}>
					<Grid item xs={12} md={9}>
						<TextField
							fullWidth
							label="Поиск"
							variant="outlined"
							InputProps={{
								sx: {
									borderRadius: 0,
									height: '48px',
								},
								startAdornment: (
									<InputAdornment position="start">
										<SearchNavbarIcon />
									</InputAdornment>
								),
							}}
							sx={{
								backgroundColor: theme.palette.primary.dark,
							}}
						/>
					</Grid>
					<Grid item xs={12} md={3}>
						<TextField
							fullWidth
							select
							variant="outlined"
							defaultValue="0"
							InputProps={{
								sx: { borderRadius: 0, height: '48px' },
							}}
							sx={{
								backgroundColor: theme.palette.primary.dark,
							}}
						>
							{categories.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
					</Grid>
				</Grid>
				<SearchButton fullWidth variant="contained">
					Поиск
				</SearchButton>
			</FlexibleStack>

			<FlexibleStack
				sx={{
					backgroundColor: theme.palette.primary.dark,
				}}
			>
				<Grid container spacing={1}>
					{menu.map((option) => (
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
		</AppBar>
	)
}

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

const NavBarTypography = styled(Typography)({
	display: 'flex',
})

const NavBarLink = styled(Link)(({ theme }: { theme: Theme }) => ({
	display: 'flex',
	alignItems: 'center',
	textDecoration: 'none',
	gap: '8px',
	padding: '12px 8px',
	'&:hover': {
		backgroundColor: `${theme.palette.primary.dark}`,
	},
}))

const SearchButton = styled(Button)(({ theme }: { theme: Theme }) => ({
	display: 'flex',
	height: '48px',
	maxWidth: '105px',
	padding: '16px 12px',
	borderRadius: '0px',
	backgroundColor: `${theme.palette.secondary.main}`,
	'&:hover': {
		backgroundColor: `${theme.palette.secondary.dark}`,
	},
	'@media (max-width: 890px)': {
		maxWidth: '890px',
	},
}))

const NavBarButton = styled(Button)(
	({ theme, value }: { theme: Theme; value: number }) => ({
		borderRadius: '0px',
		border: !value ? `1px solid ${theme.palette.border.main}` : 'none',
		backgroundColor: !value ? theme.palette.primary.light : 'none',
	})
)

export default NavBar
