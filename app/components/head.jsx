'use client'
import Link from 'next/link'
import { links } from '../data/links'
import { shoes } from '../data/shoes'
import { useState, useEffect } from 'react'
import { useCart } from '../hooks/useCart'
import Image from 'next/image'
import { icons } from '../util/icons'

export default function HeaderComponent() {
	const [openPop, setOpenPop] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const { cart, removeFromCart, totalPrice, clearCart } = useCart()

	const [isSearchOpen, setIsSearchOpen] = useState(false)
	const [searchQuery, setSearchQuery] = useState('')
	const [searchResults, setSearchResults] = useState([])

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
	}, [isOpen])

	function openPopover() {
		setOpenPop(!openPop)
	}

	function close() {
		setIsOpen(false)
	}

	function open() {
		setIsOpen(true)
	}

	const toggleSearch = () => {
		setIsSearchOpen(prev => !prev)
		if (isSearchOpen) {
			setSearchResults([])
			setSearchQuery('')
		}
	}

	const handleSearchChange = event => {
		const query = event.target.value
		setSearchQuery(query)

		if (query.length > 1) {
			const filteredResults = shoes.filter(item =>
				item.name.toLowerCase().includes(query.toLowerCase())
			)
			setSearchResults(filteredResults)
		} else {
			setSearchResults([])
		}
	}

	return (
		<>
			<section className='fixed bg-black/10 backdrop-blur-md top-0 z-10 w-full  flex justify-start md:pl-16 pl-3 text-black items-center pt-2'>
				<div className='md:flex md:text-lg gap-8 hidden'>
					{links.map((link, index) => (
						<Link key={index} href={link.url}>
							{link.text}
						</Link>
					))}
				</div>

				<button onClick={open} className='md:hidden pl-2 mr-auto md:mr-20'>
					{icons.burgerb}
				</button>

				{isOpen && (
					<div className='fixed top-0 left-0 w-full h-screen bg-white z-50'>
						<div className='flex	items-center pt-2'>
							<div className='pt-3 ml-auto pr-32'>{icons.vareb}</div>
							<button onClick={close} className='absolute top-6 left-7'>
								{icons.x}
							</button>
						</div>
						<nav className='flex flex-col items-start gap-3 pl-7 text-3xl mt-16'>
							{links.map((link, index) => (
								<Link
									key={index}
									href={link.url}
									className='py-2 text-black font-semibold text-3xl'
									onClick={close}
								>
									{link.text}
								</Link>
							))}
						</nav>
					</div>
				)}

				<div className='md:ml-auto  md:pr-1 '>{icons.oob}</div>
				<div className='flex items-center md:gap-3 gap-1 md:pl-96 md:pr-10 		pr-3	'>
					{icons.heartb}
					<div className='relative pt-1 md:ml-0 ml-10 sm:ml-20 md:pl-0 '>
						<button onClick={openPopover}>{icons.korb}</button>
						<div className='absolute -top-2 -right-2 bg-red-600 text-white py-px px-1 rounded-full text-xs'>
							{cart.length}
						</div>
						{openPop && (
							<div className='absolute top-8 border-b-2 md:-right-4 bg-white text-black rounded-tl-3xl rounded-b-3xl md:w-[500px] px-5 py-5 h-fit z-[1000] -right-12 w-80'>
								<div className='flex justify-between border-b pt-3'>
									<h1 className='text-black text-2xl font-semibold pb-3'>
										Корзина
									</h1>
									<button className='pb-3' onClick={openPopover}>
										{icons.x}
									</button>
								</div>
								<div className='max-h-80 overflow-y-auto'>
									{cart.length > 0 ? (
										cart.map(item => (
											<div key={item.id} className='pt-4 pb-4'>
												<div className='flex gap-5  md:gap-10 items-center border px-4 py-4 rounded-2xl bg-[#F5F5F5]'>
													<div className='border bg-white md:w-44 md:h-32 w-80 md:py-5 md:px-5 py-2 rounded-3xl'>
														<Image
															alt={item.name}
															src={item.image}
															className='md:w-32  md:h-20'
														/>
													</div>
													<div className='flex flex-col gap-2 pt-5 font-bold text-nowrap'>
														<p className='md:text-xl font-semibold'>
															{item.name}
														</p>
														<div className='flex gap-10'>
															<p className='md:text-xl'>{item.price}₽</p>
															<button
																className='transform transition-all duration-500 hover:scale-95 rounded-full hover:bg-red-700 px-1 py-1 hover:shadow-xl'
																onClick={() => removeFromCart(item)}
															>
																{icons.chum}
															</button>
														</div>
													</div>
												</div>
											</div>
										))
									) : (
										<p className='text-center text-xl pt-5 pb-5 text-black'>
											Список пуст
										</p>
									)}
								</div>
								<div className='flex items-center md:gap-48 gap-20 pt-4 border-t'>
									<div className='text-2xl'>
										<p>Итого:</p>
										<p className='text-nowrap font-semibold'>{totalPrice}₽</p>
									</div>
									<Link
										href={'/oform'}
										className='bg-black text-white md:px-10 px-5 rounded-xl py-3 transform transition-all duration-500 hover:scale-95 hover:bg-gray-100 hover:shadow-xl hover:text-black'
									>
										Оформить
									</Link>
								</div>
							</div>
						)}
					</div>

					<button
						id='search'
						onClick={toggleSearch}
						className={`p-2 rounded-full transition-all duration-300 ease-in-out ${
							isSearchOpen ? 'bg-black' : 'bg-transparent'
						}`}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke={isSearchOpen ? 'white' : 'black'}
							className='size-7'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
							/>
						</svg>
					</button>
					{isSearchOpen && (
						<div className='absolute md:right-[87px] right-14 flex items-center transition-all duration-300 ease-in-out'>
							<input
								type='search'
								value={searchQuery}
								onChange={handleSearchChange}
								placeholder='Поиск...'
								className='border border-gray-300 rounded-md py-4 px-4 md:w-[450px] w-64 focus:outline-none focus:ring-2 focus:ring-black text-black'
							/>
						</div>
					)}
					{isSearchOpen && searchQuery && (
						<div className='absolute md:right-[87px] right-14 mt-28 -top-14 h-80 z-[1000] w-64 md:w-[450px] bg-white border border-gray-300 rounded-md shadow-lg border-t-0'>
							<ul className='overflow-y-auto h-full'>
								{searchResults.length > 0 ? (
									searchResults.map(item => (
										<li
											key={item.id}
											className='p-4 border-b hover:bg-gray-100'
										>
											<Link
												href={`/tovar?id=${item.id}`}
												className='flex items-center gap-4'
											>
												<Image
													src={item.image}
													alt={item.name}
													width={80}
													height={80}
													className='rounded-md'
												/>
												<div className='text-black'>
													<p className='font-semibold'>{item.name}</p>
													<p>{item.price} ₽</p>
												</div>
											</Link>
										</li>
									))
								) : (
									<li className='p-4 text-center'>Нет результатов</li>
								)}
							</ul>
						</div>
					)}
				</div>
			</section>
		</>
	)
}
