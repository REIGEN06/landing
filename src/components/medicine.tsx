import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import { Grid, Typography } from '@mui/material'
import MedicineIcon from '../icons/medicineIcons/Medicine.svg'
import StyledButton from './styledButton'

const Medicine = () => {
	return (
		<FlexibleStack>
			<Stack>
				<Title variant="bold">ДОКАЗАТЕЛЬНАЯ МЕДИЦИНА ДЛЯ ВСЕХ</Title>
				<Text>
					Мы еще очень молоды, но достаточно амбициозны и планируем каждого
					случайного гостя нашего сайта превратить в его постоянного
					пользователя.
				</Text>
				<Grid container spacing={2} rowSpacing={2}>
					<Grid item xs={12} md={4}>
						<StyledButton fullWidth>
							<Typography variant="medium" sx={{ fontSize: '20px' }}>
								Войти как врач
							</Typography>
						</StyledButton>
					</Grid>
					<Grid item xs={12} md={4}>
						<StyledButton fullWidth outlined={1}>
							<Typography variant="medium" sx={{ fontSize: '20px' }}>
								Подробнее
							</Typography>
						</StyledButton>
					</Grid>
				</Grid>
			</Stack>
			<Stack>
				<StyledMedicineIcon viewBox="0 0 586 505" />
			</Stack>
		</FlexibleStack>
	)
}

export default Medicine

const FlexibleStack = styled(Stack)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	padding: '80px',
	gap: '80px',
	backgroundColor: theme.palette.primary.dark,

	'@media (max-width: 1024px)': {
		flexDirection: 'column',
		padding: '20px',
		gap: '20px',
	},
}))

const Title = styled(Typography)({
	fontSize: '54px',
	lineHeight: '110%',

	'@media (max-width: 1024px)': {
		fontSize: '27px',
	},
})

const Text = styled(Typography)({
	fontSize: '18px',
	margin: '64px 0px 48px 0px',
})

const StyledMedicineIcon = styled(MedicineIcon)({
	width: '100%',
	height: '100%',
})
