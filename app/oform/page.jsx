'use client'
import Head from '../components/head'
import ContactSection from '../components/contacts'
import { useState } from 'react'
import { useCart } from '../hooks/useCart'
import Image from 'next/image'
import { input_data } from '../data/inputdata.js'
export default function OformPage() {
	const [data, setData] = useState({
		names: '',
		email: '',
		city: '',
		number: '',
		comment: '',
	})
	const [formError, setFormError] = useState(false)
	const [successMessage, setSuccessMessage] = useState(false)

	function submit(event) {
		event.preventDefault()

		for (let element of Object.entries(data)) {
			if (!element[1]) {
				setFormError(true)
				console.log(!element[1])

				setTimeout(() => {
					setFormError(false)
				}, 2000)
			} else {
				setSuccessMessage(true)
				setTimeout(() => {
					setSuccessMessage(false)
				}, 5000)
				setData({
					names: '',
					email: '',
					city: '',
					number: '',
					comment: '',
				})
			}
		}
	}
	const { cart, removeFromCart, totalPrice, clearCart } = useCart()

	return (
		<>
			<Head />
			<section>
				<div className='flex md:flex-row flex-col-reverse  md:justify-between md:px-0 md:pr-10 pt-10'>
					{formError && (
						<div className=' flex justify-center -bottom-[43%]  md:bottom-[220px] md:left-[290px] w-80	 text-white bg-red-700 absolute   border px-5 py-2 rounded-2xl '>
							<p> Заполните поле Пожалуйста!</p>
						</div>
					)}

					{successMessage && (
						<div className='  absolute backdrop-blur-2xl z-50 border md:px-40 md:py-20 py-20 h-80 px-10 bg-black/60  text-white    rounded-3xl text-center -bottom-64  md:top-1/4 md:right-44 gap-7'>
							<p className='md:text-3xl pb-5 font-bold border px-10 rounded-3xl py-5 text-red-800'>
								Ваш заказ принят!!!
							</p>
							<p className='font-thin text-xl'>
								Информация получение получение товара отправлен на почту
								*********@gmail.com
							</p>
							<p className='font-semibold text-2xl'>
								Блогодорим вас за покупку :)
							</p>
						</div>
					)}
					<div className=''>
						<form className='grid md:grid-cols-2 grid-rows-2 gap-5 max-w-screen-lg pt-10 px-5 md:px-20'>
							{input_data.map((element, index) => (
								<input
									key={index}
									type={element.type}
									placeholder={element.placeholder}
									className={`border rounded-3xl ${
										index === input_data.length - 1
											? 'py-20 px-1 md:w-[720px] text-center'
											: 'py-3 px-10'
									}`}
									onChange={event =>
										setData({ ...data, [element.key]: event.target.value })
									}
								/>
							))}
						</form>
						<div className='md:hidden flex  items-end  px-5 gap-12 pt-10	 '>
							<div className='text-2xl '>
								<p>Итого</p>
								<p className='text-nowrap font-semibold'>{totalPrice}₽</p>
							</div>
							<form className='' onSubmit={event => submit(event)}>
								{' '}
								<div className='flex flex-col  md:items-center pt-8'>
									<button
										className='bg-black text-white md:px-20 px-10 md:py-5
									rounded-xl py-6 transform transition-all hover:text-black duration-500 hover:scale-95 hover:bg-gray-500 hover:shadow-xl'
									>
										Оформить
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className='pl-5 md:pr-7 '>
						<div className=' top-8  md:-right-44 bg-white pr-1	 text-black  rounded-tl-3xl l md:w-[550px]  py-5    w-auto 	'>
							<div className='flex justify-between   border-b-2'>
								<h1 className='text-xl font-semibold'>{cart.length} товара </h1>
								<button onClick={clearCart}>Очистить</button>
							</div>
							<div className=' flex justify-between   pt-16'></div>
							<div className='md:max-h-[220px] max-h-[220px] overflow-y-auto'>
								{cart.length > 0 ? (
									cart.map(item => (
										<div key={item.id} className=' pt-4 pb-4'>
											<div className='flex justify-between gap-4 border  px-4 py-4 rounded-2xl  items-center	 bg-[#F5F5F5]'>
												<div className=' border bg-white md:w-44 md:h-32 w-72 h-20 px-5 py-5 rounded-3xl'>
													<Image
														width={100}
														height={100}
														alt={item.name}
														src={item.image}
														className='md:w-32 md:h-20   '
													/>
												</div>

												<div className='flex flex-col   gap-2 pt-5 font-bold text-nowrap '>
													<p className='text-xl font-semibold'>{item.name}</p>
													<label
														className='flex gap-2'
														htmlFor='Выберете филиал'
													>
														<p>Размеры:</p>
														<select
															className='border-slate-600 border w-12	 rounded-2xl '
															name='filials'
														>
															<option value='2'>39</option>
															<option value='1'>40</option>
															<option value='3'>41</option>
															<option value='4'>42</option>
															<option value='5'>43</option>
															<option value='6'>44</option>
															<option value='7'>45</option>
														</select>
													</label>
													<div className='flex md:gap-40 gap-20	'>
														<p>{item.price}₽</p>
														<button
															className='rounded-full px-2 py-2 hover:bg-red-700'
															onClick={() => removeFromCart(item)}
														>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																fill='none'
																viewBox='0 0 24 24'
																strokeWidth='1.5'
																stroke='currentColor'
																className='size-6'
															>
																<path
																	strokeLinecap='round'
																	strokeLinejoin='round'
																	d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
																/>
															</svg>
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
							<div className='md:flex hidden items-center md:gap-48 gap-32 pt-20	 '>
								<div className='text-2xl'>
									<p>Итого:</p>
									<p className='text-nowrap font-semibold'>{totalPrice}₽</p>
								</div>
								<form className='' onSubmit={event => submit(event)}>
									{' '}
									<div className='flex flex-col  md:items-center pt-8'>
										<button
											className='bg-black text-white md:px-12 px-5 md:py-5
									rounded-xl py-3 transform transition-all hover:text-black duration-500 hover:scale-95 hover:bg-gray-500 hover:shadow-xl'
										>
											Оформить
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ContactSection />
		</>
	)
}
