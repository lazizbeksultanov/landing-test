import Notion from '../../public/assets/images/notion.png'
import Image from 'next/image'
import { Button } from '@/components/Button'

export const Integrations = () => {
  return (
    <div className="w-full bg-gray-50 py-24">
      <div className="container">
        <div className="mx-auto w-7/12">
          <p className="text-center text-base font-semibold leading-6 text-primary-700">Integrations</p>
          <p className="mt-3 text-center text-4xl font-semibold leading-[2.75rem] text-gray-900">
            Get more value from your tools
          </p>
          <p className="mt-5 text-center text-xl font-normal leading-[1.875rem] text-gray-500">
            Connect your tools, connect your teams. With over 200 apps already available in our directory, your team’s
            favourite tools are just a click away.
          </p>
        </div>
        <div className="mx-auto w-2/3">
          <div className="my-16 grid grid-cols-8 gap-8">
            <div>
              <Image src={Notion} alt="Notion" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" />
            </div>
          </div>
          <div className="mx-auto max-w-max">
            <Button variant="solid">
              <p className="font-semibold leading-6">View all integrations</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
