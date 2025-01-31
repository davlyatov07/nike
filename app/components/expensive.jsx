'use client'
import sale from '../assets/images/sale.png'
import foot from '../assets/images/foot.png'
import Image from 'next/image'
import { useCart } from '../hooks/useCart'
import { shoes } from '../data/shoes'
import HeartButton from './heartbutton'
import Link from 'next/link'

export default function ExpensiveSection() {
	const { addToCart, removeFromCart, cart } = useCart()

	return (
		<section
			id='expensive'
			className='container mx-auto overflow-hidden w-full'
		>
			<div className='flex justify-between items-center  pt-10 px-1'>
				<p className='text-4xl font-medium'>В Наличии</p>
				<Link
					href={'/catalog'}
					className='  border-neutral-600 border rounded-3xl px-3 py-2 text-sm transform transition-all duration-500 hover:scale-95 hover:bg-gray-100 hover:shadow-xl'
				>
					Перейти
				</Link>
			</div>

			<div className='md:flex md:flex-row grid grid-cols-2 md:gap-16 gap-1 pt-10 justify-center md:px-0 px-3'>
				{shoes.slice(16, 20).map(product => {
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
								<div className='md:pr-24 mr-auto'>
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
									className='w-52 h-40'
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

			<div className='flex pt-10 relative px-2'>
				<div className='absolute md:left-10 pt-10 md:pt-16 md:px-0 px-10'>
					<p className='md:text-5xl text-2xl font-semibold'>
						Продай свою пару <br /> вместе с нами
					</p>
					<p className='pt-5'>
						Реализуем позиции, которые потеряли <br /> актуальность в вашем
						гардеробе
					</p>
					<div className=' pt-10'>
						<Link
							href={'/catalog'}
							className='bg-gradient-to-r border-black from-black border rounded-xl px-10 text-white py-5 text-sm transform transition-all duration-500 hover:scale-95  hover:bg-slate-800 hover:shadow-xl'
						>
							В каталог
						</Link>
					</div>
				</div>
				<Image
					src={sale}
					className='md:w-[1285px] md:h-full h-80 object-cover md:object-contain rounded-3xl'
					alt='image'
				/>
			</div>

			<div className='flex justify-between gap-7  items-center  pt-10 px-1'>
				<p className='md:text-4xl font-medium text-nowrap'>Для Футбола</p>
				<Link
					href={'/catalog'}
					className='  border-neutral-600 border rounded-3xl px-3 py-2 text-sm transform transition-all duration-500 hover:scale-95 hover:bg-gray-100 hover:shadow-xl'
				>
					Перейти
				</Link>
			</div>
			<div className='md:flex md:flex-row grid grid-cols-2 md:gap-16 gap-1 pt-10 justify-center md:px-0 px-3'>
				{shoes.slice(20, 24).map(product => {
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
								<div className='md:pr-24 mr-auto'>
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
									className='w-40 h-40'
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
			<div className='pt-10 flex justify-center pb-10'>
				<div className='absolute md:left-44 md:pt-16 pt-10 px-10 md:px-0 text-white'>
					<p className='md:text-5xl text-3xl'>Скидка 7%</p>
					<p className='pt-5 md:text-xl'>
						Получите скидку 7% на первую покупку при подписке <br /> на наши
						эксклюзивные акции, обновления и новости
					</p>
				</div>
				<div className='absolute flex md:left-44 pt-60 md:gap-5'>
					<input
						type='email'
						className='rounded-full px-2 py-4'
						placeholder='Ваш E-mail'
					/>
					<button className='bg-white ms:px-10 rounded-full py-4 transform transition-all duration-500 hover:scale-95  hover:bg-gray-100 hover:shadow-xl'>
						Подписаться
					</button>
				</div>

				<Image
					src={foot}
					className='md:w-[1285px] md:h-full h-80 object-cover rounded-3xl px-2'
					alt='image'
				/>
			</div>
		</section>
	)
}
