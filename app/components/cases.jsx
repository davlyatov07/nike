'use client'
import Image from 'next/image'
import Link from 'next/link'
import HeartButton from './heartbutton'
import run from '../assets/images/run.jpg'
import soccer from '../assets/images/soccer.jpg'
import basket from '../assets/images/basket.jpg'
import { useCart } from '../hooks/useCart'
import { shoes } from '../data/shoes'

export default function CasesSection() {
	const { addToCart, removeFromCart, cart } = useCart()

	return (
		<section id='cases' className=''>
			<div className='flex justify-between items-center px-5 pt-10'>
				<p className='text-4xl font-medium'>Новинки</p>
				<Link
					href={'/catalog'}
					className='  border-neutral-600 border rounded-3xl px-3 py-2 text-sm transform transition-all duration-500 hover:scale-95 hover:bg-gray-100 hover:shadow-xl'
				>
					Перейти
				</Link>
			</div>
			<div className='md:flex md:flex-row grid grid-cols-2 md:gap-16 gap-1 pt-10 justify-center md:px-0 px-3'>
				{shoes.slice(4, 8).map(product => {
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
			<div className='flex md:flex-row flex-col text-center gap-14 pt-10 md:pl-1 pl-7'>
				<div className=' '>
					<p className='text-3xl font-bold pb-3 md:text-left'>Для бега</p>
					<Image
						src={run}
						className='w-96 rounded-2xl transform transition-all duration-500 hover:scale-95  hover:bg-gray-100 hover:shadow-xl'
						alt='image'
					/>
				</div>
				<div className=' '>
					<p className='text-3xl font-bold text-center pb-3'>Футбол</p>
					<Image
						src={soccer}
						className='w-96 rounded-2xl transform transition-all duration-500 hover:scale-95  hover:bg-gray-100 hover:shadow-xl'
						alt='image'
					/>
				</div>
				<div className=' '>
					<p className='text-3xl font-bold md:text-right text-center pb-3'>
						Баскетбол
					</p>
					<Image
						src={basket}
						className='w-96 rounded-2xl border transform transition-all duration-500 hover:scale-95  hover:bg-gray-100 hover:shadow-xl'
						alt='image '
					/>
				</div>
			</div>
			<div className='flex justify-between items-center gap-2 pt-10 px-5'>
				<p className='text-2xl text-nowrap font-medium'>
					Для Вечерных Прогулок
				</p>
				<Link
					href={'/catalog'}
					className='  border-neutral-600 border rounded-3xl px-3 py-2 text-sm transform transition-all duration-500 hover:scale-95 hover:bg-gray-100 hover:shadow-xl'
				>
					Перейти
				</Link>
			</div>

			<div className='md:flex md:flex-row grid grid-cols-2 md:gap-16 gap-1 pt-10 justify-center md:px-0 px-3'>
				{shoes.slice(8, 12).map(product => {
					const isInCart = cart.some(item => item.id === product.id) // Проверяем для каждого товара

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
