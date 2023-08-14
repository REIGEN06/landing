import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Stack, styled } from '@mui/material'
import CarouselItem from './carouselItem'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Carousel = () => {
	return (
		<StyledStack>
			<StyledSwiper
				modules={[Navigation]}
				spaceBetween={10}
				slidesPerView={2}
				navigation
				loop
			>
				<SwiperSlide>
					<CarouselItem />
				</SwiperSlide>
				<SwiperSlide>
					<CarouselItem />
				</SwiperSlide>
				<SwiperSlide>
					<CarouselItem />
				</SwiperSlide>
				<SwiperSlide>
					<CarouselItem />
				</SwiperSlide>
				<SwiperSlide>
					<CarouselItem />
				</SwiperSlide>
			</StyledSwiper>
		</StyledStack>
	)
}

export default Carousel

const StyledStack = styled(Stack)(({ theme }) => ({
	maxWidth: '1440px',
	background: 'linear-gradient(180deg, #67C3F3 0%, #5A98F2 100%)',
	padding: '80px',

	'@media (max-width: 1024px)': {
		padding: '8px 20px',
	},
}))

const StyledSwiper = styled(Swiper)({
	width: '100%',
})
