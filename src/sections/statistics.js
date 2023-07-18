import { BoltIcon } from '@heroicons/react/24/outline'

export const Statistics = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="container">
        <div className="mx-auto w-full md:w-3/4 lg:w-7/12">
          <div className="mx-auto mb-6 max-w-max rounded-full bg-primary-50 p-2">
            <div className="max-w-max rounded-full bg-primary-100 p-2">
              <BoltIcon className="w-5 text-primary-600" />
            </div>
          </div>
          <p className="mt-3 text-center text-3xl font-semibold leading-[2.375rem] text-gray-900 md:text-4xl md:leading-[2.75rem]">
            Unleash the full power of data
          </p>
          <p className="mt-5 text-center text-lg font-normal leading-7 text-gray-500 md:text-xl md:leading-[1.875rem]">
            Everything you need to convert, engage, and retain more users.
          </p>
        </div>
        <div className="mx-auto mt-16 md:w-11/12 lg:w-3/4 xl:w-7/12">
          <div className="flex flex-col items-center justify-between gap-y-8 md:flex-row">
            <div className="text-center">
              <p className="mb-3 text-6xl font-semibold leading-[4.5rem] text-primary-600">40+</p>
              <p className="text-lg font-medium leading-7 text-gray-900">Integrations</p>
            </div>
            <div className="border-0 border-gray-200 px-16 text-center md:border-x">
              <p className="mb-3 text-6xl font-semibold leading-[4.5rem] text-primary-600">600%</p>
              <p className="text-lg font-medium leading-7 text-gray-900">Return on investment</p>
            </div>
            <div className="text-center">
              <p className="mb-3 text-6xl font-semibold leading-[4.5rem] text-primary-600">4k+</p>
              <p className="text-lg font-medium leading-7 text-gray-900">Global customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
