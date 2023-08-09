import {
	Button,
	Container,
	TextField,
	Typography,
	useTheme,
} from '@mui/material'
import styled from '@emotion/styled'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import NavBarLogo from '../assets/icons/NavbarLogo.svg'
import { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
const NavBar = () => {
	const theme = useTheme()
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	return (
		<Container disableGutters>
			<Container
				sx={{
					boxShadow: `0px 1px ${theme.palette.border.main}`,
					backgroundColor: `${theme.palette.primary.main}`,
					display: 'flex',
					p: '8px 80px',
				}}
			>
				<Typography variant="medium" sx={{ display: 'flex', gap: 1 }}>
					<LocationOnIcon />
					Москва
				</Typography>

				<Container sx={{ display: 'flex', justifyContent: 'flex-end', gap: 3 }}>
					<Typography variant="medium" sx={{ display: 'flex', gap: 1 }}>
						<AccountCircleIcon />
						Профиль
					</Typography>

					<Typography variant="medium" sx={{ display: 'flex', gap: 1 }}>
						<ShoppingCartIcon />
						Корзина
					</Typography>
				</Container>
			</Container>
			<Container disableGutters sx={{ display: 'flex', p: '24px 80px' }}>
				<NavBarLogo sx />
				<Container disableGutters sx={{ gap: 4 }}>
					<TextField label="Поиск по..." variant="outlined" />
					<Button
						variant="contained"
						id="basic-button"
						aria-controls={open ? 'basic-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
						sx={{ color: 'black' }}
					>
						Все категории
					</Button>
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							'aria-labelledby': 'basic-button',
						}}
					>
						<MenuItem onClick={handleClose}>бебра 1</MenuItem>
						<MenuItem onClick={handleClose}>бебра 2</MenuItem>
						<MenuItem onClick={handleClose}>бебра 3</MenuItem>
					</Menu>
				</Container>

				<Button variant="contained">Поиск</Button>
			</Container>
			<Container>
				<Button sx={{ color: 'black' }}>Меню</Button>
				<Button sx={{ color: 'black' }}>Главная</Button>
				<Button sx={{ color: 'black' }}>О проекте</Button>
				<Button sx={{ color: 'black' }}>Статьи</Button>
				<Button sx={{ color: 'black' }}>Отзывы</Button>
				<Button sx={{ color: 'black' }}>Знания</Button>
				<Button sx={{ color: 'black' }}>Вопросы</Button>
				<Button sx={{ color: 'black' }}>Цены</Button>
				<Button sx={{ color: 'black' }}>Оставить заявку</Button>
				<Button sx={{ color: 'black' }}>Спонсоры</Button>
			</Container>
		</Container>
	)
}

export default NavBar
