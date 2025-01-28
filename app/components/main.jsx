import HomeSection from './home'

import CasesSection from './cases'
import AboutweSection from './aboutwe'
import ReviewsSection from './review'
import ExpensiveSection from './expensive'
import ContactSection from './contacts'

export default function MainComponent() {
	return (
		<>
			<HomeSection />
			<div className='w-full bg-white -translate-y-28 rounded-t-3xl'>
				<div className='container mx-auto max-w-screen-xl'>
					<AboutweSection />
					<CasesSection />
					<ReviewsSection />
					<ExpensiveSection />
					<ContactSection />
				</div>
			</div>
		</>
	)
}
