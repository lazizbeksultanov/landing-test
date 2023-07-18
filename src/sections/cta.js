import Image from 'next/image'
import FeaturesOne from '../../public/assets/images/featuresone.png'
import { Button } from '@/components/Button'

export const Cta = () => {
  return (
    <div className="bg-white pb-24">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-x-24 md:flex-row">
          <div className="w-full basis-1/2 md:w-auto">
            <div className="mb-8">
              <p className="mb-4 text-3xl font-semibold leading-[2.375rem] text-gray-900 md:text-5xl md:leading-[3.75rem]">
                Join 4,000+ startups growing with Untitled
              </p>
            </div>
            <div className="flex flex-col gap-y-5 pl-4 text-base font-normal leading-5 text-gray-500 md:text-lg md:leading-7">
              <div className="flex items-center gap-x-3">
                <div className="max-w-max rounded-full bg-primary-100 p-2">
                  <svg width="14" height="14" viewBox="0 0 15 13" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.9458 0.62169L4.59246 8.68336L2.3758 6.31502C1.96747 5.93002 1.3258 5.90669 0.859132 6.23336C0.404132 6.57169 0.275798 7.16669 0.555798 7.64502L3.1808 11.915C3.43746 12.3117 3.8808 12.5567 4.38246 12.5567C4.8608 12.5567 5.3158 12.3117 5.57246 11.915C5.99246 11.3667 14.0075 1.81169 14.0075 1.81169C15.0575 0.738356 13.7858 -0.206643 12.9458 0.610023V0.62169Z"
                      fill="#9E77ED"
                    />
                  </svg>
                </div>
                <p>Leverage automation to move fast</p>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="max-w-max rounded-full bg-primary-100 p-2">
                  <svg width="14" height="14" viewBox="0 0 15 13" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.9458 0.62169L4.59246 8.68336L2.3758 6.31502C1.96747 5.93002 1.3258 5.90669 0.859132 6.23336C0.404132 6.57169 0.275798 7.16669 0.555798 7.64502L3.1808 11.915C3.43746 12.3117 3.8808 12.5567 4.38246 12.5567C4.8608 12.5567 5.3158 12.3117 5.57246 11.915C5.99246 11.3667 14.0075 1.81169 14.0075 1.81169C15.0575 0.738356 13.7858 -0.206643 12.9458 0.610023V0.62169Z"
                      fill="#9E77ED"
                    />
                  </svg>
                </div>
                <p>Leverage automation to move fast</p>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="max-w-max rounded-full bg-primary-100 p-2">
                  <svg width="14" height="14" viewBox="0 0 15 13" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.9458 0.62169L4.59246 8.68336L2.3758 6.31502C1.96747 5.93002 1.3258 5.90669 0.859132 6.23336C0.404132 6.57169 0.275798 7.16669 0.555798 7.64502L3.1808 11.915C3.43746 12.3117 3.8808 12.5567 4.38246 12.5567C4.8608 12.5567 5.3158 12.3117 5.57246 11.915C5.99246 11.3667 14.0075 1.81169 14.0075 1.81169C15.0575 0.738356 13.7858 -0.206643 12.9458 0.610023V0.62169Z"
                      fill="#9E77ED"
                    />
                  </svg>
                </div>
                <p>Leverage automation to move fast</p>
              </div>
            </div>
            <div className="mt-10 flex flex-col-reverse gap-3 md:flex-row">
              <div>
                <Button variant="outline" size="md" responsivewfull={true}>
                  <p className="font-semibold leading-6">Learn more</p>
                </Button>
              </div>
              <div>
                <Button variant="solid" size="md" responsivewfull={true}>
                  <p className="font-semibold leading-6">Get started</p>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-16 w-full basis-1/2 md:mt-0 md:w-auto">
            <Image src={FeaturesOne} alt="" className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
