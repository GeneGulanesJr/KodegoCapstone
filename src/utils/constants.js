import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'products',
    url: '/products',
  },
  {
    id: 3,
    text: 'about',
    url: '/about',
  },
  {
    id: 4,
    text: 'custom build',
    url: '/custom-build',
  },
  {
    id: 5,
    text: 'contact us',
    url: '/contact-us',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Our mission is to provide quality products by answering the growing need for high-enabled computers.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'We aspire to be the best provider of desktop computers to our target clients and to give them the best service that they will never forget and that they will recommend.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'We started as an online seller or refurbished desktop computers from closed down computer shops but we then expanded to building new computers depending on what the client needs.\n',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
