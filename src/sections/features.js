import Image from 'next/image'
import FeaturesOne from '../../public/assets/images/featuresone.png'
import { EnvelopeIcon, BoltIcon } from '@heroicons/react/24/outline'

export const Features = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="container">
        <div className="mx-auto w-7/12">
          <p className="text-center text-base font-semibold leading-6 text-primary-700">Imkoniyatlarimiz</p>
          <p className="mt-3 text-center text-4xl font-semibold leading-[2.75rem] tracking-tight text-gray-900">
            Analytics that feels like it’s from the future
          </p>
          <p className="mt-5 text-center text-xl font-normal leading-[1.875rem] text-gray-500">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
            Trusted by over 4,000 startups.
          </p>
        </div>
        <div className="flex flex-col gap-y-24 pt-24">
          <div className="flex items-center justify-between gap-x-24">
            <div className="basis-1/2">
              <div className="mb-6 max-w-max rounded-full bg-primary-50 p-2">
                <div className="max-w-max rounded-full bg-primary-100 p-2">
                  <EnvelopeIcon className="w-5 text-primary-600" />
                </div>
              </div>
              <div className="mb-8">
                <p className="mb-4 text-3xl font-semibold leading-[2.375rem] text-gray-900">Share team inboxes</p>
                <p className="text-lg font-normal leading-7 text-gray-500">
                  Whether you have a team of 2 or 200, our shared team inboxes <br /> keep everyone on the same page and
                  in the loop.
                </p>
              </div>
              <div className="flex flex-col gap-y-5 pl-4 text-lg font-normal leading-7 text-gray-500">
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
            </div>
            <div className="basis-1/2">
              <Image src={FeaturesOne} alt="" className="h-full w-full" />
            </div>
          </div>
          <div className="flex flex-row-reverse items-center justify-between gap-x-24">
            <div className="basis-1/2">
              <div className="mb-6 max-w-max rounded-full bg-primary-50 p-2">
                <div className="max-w-max rounded-full bg-primary-100 p-2">
                  <BoltIcon className="w-5 text-primary-600" />
                </div>
              </div>
              <div className="mb-8">
                <p className="mb-4 text-3xl font-semibold leading-[2.375rem] text-gray-900">Deliver instant answers</p>
                <p className="text-lg font-normal leading-7 text-gray-500">
                  An all-in-one customer service platform that helps you balance <br /> everything your customers need
                  to be happy.
                </p>
              </div>
              <div className="flex flex-col gap-y-5 pl-4 text-lg font-normal leading-7 text-gray-500">
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
                  <p>Keep your customers in the loop with live chat</p>
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
                  <p>Embed help articles right on your website</p>
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
                  <p>Customers never have to leave the page to find an answer</p>
                </div>
              </div>
            </div>
            <div className="basis-1/2">
              <Image src={FeaturesOne} alt="" className="h-full w-full" />
            </div>
          </div>
          <div className="flex items-center justify-between gap-x-24">
            <div className="basis-1/2">
              <div className="mb-6 max-w-max rounded-full bg-primary-50 p-2">
                <div className="max-w-max rounded-full bg-primary-100 p-2">
                  <svg width="14" height="14" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13 17V7M7 17V1M1 17V11"
                      stroke="#7F56D9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="mb-8">
                <p className="mb-4 text-3xl font-semibold leading-[2.375rem] text-gray-900">
                  Manage your team with reports
                </p>
                <p className="text-lg font-normal leading-7 text-gray-500">
                  Measure what matters with Untitled’s easy-to-use reports. You <br /> can filter, export, and drilldown
                  on the data in a couple clicks.
                </p>
              </div>
              <div className="flex flex-col gap-y-5 pl-4 text-lg font-normal leading-7 text-gray-500">
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
                  <p>Filter, export, and drilldown on the data quickly</p>
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
                  <p>Save, schedule, and automate reports to your inbox</p>
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
                  <p>Connect the tools you already use with 100+ integrations</p>
                </div>
              </div>
            </div>
            <div className="basis-1/2">
              <Image src={FeaturesOne} alt="" className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
