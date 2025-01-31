'use client'
import Image from 'next/image'
import Link from 'next/link'
import ups from '../assets/images/ups.png'

import Head from '../components/head'
import ContactSection from '../components/contacts'
import { useCart } from '../hooks/useCart'
import { shoes } from '../data/shoes'
import HeartButton from '../components/heartbutton'
import { useState } from 'react'
import { icons } from '../util/icons'

export default function CatalogPages() {
	// Состояния для цены и видимости мобильного фильтра
	const [price, setPrice] = useState(21999)
	const [isMobileFilterVisible, setIsMobileFilterVisible] = useState(false)

	// Обработчик изменения ползунка
	const handleRangeChange = event => {
		setPrice(Number(event.target.value))
	}

	// Обработчик изменения текстового поля
	const handleNumberChange = event => {
		setPrice(Number(event.target.value))
	}

	const { addToCart, removeFromCart, cart } = useCart()

	return (
		<section>
			<Head />
			<div className='relative md:flex hidden -top-14'>
				<h1 className='text-5xl text-white font-semibold md:pt-80  md:pl-16 pt-[640px] pl-8 bold absolute'>
					/Каталог
				</h1>
				<Image
					src={ups}
					className='w-full object-cover object-center md:flex hidden md:h-full h-screen'
					alt='image'
				/>
			</div>
			<div className='bg-white w-full md:h-24 md:flex hidden justify-center md:gap-12 gap-3 items-center absolute md:top-[55%] rounded-3xl'>
				<div className='border bg-slate-100 rounded-3xl px-2'>
					<p>#рекомедации</p>
				</div>
				<div className='border bg-slate-100 rounded-3xl px-2'>
					<p>#новинки</p>
				</div>
				<div className='border bg-slate-100 rounded-3xl px-2'>
					<p>#скидки</p>
				</div>
				<div className='border bg-slate-100 rounded-3xl px-2'>
					<p>#самоепродоваемые</p>
				</div>
				<div className='border bg-slate-100 rounded-3xl px-2'>
					<p>#популярные</p>
				</div>
				<div className='border bg-slate-100 rounded-3xl px-2'>
					<p>#гарантированые</p>
				</div>
				<div className='border bg-slate-100 rounded-3xl px-2'>
					<p>#качественные</p>
				</div>
			</div>

			{/* Фильтры для мобильной версии */}
			<div className='flex md:hidden flex-col md:pb-20 px-7	 md:pt-16 pt-10'>
				<button
					className='bg-blue-500 w-36  text-white py-2 px-4 rounded mb-4'
					onClick={() => setIsMobileFilterVisible(!isMobileFilterVisible)}
				>
					<div className='flex gap-2'>
						<p>Фильтры</p>
						{icons.filter}
					</div>
				</button>

				{isMobileFilterVisible && (
					<div className='flex flex-col gap-5 font-bold pb-10'>
						<p className='text-2xl pt-4 pb-2'>Цена</p>
						{/* Ползунок для выбора цены */}
						<input
							type='range'
							className='w-full h-5'
							min='0'
							max='50000'
							step='100'
							value={price}
							onChange={handleRangeChange}
						/>
						<div className='pt-3'>
							{/* Поле ввода для установки цены */}
							<input
								type='number'
								className='border rounded-lg py-1 w-full'
								placeholder='Цена в ₽'
								value={price}
								onChange={handleNumberChange}
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<p className='text-2xl pt-4'>Цвет</p>
							<input
								type='search'
								placeholder='Поиск цвета'
								className='border rounded-lg px-4 py-2'
							/>
						</div>
						<div className='flex items-center gap-4 font-semibold'>
							<input type='checkbox' className='w-4 h-4' />
							<div className='border w-4 h-4 bg-white rounded-full'></div>
							Белый
						</div>
						<div className='flex items-center gap-4 font-semibold'>
							<input type='checkbox' className='w-4 h-4' />
							<div className='border w-4 h-4 bg-black rounded-full'></div>
							Чёрный
						</div>
						<div className='flex items-center gap-4 font-semibold'>
							<input type='checkbox' className='w-4 h-4' />
							<div className='border w-4 h-4 bg-red-700 rounded-full'></div>
							Красный
						</div>
						<div className='flex flex-col gap-2'>
							<p className='text-2xl pt-4'>Бренд</p>
							<input
								type='search'
								placeholder='Поиск бренда'
								className='border rounded-lg px-4 py-2'
							/>
						</div>
					</div>
				)}
			</div>

			{/* Сохранили ваш десктопный фильтр */}
			<div className='flex justify-around pb-20  md:pt-0'>
				<div className='md:flex hidden flex-col font-bold'>
					<h1 className='text-6xl font-semibold'>Фильтры</h1>
					<p className='text-4xl pt-16 pb-5'>Цена</p>
					{/* Ползунок для выбора цены */}
					<input
						type='range'
						className='w-60 h-5'
						min='0'
						max='50000'
						step='100'
						value={price}
						onChange={handleRangeChange}
					/>

					<div className='pt-3'>
						{/* Поле ввода для установки цены */}
						<input
							type='number'
							className='border rounded-lg py-1 w-60'
							placeholder='Цена в ₽'
							value={price}
							onChange={handleNumberChange} // Обновление состояния при изменении поля
						/>
					</div>
					<div className='flex flex-col gap-4'>
						<p className='text-4xl pt-16'> Цвет</p>
						<input
							type='search'
							name=''
							placeholder='Поиск цвета'
							className='border w-60 rounded-lg px-4 py-1 '
							id=''
						/>
					</div>
					<div className='flex pt-5 items-center gap-4 font-semibold'>
						<input type='checkbox' className='w-4 h-4' name='' id='' />
						<div className='border w-4 h-4 bg-white rounded-full'></div>
						Белый
					</div>
					<div className='flex pt-5 items-center gap-4 font-semibold'>
						<input type='checkbox' className='w-4 h-4' name='' id='' />
						<div className='border w-4 h-4 bg-black rounded-full'></div>
						Чёрный
					</div>
					<div className='flex pt-5 items-center gap-4 font-semibold'>
						<input type='checkbox' className='w-4 h-4' name='' id='' />
						<div className='border w-4 h-4 bg-red-700 rounded-full'></div>
						Красный
					</div>
					<div className='flex flex-col gap-4'>
						<p className='text-4xl pt-16'> Бренд</p>
						<input
							type='search'
							name=''
							placeholder='  Поиск бренда'
							className='border w-60 rounded-lg px-4 py-1 '
							id=''
						/>
					</div>
					<div className=' flex flex-col pt-20 gap-10  '>
						<h1 className='text-3xl text-center'>
							История бренда <br /> Nike
						</h1>
						<p className='text-xl font-thin text-center'>
							Все началось с Безумной <br /> Идеи — мечты 24-летнего парня{' '}
							<br /> из Орегона изменить жизнь
							<br /> и оставить свой след <br />в истории. Фил Найт, <br />
							молодой выпускник Стэнфорда, <br />
							взял у отца <br /> пару сотен долларов <br /> взаймы, рискнул — и
							<br />
							совершил переворот <br /> в мире спортивной обуви.
						</p>
					</div>
					<div className=' flex flex-col gap-10 pt-28 '>
						<h1 className='text-3xl text-center'>
							Создатели бренда <br /> Nike
						</h1>
						<p className='text-xl font-thin text-center'>
							В 1957 году в Университете
							<br />
							штата Орегон. Билл Бауэрман
							<br /> — тренер по легкой <br />
							атлетике, и первокурсник <br /> Фил Найт — бегун <br /> на среднюю
							дистанцию. <br /> Двое мужчин, страстно любящих <br /> спорт,
							сразу же нашли <br /> общий язык. Билл Бауэрман <br /> воспитал
							множество <br /> олимпийских чемпионов <br /> из числа студентов
							университета, <br />
							уделяя большое внимание <br /> их всестороннему развитию, а <br />
							не только физическим <br /> тренировкам. В 1972 году <br /> его
							пригласили занять пост
							<br /> тренера олимпийской команды
							<br /> США по легкой атлетике. <br /> После смерти великого коуча
							<br />
							удостоили собственным бюстом
							<br />в Национальном зале славы.
						</p>
					</div>
				</div>
				<div className='flex flex-col'>
					<div className='md:flex md:grid-col-3 grid grid-cols-2 md:gap- gap-1 md:pt-10 justify-center md:px-0 px-3'>
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
									className='border md:w-60 h-fit w-auto rounded-xl flex flex-col gap-4 pb-4 transform transition-all duration-500 hover:scale-95 hover:bg-gray-100 hover:shadow-xl	'
								>
									<div className='pt-3 px-3 flex justify-center gap-1 items-center'>
										<div className='md:pr-24 mr-auto'>
											<p className='bg-black text-white w-12 py-1 px-2 text-xs rounded-lg'>
												{product.status}
											</p>
										</div>
										<HeartButton />
										<button
											onClick={handleButtonClick}
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
					<div className='md:flex md:grid-col-3 grid grid-cols-2 md:gap- gap-1 pt-10 justify-center md:px-0 px-3'>
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
									className='border md:w-60 h-fit w-auto rounded-xl flex flex-col gap-4 pb-4 	transform transition-all duration-500 hover:scale-95 hover:bg-gray-100 hover:shadow-xl'
								>
									<div className='pt-3 px-3 flex justify-center gap-1 items-center'>
										<div className='md:pr-24 mr-auto'>
											<p className='bg-black text-white w-12 py-1 px-2 text-xs rounded-lg'>
												{product.status}
											</p>
										</div>
										<HeartButton />
										<button
											onClick={handleButtonClick}
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
					<div className='md:flex md:grid-col-3 grid grid-cols-2 md:gap-2 gap-1 pt-5 justify-center md:px-0 px-3'>
						{shoes.slice(8, 12).map(product => {
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
									className='border md:w-60 h-fit w-auto rounded-xl flex flex-col gap-4 pb-4 transform transition-all duration-500 hover:scale-95 hover:bg-gray-100 hover:shadow-xl	'
								>
									<div className='pt-3 px-3 flex justify-center gap-1 items-center'>
										<div className='md:pr-24 mr-auto'>
											<p className='bg-black text-white w-12 py-1 px-2 text-xs rounded-lg'>
												{product.status}
											</p>
										</div>
										<HeartButton />
										<button
											onClick={handleButtonClick}
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
					<div className='md:flex md:grid-col-3 grid grid-cols-2 md:gap-2 gap-1 pt-5 justify-center md:px-0 px-3'>
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
									className='border md:w-60 h-fit w-auto rounded-xl flex flex-col gap-4 pb-4 transform transition-all duration-500 hover:scale-95 hover:bg-gray-100 hover:shadow-xl	'
								>
									<div className='pt-3 px-3 flex justify-center gap-1 items-center'>
										<div className='md:pr-24 mr-auto'>
											<p className='bg-black text-white w-12 py-1 px-2 text-xs rounded-lg'>
												{product.status}
											</p>
										</div>
										<HeartButton />
										<button
											onClick={handleButtonClick}
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
					<div className='md:flex md:grid-col-3 grid grid-cols-2 md:gap-2 gap-1 pt-5 justify-center md:px-0 px-3'>
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
									className='border md:w-60 h-fit w-auto rounded-xl flex flex-col gap-4 pb-4 transform transition-all duration-500 hover:scale-95 hover:bg-gray-100 hover:shadow-xl	'
								>
									<div className='pt-3 px-3 flex justify-center gap-1 items-center'>
										<div className='md:pr-24 mr-auto'>
											<p className='bg-black text-white w-12 py-1 px-2 text-xs rounded-lg'>
												{product.status}
											</p>
										</div>
										<HeartButton />
										<button
											onClick={handleButtonClick}
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
					<div className='md:flex md:grid-col-3 grid grid-cols-2 md:gap-2 gap-1 pt-5 justify-center md:px-0 px-3'>
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
									className='border md:w-60 h-fit w-auto rounded-xl flex flex-col gap-4 pb-4 transform transition-all duration-500 hover:scale-95 hover:bg-gray-100 hover:shadow-xl	'
								>
									<div className='pt-3 px-3 flex justify-center gap-1 items-center'>
										<div className='md:pr-24 mr-auto'>
											<p className='bg-black text-white w-12 py-1 px-2 text-xs rounded-lg'>
												{product.status}
											</p>
										</div>
										<HeartButton />
										<button
											onClick={handleButtonClick}
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
				</div>
			</div>
			<ContactSection />
		</section>
	)
}
