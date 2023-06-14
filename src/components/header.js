import Logo from '../../public/assets/images/Logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/Button'

export const Header = () => {
  return (
    <div className="absolute w-full">
      <div className="container flex w-full items-center justify-between py-5">
        <nav className="flex items-center">
          <Link href="/" className="mr-10 flex items-center">
            <Image src={Logo} alt="" className="mr-3" />
            <p className="text-2xl font-semibold">Muxlisa</p>
          </Link>
          <div className="flex gap-x-6  text-base font-semibold text-gray-500">
            <Link href="">Bosh sahifa</Link>
            <Link href="">Servislar</Link>
            <Link href="">Resurslar</Link>
            <Link href="">Narxlar</Link>
          </div>
        </nav>
        <div>
          <Link href="/">
            <Button variant="empty">Log in</Button>
          </Link>
          <Link href="/">
            <Button variant="solid">Sign up</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
