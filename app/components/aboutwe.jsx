'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '../hooks/useCart'
import { shoes } from '../data/shoes'
import HeartButton from './heartbutton'

export default function AboutweSection() {
	const { addToCart, removeFromCart, cart } = useCart()

	return (
		<section id='home'>
			<div className='bg-white w-full md:h-20'></div>
			<div className='flex justify-between items-center px-1  pt-10'>
				<p className='md:text-4xl text-xl md:pl-0 pl-6 font-bold md:font-medium'>
					Самое популярное сейчас
				</p>
				<Link
					href={'/catalog'}
					className='  border-neutral-600 border rounded-3xl px-3 py-2 text-sm transform transition-all duration-500 hover:scale-95 hover:bg-gray-100 hover:shadow-xl'
				>
					Перейти
				</Link>
			</div>
			<div className='md:flex md:flex-row grid grid-cols-2 md:gap-16 gap-1 pt-10 justify-center md:px-0 px-3'>
				{shoes.slice(0, 4).map(product => {
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
							className='border md:w-60 h-fit  rounded-xl flex flex-col gap-4 pb-4 transform transition-all duration-500 hover:scale-95 hover:bg-gray-100 hover:shadow-xl'
						>
							<div className='pt-3 px-3 flex justify-center gap-1 items-center'>
								<div className='md:pr-24 mr-auto'>
									<p className='bg-black text-white w-12 py-1 px-2 text-xs rounded-lg'>
										{product.status}
									</p>
								</div>
								{/* Кнопка "Сердечко" */}
								<HeartButton
									onClick={event => {
										event.preventDefault()
										event.stopPropagation()
									}}
								/>

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
									className='w-52 h-36'
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
		</section>
	)
}
