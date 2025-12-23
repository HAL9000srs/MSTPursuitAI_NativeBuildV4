import { Pacifico, Galada, Montserrat, Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const pacifico = Pacifico({ weight: '400', subsets: ["latin"] })

export const galada = Galada({ weight: '400', subsets: ["latin"] })

export const montserrat = Montserrat({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export const inter = Inter({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export const tron = localFont({
  src: '../tron-font/Tr2n.ttf',
  display: 'swap',
})
