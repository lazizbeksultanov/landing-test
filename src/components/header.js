'use client'

import React, { useState } from 'react'
import Logo from '../../public/assets/images/Logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/Button'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const genericHamburgerLine = `h-0.5 w-[18px] my-0.5 rounded-full bg-gray-900 transition ease transform duration-300`

  return (
    <div className="relative w-full border-b border-red-500">
      <div className="absolute z-10 w-full bg-white">
        <div className="container flex w-full items-center justify-between py-5">
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
              className="group flex h-12 w-12 flex-col items-center justify-center rounded"
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
        className={`absolute z-0 h-[calc(100vh-88px)] w-full bg-primary-400 transition-all duration-500 ${
          isOpen ? 'translate-y-[88px]' : '-translate-y-[calc(100%-84px)]'
        }`}
      >
        <p>Hello</p>
      </div>
    </div>
  )
}
