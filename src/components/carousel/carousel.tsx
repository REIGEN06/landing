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
					<SwiperSlide key={item.name} style={{ height: 'auto' }}>
						<CarouselItem item={item} />
					</SwiperSlide>
				))}
			</StyledSwiper>
		</StyledStack>
	)
}

export default Carousel

const StyledStack = styled(Stack)(({ theme }) => ({
	background: 'linear-gradient(180deg, #67C3F3 0%, #5A98F2 100%)',
	padding: '80px',

	'@media (max-width: 1024px)': {
		padding: '8px 20px',
	},
}))

const StyledSwiper = styled(Swiper)({
	width: '100%',
})
