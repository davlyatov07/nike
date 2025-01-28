import './globals.css'
import { CartProvider } from './hooks/useCart'
// import { LanguageProvider } from './hooks/useLanguage'

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className='w-full overflow-x-hidden'>
				{/* <LanguageProvider>{children}</LanguageProvider> */}
				<CartProvider>{children}</CartProvider>
			</body>
		</html>
	)
}
