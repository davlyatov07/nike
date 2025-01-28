'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { icons } from '../util/icons'
import Image from 'next/image'
import Link from 'next/link'
import jz from '../assets/images/22.png'
import fz from '../assets/images/23.png'
import zz from '../assets/images/24.png'
import girl from '../assets/images/girl.png'
import HeartButton from './HeartButton'
import { useCart } from '../hooks/useCart'
import { shoes } from '../data/shoes'

export default function ReviewSection() {
	const { addToCart, removeFromCart, cart } = useCart()

	return (
		<section id='review' className=''>
			<div className='flex flex-col gap-5 items-center justify-center pt-10'>
				<h1 className='text-3xl font-semibold'>Взгляните на</h1>
			</div>
			<div className='flex items-center justify-center gap-5 pt-5'>
				<button className='swiper-button-prev'>{icons.l}</button>
				{icons.text}
				<button className='swiper-button-next'>{icons.r}</button>
			</div>

			<div className='pt-16 pl-7'>
				<Swiper
					spaceBetween={20}
					slidesPerView={1}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}}
					pagination={{ clickable: true }}
					modules={[Navigation, Pagination]}
					breakpoints={{
						768: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
					}}
				>
					<SwiperSlide>
						<Image src={jz} alt='image' className='rounded-lg' />
					</SwiperSlide>
					<SwiperSlide>
						<Image src={fz} alt='image' className='rounded-lg' />
					</SwiperSlide>
					<SwiperSlide>
						<Image src={zz} alt='image' className='rounded-lg' />
					</SwiperSlide>
				</Swiper>
			</div>

			<div className='flex justify-between  md:px-5 pt-10 px-5 items-center'>
				<p className='md:text-4xl text-xl font-bold md:font-medium'>
					Подберём пару по бюджету
				</p>
				<Link
					href={'/catalog'}
					className='bg-gradient-to-l from-black border rounded-xl px-10 text-white py-5 text-sm transform transition-all duration-500 hover:scale-95 hover:bg-gray-100 hover:shadow-xl'
				>
					Подобрать
				</Link>
			</div>
			<div className='md:flex md:flex-row grid grid-cols-2 md:gap-16 gap-1 pt-10 justify-center md:px-0 px-3'>
				{shoes.slice(12, 16).map(product => {
					const isInCart = cart.some(item => item.id === product.id)
					const handleButtonClick = () => {
						if (isInCart) {
							removeFromCart(product)
						} else {
							addToCart(product)
						}
					}

					return (
						<Link
							href={{
								pathname: '/tovar',
								query: { id: product.id },
							}}
							key={product.id}
							className='border md:w-60 h-fit  rounded-xl flex flex-col gap-4 pb-4 transform transition-all duration-500 hover:scale-95  hover:bg-gray-100 hover:shadow-xl'
						>
							<div className='pt-3 px-3 flex justify-center gap-1 items-center'>
								<div className='md:pr-24 pr-16'>
									<p className='bg-black text-white w-12 py-1 px-2 text-xs rounded-lg'>
										{product.status}
									</p>
								</div>
								<HeartButton />
								<button
									onClick={event => {
										event.preventDefault()
										event.stopPropagation()
										handleButtonClick()
									}}
									style={{
										backgroundColor: isInCart ? 'black' : 'transparent',
										color: isInCart ? 'white' : 'black',
										padding: '7px',
										borderRadius: '50px',
										cursor: 'pointer',
									}}
								>
									<svg
										height='24'
										width='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M8.50033 19.6667C8.96056 19.6667 9.33366 19.2936 9.33366 18.8333C9.33366 18.3731 8.96056 18 8.50033 18C8.04009 18 7.66699 18.3731 7.66699 18.8333C7.66699 19.2936 8.04009 19.6667 8.50033 19.6667Z'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										></path>
										<path
											d='M18.4993 19.6667C18.9596 19.6667 19.3327 19.2936 19.3327 18.8333C19.3327 18.3731 18.9596 18 18.4993 18C18.0391 18 17.666 18.3731 17.666 18.8333C17.666 19.2936 18.0391 19.6667 18.4993 19.6667Z'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										></path>
										<path
											d='M1 1H4.63636L7.07273 12.9019C7.15586 13.3112 7.38355 13.6788 7.71595 13.9404C8.04835 14.202 8.46427 14.341 8.89091 14.333H17.7273C18.1539 14.341 18.5698 14.202 18.9022 13.9404C19.2346 13.6788 19.4623 13.3112 19.5455 12.9019L21 5.44434H5.54545'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										></path>
									</svg>
								</button>
							</div>
							<div className='flex justify-center'>
								<Image
									src={product.image}
									width={160}
									height={160}
									alt='image'
								/>
							</div>
							<div className='text-center flex flex-col'>
								<p>{product.name}</p>
								<p className='font-bold pt-2'>
									{product.price}
									{product.currency}
								</p>
							</div>
						</Link>
					)
				})}
			</div>
			<div className='flex md:flex-row flex-col md:justify-center pt-28 text-white transform transition-all duration-500 hover:scale-95  hover:bg-gray-100 hover:shadow-xl'>
				<div className='flex md:gap-80 gap-40 flex-col  absolute justify-start pt-10 left-16'>
					<h1 className='text-xl'>спецпредложения</h1>
					<h1 className='text-5xl font-semibold'>Гарантия лучшей цены</h1>
				</div>
				<Image
					src={girl}
					className='w-[1255px] md:h-full h-96 object-cover md:rounded-none rounded-3xl'
					alt='image'
				/>
			</div>
		</section>
	)
}
