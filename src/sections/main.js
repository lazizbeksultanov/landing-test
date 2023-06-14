import { Button } from '@/components/Button'
import { PlayCircleIcon } from '@heroicons/react/24/outline'
import TtsImg from '../../public/assets/images/tts-img.jpeg'
import Image from 'next/image'

export const Main = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="container w-full">
        <div className="mx-auto w-2/3 text-center">
          <p className="mb-6 pt-44 text-6xl font-semibold text-gray-900">Sizning aqlli yordamchingiz</p>
          <p className="text-xl font-normal text-gray-500">
            AI ovozli yordamchisi bilan veb-saytimizga xush kelibsiz! Biz bilan hayotingizni soddalashtiring. Hoziroq
            qoʻshiling!
          </p>
        </div>
        <div className="my-12 flex items-center justify-center gap-x-3">
          <Button variant="outline" size="lg">
            <div className="flex items-center">
              <PlayCircleIcon className="h-5 w-5 text-gray-700 " />{' '}
              <span className="ml-3.5 font-semibold text-gray-700">Demo</span>
            </div>
          </Button>
          <Button variant="solid" size="lg">
            Boshlash
          </Button>
        </div>
        <Image src={TtsImg} alt="" className="mx-auto w-2/3" />
      </div>
    </div>
  )
}
