'use client'
import Head from '../components/head'
import ContactSection from '../components/contacts'
import Image from 'next/image'
import Link from 'next/link'

import { useSearchParams } from 'next/navigation'
import { getProductById, useCart } from '../hooks/useCart'

export default function TovarPage() {
	const { addToCart, removeFromCart, cart } = useCart()
	const searchParams = useSearchParams()
	const id = searchParams.get('id')

	const product = getProductById(id)

	if (!product) {
		return <p>Товар не найден.</p>
	}

	const isInCart = cart.some(item => item.id === product.id)

	const handleButtonClick = () => {
		if (isInCart) {
			removeFromCart(product)
		} else {
			addToCart(product)
		}
	}

	return (
		<>
			<Head />
			<div className='bg-white text-black'></div>
			<section className='pt-20'>
				<div className='flex md:flex-row flex-col justify-around px-10 '>
					<div className='md:w-1/3 w-auto  border rounded-3xl'>
						<Image
							src={product.image}
							alt={product.name}
							width={600}
							height={600}
						/>
					</div>
					<div className='flex flex-col gap-2 pt-28'>
						<h1 className='md:text-5xl text-2xl font-medium'>{product.name}</h1>
						<p className='md:text-3xl text-xl font-semibold'>
							{product.price} {product.currency}
						</p>
						<div className='flex gap-3 pt-5'>
							<Link
								href={'/oform'}
								className='bg-gradient-to-r border-black from-black border rounded-xl md:px-10 px-5 text-white py-5 text-sm transform transition-all duration-500 hover:scale-95 hover:bg-slate-900 hover:shadow-xl'
							>
								Быстрая покупка
							</Link>
							<button
								onClick={handleButtonClick}
								className={`${
									isInCart
										? 'bg-black text-white'
										: 'bg-transparent text-black border-black'
								} border rounded-xl px-10 py-5 text-sm transform transition-all duration-500 hover:scale-95 hover:bg-slate-900 hover:text-white hover:shadow-xl`}
							>
								{isInCart ? ' Товар  добавлен     ' : 'Добавить в корзину'}
							</button>
						</div>
					</div>
				</div>
			</section>
			<ContactSection />
		</>
	)
}
