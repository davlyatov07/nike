import moutain from '../assets/images/mountain.png'
import Image from 'next/image'
import logo from '../assets/images/n.png'
import HeaderSection from './header'
import Link from 'next/link'

export default function HomeSection() {
	return (
		<>
			<HeaderSection />

			<section id='home' className='text-[#e0e1e3]'>
				<div className='relative w-full'>
					<Image
						src={moutain}
						className='w-full object-cover object-right md:h-full h-screen relative -top-14'
						alt='image'
					/>
					<div className='text-white md:text-6xl text-4xl absolute md:top-40 top-52 pl-8 md:pl-16 font-serif flex flex-col gap-2'>
						<h1>Качественные Кросовки </h1>
						<h1 className='text-gray-700 md:text-5xl'>По Доступной цене!</h1>
					</div>
					<div className='absolute md:top-[70%] top-[69%] left-[5%]  '>
						<Link
							href={'./catalog'}
							className='bg-white px-10 border py-5 absolute text-nowrap z-10 text-black rounded-2xl transform transition-all duration-500 hover:scale-95 hover:bg-gray-500 hover:shadow-xl'
						>
							Перейти в каталог
						</Link>
					</div>
				</div>
				<div className='md:flex absolute md:w-full w-56  md:top-64 top-[51%] left-[3%]'>
					<Image src={logo} className='' alt='image' />
				</div>
			</section>
		</>
	)
}
