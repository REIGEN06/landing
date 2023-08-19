import { AppBar, Box, Link, Typography, useTheme } from '@mui/material'
import { Theme, styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import MapMarkerIcon from '../../assets/icons/navbarIcons/MapMarker.svg'
import ShoppingCartIcon from '../../assets/icons/navbarIcons/ShoppingCart.svg'
import UserNavbarIcon from '../../assets/icons/navbarIcons/UserNavbar.svg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import NavBarLogo from '../../assets/icons/navbarIcons/NavbarLogo.svg'
import SearchBar from './SearchBar'
import MenuButtons from './MenuButtons'
import { useEffect, useState } from 'react'
import useDebounce from '@/hooks/useDebounce'
import MenuButtonsFolded from './MenuButtonsFolded'

const NavBar = () => {
	const theme = useTheme()

	const [scrollY, setScrollY] = useState(0)

	const debounceScroll = useDebounce(() => setScrollY(window.scrollY), 300)

	useEffect(() => {
		window.addEventListener('scroll', debounceScroll, true)
		return () => {
			window.removeEventListener('scroll', debounceScroll, true)
		}
	}, [])

	return (
		<AppBar position="sticky" sx={{ boxShadow: 'none' }}>
			<FlexibleStack
				sx={{
					borderBottom: `1px solid ${theme.palette.border.main}`,
				}}
			>
				<NavBarLink href="#">
					<MapMarkerIcon />
					<NavBarTypography variant="medium">Москва</NavBarTypography>
				</NavBarLink>

				{scrollY !== 0 && <SearchBar />}

				<FlexEndBox>
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
				</FlexEndBox>
			</FlexibleStack>

			<FlexibleStack sx={{ p: theme.spacing(3, 10), gap: theme.spacing(3) }}>
				<Link href="#">
					<NavBarLogo />
				</Link>

				{scrollY === 0 ? <SearchBar /> : <MenuButtonsFolded />}
			</FlexibleStack>

			{scrollY === 0 && <MenuButtons />}
		</AppBar>
	)
}

export default NavBar

const FlexibleStack = styled(Stack)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: theme.spacing(1, 10),
	backgroundColor: theme.palette.primary.light,

	'@media (max-width: 1024px)': {
		flexDirection: 'column',
		padding: theme.spacing(2, 2.5),
	},
}))

const FlexEndBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'flex-end',
	gap: theme.spacing(3),
}))

const NavBarTypography = styled(Typography)({
	display: 'flex',
})

const NavBarLink = styled(Link)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	textDecoration: 'none',
	gap: theme.spacing(1),
	padding: theme.spacing(1.5, 1),

	'&:hover': {
		backgroundColor: `${theme.palette.primary.dark}`,
	},
}))
