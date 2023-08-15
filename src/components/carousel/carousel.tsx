import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Stack, styled } from '@mui/material'
import CarouselItem from './carouselItem'
import { carouselArray, carouselItem } from './carouselArray'

import 'swiper/css'
import 'swiper/css/navigation'

const Carousel = () => {
	return (
		<StyledStack>
			<StyledSwiper
				modules={[Navigation]}
				spaceBetween={0}
				slidesPerView={1}
				navigation
				loop
				breakpoints={{
					768: {
						slidesPerView: 2,
					},
				}}
			>
				{carouselArray.map((item: carouselItem) => (
					<StyledSlide key={item.name}>
						<CarouselItem {...item} />
					</StyledSlide>
				))}
			</StyledSwiper>
		</StyledStack>
	)
}

export default Carousel

const StyledStack = styled(Stack)(({ theme }) => ({
	background: `linear-gradient(180deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.dark} 100%)`,
	padding: '80px',

	'@media (max-width: 1024px)': {
		padding: '8px 20px',
	},
}))

const StyledSwiper = styled(Swiper)({
	width: '100%',
})

const StyledSlide = styled(SwiperSlide)({
	'&.swiper-slide': {
		height: 'auto',
	},
})
