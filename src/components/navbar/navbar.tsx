import { AppBar, Box, Link, Typography, useTheme } from '@mui/material'
import { Theme, styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import MapMarkerIcon from '../../assets/icons/navbarIcons/MapMarker.svg'
import ShoppingCartIcon from '../../assets/icons/navbarIcons/ShoppingCart.svg'
import UserNavbarIcon from '../../assets/icons/navbarIcons/UserNavbar.svg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import NavBarLogo from '../../assets/icons/navbarIcons/NavbarLogo.svg'
import SearchBar from './searchBar'
import MenuButtons from './menuButtons'
import { useCallback, useEffect, useState } from 'react'
import useDebounce from '@/hooks/useDebounce'
import MenuButtonsFolded from './menuButtonsFolded'

const NavBar = () => {
	const theme = useTheme()

	const [scrollY, setScrollY] = useState(0)
	const onScroll = useCallback((event: any) => {
		setScrollY(window.scrollY)
	}, [])
	const debounceScroll = useDebounce(onScroll, 300)

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

			<FlexibleStack sx={{ p: '24px 80px', gap: 3 }}>
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
	padding: '8px 80px',
	backgroundColor: theme.palette.primary.light,

	'@media (max-width: 1024px)': {
		flexDirection: 'column',
		alignItems: 'center',
		padding: '8px 40px',
	},
}))

const FlexEndBox = styled(Box)({
	display: 'flex',
	justifyContent: 'flex-end',
	gap: '24px',
})

const NavBarTypography = styled(Typography)({
	display: 'flex',
})

const NavBarLink = styled(Link)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	textDecoration: 'none',
	gap: '8px',
	padding: '12px 8px',

	'&:hover': {
		backgroundColor: `${theme.palette.primary.dark}`,
	},
}))
