import Notion from '../../public/assets/images/notion.png'
import Image from 'next/image'
import { Button } from '@/components/Button'

export const Integrations = () => {
  return (
    <div className="w-full bg-gray-50 py-24">
      <div className="container">
        <div className="mx-auto w-full md:w-3/4 lg:w-7/12">
          <p className="text-center text-sm font-semibold leading-5 text-primary-700 md:text-base md:leading-6">
            Integrations
          </p>
          <p className="mt-3 text-center text-3xl font-semibold leading-[2.375] text-gray-900 md:text-4xl md:leading-[2.75rem]">
            Get more value from your tools
          </p>
          <p className="mt-5 text-center text-lg font-normal leading-7 text-gray-500 md:text-xl md:leading-[1.875rem]">
            Connect your tools, connect your teams. With over 200 apps already available in our directory, your team’s
            favourite tools are just a click away.
          </p>
        </div>
        <div className="mx-auto w-full md:w-5/6 lg:w-2/3">
          <div className="my-16 grid grid-cols-4 gap-8 md:grid-cols-8">
            <div>
              <Image src={Notion} alt="Notion" className="mx-auto" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" className="mx-auto" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" className="mx-auto" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" className="mx-auto" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" className="mx-auto" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" className="mx-auto" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" className="mx-auto" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" className="mx-auto" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" className="mx-auto" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" className="mx-auto" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" className="mx-auto" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" className="mx-auto" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" className="mx-auto" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" className="mx-auto" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" className="mx-auto" />
            </div>
            <div>
              <Image src={Notion} alt="Notion" className="mx-auto" />
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
