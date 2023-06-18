'use client'

import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import { BoltIcon, Square3Stack3DIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/Button'

export const Pricing = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="pb-24">
      <div className="w-full bg-primary-50 py-24">
        <div className="container">
          <div className="mx-auto w-7/12">
            <p className="mx-auto max-w-max rounded-2xl bg-primary-100 px-3 py-1 text-center text-sm font-medium leading-5 text-primary-700">
              Pricing plans
            </p>
            <p className="mt-3 text-center text-5xl font-semibold leading-[3.75rem] tracking-tight text-primary-900">
              Plans for all sizes
            </p>
            <p className="mt-5 text-center text-xl font-normal leading-[1.875rem] text-primary-700">
              Simple, transparent pricing that grows with you. Try any plan free for 30 days.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-primary-600' : 'bg-gray-200'}
          relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${enabled ? 'translate-x-5' : 'translate-x-0'}
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
              <p className="ml-3 text-base font-medium leading-6 text-primary-900">
                Annual pricing <span className="text-primary-700">(save 20%)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-24 w-full bg-pricing-bg bg-contain bg-no-repeat">
        <div className="container">
          <div className="flex justify-center gap-x-8 pt-20">
            <div className="w-96 rounded-2xl border border-gray-200 bg-white">
              <div className="w-full p-8">
                <div className="w-full text-center">
                  <div className="mx-auto mb-5 max-w-max rounded-full bg-primary-50 p-2">
                    <div className="max-w-max rounded-full bg-primary-100 p-2">
                      <BoltIcon className="w-5 text-primary-600" />
                    </div>
                  </div>
                  <p className="text-lg font-semibold leading-[1.875rem] text-primary-700">Basic plan</p>
                  <p className="my-2 text-4xl font-semibold leading-[3.75rem] text-gray-900">$10/mth</p>
                  <p className="text-base font-normal leading-6 text-gray-500">Billed annually.</p>
                </div>
                <div className="mt-8 flex flex-col gap-y-4 text-base font-normal leading-6 text-gray-500">
                  <div className="flex items-center gap-x-3">
                    <div className="max-w-max rounded-full bg-primary-100 p-1.5">
                      <svg width="12" height="12" viewBox="0 0 15 13" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.9458 0.62169L4.59246 8.68336L2.3758 6.31502C1.96747 5.93002 1.3258 5.90669 0.859132 6.23336C0.404132 6.57169 0.275798 7.16669 0.555798 7.64502L3.1808 11.915C3.43746 12.3117 3.8808 12.5567 4.38246 12.5567C4.8608 12.5567 5.3158 12.3117 5.57246 11.915C5.99246 11.3667 14.0075 1.81169 14.0075 1.81169C15.0575 0.738356 13.7858 -0.206643 12.9458 0.610023V0.62169Z"
                          fill="#9E77ED"
                        />
                      </svg>
                    </div>
                    <p>Access to all basic features</p>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <div className="max-w-max rounded-full bg-primary-100 p-1.5">
                      <svg width="12" height="12" viewBox="0 0 15 13" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.9458 0.62169L4.59246 8.68336L2.3758 6.31502C1.96747 5.93002 1.3258 5.90669 0.859132 6.23336C0.404132 6.57169 0.275798 7.16669 0.555798 7.64502L3.1808 11.915C3.43746 12.3117 3.8808 12.5567 4.38246 12.5567C4.8608 12.5567 5.3158 12.3117 5.57246 11.915C5.99246 11.3667 14.0075 1.81169 14.0075 1.81169C15.0575 0.738356 13.7858 -0.206643 12.9458 0.610023V0.62169Z"
                          fill="#9E77ED"
                        />
                      </svg>
                    </div>
                    <p>Basic reporting and analytics</p>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <div className="max-w-max rounded-full bg-primary-100 p-1.5">
                      <svg width="12" height="12" viewBox="0 0 15 13" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.9458 0.62169L4.59246 8.68336L2.3758 6.31502C1.96747 5.93002 1.3258 5.90669 0.859132 6.23336C0.404132 6.57169 0.275798 7.16669 0.555798 7.64502L3.1808 11.915C3.43746 12.3117 3.8808 12.5567 4.38246 12.5567C4.8608 12.5567 5.3158 12.3117 5.57246 11.915C5.99246 11.3667 14.0075 1.81169 14.0075 1.81169C15.0575 0.738356 13.7858 -0.206643 12.9458 0.610023V0.62169Z"
                          fill="#9E77ED"
                        />
                      </svg>
                    </div>
                    <p>Up to 10 individual users</p>
                  </div>
                  <div className="flex items-center gap-x-3 text-base font-normal leading-6 text-gray-500">
                    <div className="max-w-max rounded-full bg-primary-100 p-1.5">
                      <svg width="12" height="12" viewBox="0 0 15 13" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.9458 0.62169L4.59246 8.68336L2.3758 6.31502C1.96747 5.93002 1.3258 5.90669 0.859132 6.23336C0.404132 6.57169 0.275798 7.16669 0.555798 7.64502L3.1808 11.915C3.43746 12.3117 3.8808 12.5567 4.38246 12.5567C4.8608 12.5567 5.3158 12.3117 5.57246 11.915C5.99246 11.3667 14.0075 1.81169 14.0075 1.81169C15.0575 0.738356 13.7858 -0.206643 12.9458 0.610023V0.62169Z"
                          fill="#9E77ED"
                        />
                      </svg>
                    </div>
                    <p>20GB individual data each user</p>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <div className="max-w-max rounded-full bg-primary-100 p-1.5">
                      <svg width="12" height="12" viewBox="0 0 15 13" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.9458 0.62169L4.59246 8.68336L2.3758 6.31502C1.96747 5.93002 1.3258 5.90669 0.859132 6.23336C0.404132 6.57169 0.275798 7.16669 0.555798 7.64502L3.1808 11.915C3.43746 12.3117 3.8808 12.5567 4.38246 12.5567C4.8608 12.5567 5.3158 12.3117 5.57246 11.915C5.99246 11.3667 14.0075 1.81169 14.0075 1.81169C15.0575 0.738356 13.7858 -0.206643 12.9458 0.610023V0.62169Z"
                          fill="#9E77ED"
                        />
                      </svg>
                    </div>
                    <p>Basic chat and email support</p>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-b-2xl bg-gray-50 p-8">
                <Button size="w-full" variant="solid">
                  Get started
                </Button>
              </div>
            </div>
            <div className="w-96 rounded-2xl border border-gray-200 bg-white">
              <div className="w-full p-8">
                <div className="w-full text-center">
                  <div className="mx-auto mb-5 max-w-max rounded-full bg-primary-50 p-2">
                    <div className="max-w-max rounded-full bg-primary-100 p-2">
                      <Square3Stack3DIcon className="w-5 text-primary-600" />
                    </div>
                  </div>
                  <p className="text-lg font-semibold leading-[1.875rem] text-primary-700">Business plan</p>
                  <p className="my-2 text-4xl font-semibold leading-[3.75rem] text-gray-900">$20/mth</p>
                  <p className="text-base font-normal leading-6 text-gray-500">Billed annually.</p>
                </div>
                <div className="mt-8 flex flex-col gap-y-4 text-base font-normal leading-6 text-gray-500">
                  <div className="flex items-center gap-x-3">
                    <div className="max-w-max rounded-full bg-primary-100 p-1.5">
                      <svg width="12" height="12" viewBox="0 0 15 13" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.9458 0.62169L4.59246 8.68336L2.3758 6.31502C1.96747 5.93002 1.3258 5.90669 0.859132 6.23336C0.404132 6.57169 0.275798 7.16669 0.555798 7.64502L3.1808 11.915C3.43746 12.3117 3.8808 12.5567 4.38246 12.5567C4.8608 12.5567 5.3158 12.3117 5.57246 11.915C5.99246 11.3667 14.0075 1.81169 14.0075 1.81169C15.0575 0.738356 13.7858 -0.206643 12.9458 0.610023V0.62169Z"
                          fill="#9E77ED"
                        />
                      </svg>
                    </div>
                    <p>200+ integrations</p>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <div className="max-w-max rounded-full bg-primary-100 p-1.5">
                      <svg width="12" height="12" viewBox="0 0 15 13" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.9458 0.62169L4.59246 8.68336L2.3758 6.31502C1.96747 5.93002 1.3258 5.90669 0.859132 6.23336C0.404132 6.57169 0.275798 7.16669 0.555798 7.64502L3.1808 11.915C3.43746 12.3117 3.8808 12.5567 4.38246 12.5567C4.8608 12.5567 5.3158 12.3117 5.57246 11.915C5.99246 11.3667 14.0075 1.81169 14.0075 1.81169C15.0575 0.738356 13.7858 -0.206643 12.9458 0.610023V0.62169Z"
                          fill="#9E77ED"
                        />
                      </svg>
                    </div>
                    <p>Advanced reporting and analytics</p>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <div className="max-w-max rounded-full bg-primary-100 p-1.5">
                      <svg width="12" height="12" viewBox="0 0 15 13" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.9458 0.62169L4.59246 8.68336L2.3758 6.31502C1.96747 5.93002 1.3258 5.90669 0.859132 6.23336C0.404132 6.57169 0.275798 7.16669 0.555798 7.64502L3.1808 11.915C3.43746 12.3117 3.8808 12.5567 4.38246 12.5567C4.8608 12.5567 5.3158 12.3117 5.57246 11.915C5.99246 11.3667 14.0075 1.81169 14.0075 1.81169C15.0575 0.738356 13.7858 -0.206643 12.9458 0.610023V0.62169Z"
                          fill="#9E77ED"
                        />
                      </svg>
                    </div>
                    <p>Up to 20 individual users</p>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <div className="max-w-max rounded-full bg-primary-100 p-1.5">
                      <svg width="12" height="12" viewBox="0 0 15 13" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.9458 0.62169L4.59246 8.68336L2.3758 6.31502C1.96747 5.93002 1.3258 5.90669 0.859132 6.23336C0.404132 6.57169 0.275798 7.16669 0.555798 7.64502L3.1808 11.915C3.43746 12.3117 3.8808 12.5567 4.38246 12.5567C4.8608 12.5567 5.3158 12.3117 5.57246 11.915C5.99246 11.3667 14.0075 1.81169 14.0075 1.81169C15.0575 0.738356 13.7858 -0.206643 12.9458 0.610023V0.62169Z"
                          fill="#9E77ED"
                        />
                      </svg>
                    </div>
                    <p>40GB individual data each user</p>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <div className="max-w-max rounded-full bg-primary-100 p-1.5">
                      <svg width="12" height="12" viewBox="0 0 15 13" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.9458 0.62169L4.59246 8.68336L2.3758 6.31502C1.96747 5.93002 1.3258 5.90669 0.859132 6.23336C0.404132 6.57169 0.275798 7.16669 0.555798 7.64502L3.1808 11.915C3.43746 12.3117 3.8808 12.5567 4.38246 12.5567C4.8608 12.5567 5.3158 12.3117 5.57246 11.915C5.99246 11.3667 14.0075 1.81169 14.0075 1.81169C15.0575 0.738356 13.7858 -0.206643 12.9458 0.610023V0.62169Z"
                          fill="#9E77ED"
                        />
                      </svg>
                    </div>
                    <p>Priority chat and email support</p>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-b-2xl bg-gray-50 p-8">
                <Button size="w-full" variant="solid">
                  Get started
                </Button>
              </div>
            </div>
            <div className="w-96 rounded-2xl border border-gray-200 bg-white">
              <div className="w-full p-8">
                <div className="w-full text-center">
                  <div className="mx-auto mb-5 max-w-max rounded-full bg-primary-50 p-2">
                    <div className="max-w-max rounded-full bg-primary-100 p-2">
                      <Square3Stack3DIcon className="w-5 text-primary-600" />
                    </div>
                  </div>
                  <p className="text-lg font-semibold leading-[1.875rem] text-primary-700">Enterprise plan</p>
                  <p className="my-2 text-4xl font-semibold leading-[3.75rem] text-gray-900">$40/mth</p>
                  <p className="text-base font-normal leading-6 text-gray-500">Billed annually.</p>
                </div>
                <div className="mt-8 flex flex-col gap-y-4 text-base font-normal leading-6 text-gray-500">
                  <div className="flex items-center gap-x-3">
                    <div className="max-w-max rounded-full bg-primary-100 p-1.5">
                      <svg width="12" height="12" viewBox="0 0 15 13" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.9458 0.62169L4.59246 8.68336L2.3758 6.31502C1.96747 5.93002 1.3258 5.90669 0.859132 6.23336C0.404132 6.57169 0.275798 7.16669 0.555798 7.64502L3.1808 11.915C3.43746 12.3117 3.8808 12.5567 4.38246 12.5567C4.8608 12.5567 5.3158 12.3117 5.57246 11.915C5.99246 11.3667 14.0075 1.81169 14.0075 1.81169C15.0575 0.738356 13.7858 -0.206643 12.9458 0.610023V0.62169Z"
                          fill="#9E77ED"
                        />
                      </svg>
                    </div>
                    <p>Advanced custom fields</p>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <div className="max-w-max rounded-full bg-primary-100 p-1.5">
                      <svg width="12" height="12" viewBox="0 0 15 13" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.9458 0.62169L4.59246 8.68336L2.3758 6.31502C1.96747 5.93002 1.3258 5.90669 0.859132 6.23336C0.404132 6.57169 0.275798 7.16669 0.555798 7.64502L3.1808 11.915C3.43746 12.3117 3.8808 12.5567 4.38246 12.5567C4.8608 12.5567 5.3158 12.3117 5.57246 11.915C5.99246 11.3667 14.0075 1.81169 14.0075 1.81169C15.0575 0.738356 13.7858 -0.206643 12.9458 0.610023V0.62169Z"
                          fill="#9E77ED"
                        />
                      </svg>
                    </div>
                    <p>Audit log and data history</p>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <div className="max-w-max rounded-full bg-primary-100 p-1.5">
                      <svg width="12" height="12" viewBox="0 0 15 13" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.9458 0.62169L4.59246 8.68336L2.3758 6.31502C1.96747 5.93002 1.3258 5.90669 0.859132 6.23336C0.404132 6.57169 0.275798 7.16669 0.555798 7.64502L3.1808 11.915C3.43746 12.3117 3.8808 12.5567 4.38246 12.5567C4.8608 12.5567 5.3158 12.3117 5.57246 11.915C5.99246 11.3667 14.0075 1.81169 14.0075 1.81169C15.0575 0.738356 13.7858 -0.206643 12.9458 0.610023V0.62169Z"
                          fill="#9E77ED"
                        />
                      </svg>
                    </div>
                    <p>Unlimited individual users</p>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <div className="max-w-max rounded-full bg-primary-100 p-1.5">
                      <svg width="12" height="12" viewBox="0 0 15 13" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.9458 0.62169L4.59246 8.68336L2.3758 6.31502C1.96747 5.93002 1.3258 5.90669 0.859132 6.23336C0.404132 6.57169 0.275798 7.16669 0.555798 7.64502L3.1808 11.915C3.43746 12.3117 3.8808 12.5567 4.38246 12.5567C4.8608 12.5567 5.3158 12.3117 5.57246 11.915C5.99246 11.3667 14.0075 1.81169 14.0075 1.81169C15.0575 0.738356 13.7858 -0.206643 12.9458 0.610023V0.62169Z"
                          fill="#9E77ED"
                        />
                      </svg>
                    </div>
                    <p>Unlimited individual data</p>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <div className="max-w-max rounded-full bg-primary-100 p-1.5">
                      <svg width="12" height="12" viewBox="0 0 15 13" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.9458 0.62169L4.59246 8.68336L2.3758 6.31502C1.96747 5.93002 1.3258 5.90669 0.859132 6.23336C0.404132 6.57169 0.275798 7.16669 0.555798 7.64502L3.1808 11.915C3.43746 12.3117 3.8808 12.5567 4.38246 12.5567C4.8608 12.5567 5.3158 12.3117 5.57246 11.915C5.99246 11.3667 14.0075 1.81169 14.0075 1.81169C15.0575 0.738356 13.7858 -0.206643 12.9458 0.610023V0.62169Z"
                          fill="#9E77ED"
                        />
                      </svg>
                    </div>
                    <p>Personalised+priotity service</p>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-b-2xl bg-gray-50 p-8">
                <Button size="w-full" variant="solid">
                  <p className="font-semibold leading-6">Get started</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
