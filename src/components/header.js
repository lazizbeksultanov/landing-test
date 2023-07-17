'use client'

import React, { useState } from 'react'
import Logo from '../../public/assets/images/Logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { PlayCircleIcon } from '@heroicons/react/24/outline'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const genericHamburgerLine = `h-0.5 w-[18px] my-0.5 rounded-full bg-gray-500 transition ease transform duration-300`

  return (
    <div className="relative w-full border-b border-red-500">
      <div className="absolute z-10 w-full border-b-2 border-gray-50 bg-white md:border-white">
        <div className="container flex items-center justify-between py-4 md:py-5">
          <nav className="flex items-center">
            <Link href="/" className="mr-10 flex items-center">
              <Image src={Logo} alt="" className="mr-3" />
              <p className="text-2xl font-semibold leading-7">Muxlisa</p>
            </Link>
            <div className="hidden gap-x-6 text-base font-semibold leading-6 text-gray-500 lg:flex">
              <Link href="">Bosh sahifa</Link>
              <Link href="">Servislar</Link>
              <Link href="">Resurslar</Link>
              <Link href="">Narxlar</Link>
            </div>
          </nav>
          <div className="hidden lg:inline-block">
            <Link href="/">
              <Button variant="empty">
                <p className="font-semibold leading-6">Log in</p>
              </Button>
            </Link>
            <Link href="/">
              <Button variant="solid">
                <p className="font-semibold leading-6">Sign up</p>
              </Button>
            </Link>
          </div>
          <div className="inline-block lg:hidden">
            <button
              className="group flex h-12 w-7 flex-col items-end justify-center rounded"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className={`${genericHamburgerLine} ${isOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
              <div className={`${genericHamburgerLine} ${isOpen ? 'opacity-0' : ''}`} />
              <div className={`${genericHamburgerLine} ${isOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute z-0 min-h-[calc(100vh-80px)] w-full bg-white transition-all duration-500 md:h-[calc(100vh-88px)] ${
          isOpen ? 'translate-y-[80px] md:translate-y-[88px]' : '-translate-y-full md:-translate-y-full'
        }`}
      >
        <div className="container grid grid-cols-1 gap-y-2 py-6 text-base font-semibold leading-6 text-gray-900">
          <Link href="/" className="py-3">
            Home
          </Link>
          <Link href="/" className="py-3">
            Products
          </Link>
          <Link href="/" className="py-3">
            Resources
          </Link>
          <Link href="/" className="py-3">
            Pricing
          </Link>
        </div>
        <div className="h-0.5 w-full bg-gray-50" />
        <div className="container py-6">
          <div className="mb-8 grid grid-cols-2 gap-x-6 gap-y-3 text-base font-semibold leading-6 text-gray-500">
            <Link href="">About us</Link>
            <Link href="">Support</Link>
            <Link href="">Press</Link>
            <Link href="">Contact</Link>
            <Link href="">Careers</Link>
            <Link href="">Sitemap</Link>
            <Link href="">Legal</Link>
            <Link href="">Cookie settings</Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3">
            <Button variant="solid" size="md" responsivewfull={true}>
              <p className="font-semibold leading-6">Sign up</p>
            </Button>
            <Button variant="primary" size="md" responsivewfull={true}>
              <p className="font-semibold leading-6 text-primary-700">Log in</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
