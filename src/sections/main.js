import { Button } from '@/components/Button'
import { PlayCircleIcon } from '@heroicons/react/24/outline'
import Laptop from '../../public/assets/images/laptop.png'
import Image from 'next/image'

export const Main = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="container">
        <div className="h-[88px] w-full" />
        <div className="mx-auto w-full pt-16 text-center  transition-all sm:pt-24 md:w-2/3">
          <p className="mb-6 text-4xl font-semibold leading-[2.75rem] tracking-tight text-gray-900 transition-all sm:text-6xl sm:leading-[4.5rem]">
            Sizning aqlli yordamchingiz
          </p>
          <p className="text-lg font-normal leading-7 text-gray-500 transition-all sm:text-xl">
            AI ovozli yordamchisi bilan veb-saytimizga xush kelibsiz! Biz bilan hayotingizni soddalashtiring. Hoziroq
            qoʻshiling!
          </p>
        </div>
        <div className="my-12 flex flex-col-reverse items-center justify-center gap-3 sm:flex-row md:gap-y-0">
          <Button variant="outline" size="lg" responsivewfull={true}>
            <div className="mx-auto flex max-w-max items-center">
              <PlayCircleIcon className="h-6 w-6 text-gray-700" />{' '}
              <span className="ml-2 font-semibold leading-7 text-gray-700">Demo</span>
            </div>
          </Button>
          <Button variant="solid" size="lg" responsivewfull={true}>
            <p className="font-semibold leading-7">Boshlash</p>
          </Button>
        </div>
        <Image src={Laptop} alt="" className="mx-auto w-full transition-all md:w-2/3" />
      </div>
    </div>
  )
}
