import type { Metadata } from 'next'
import { CvPage } from './cv-page'

export const metadata: Metadata = {
  title: {
    absolute: 'Ihsan Soycelik — Product Designer',
  },
  description:
    'Product Designer with 5+ years of experience in brand, digital product, and visual communication.',
  alternates: {
    canonical: '/cv/',
  },
  openGraph: {
    title: 'Ihsan Soycelik — Product Designer',
    description:
      'Product Designer with 5+ years of experience in brand, digital product, and visual communication.',
    type: 'profile',
    url: '/cv/',
  },
  twitter: {
    card: 'summary',
    title: 'Ihsan Soycelik — Product Designer',
    description:
      'Product Designer with 5+ years of experience in brand, digital product, and visual communication.',
  },
}

export default function Page() {
  return <CvPage />
}
