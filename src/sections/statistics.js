import { BoltIcon } from '@heroicons/react/24/outline'

export const Statistics = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="container">
        <div className="mx-auto w-7/12">
          <div className="mx-auto mb-6 max-w-max rounded-full bg-primary-50 p-2">
            <div className="max-w-max rounded-full bg-primary-100 p-2">
              <BoltIcon className="w-5 text-primary-600" />
            </div>
          </div>
          <p className="mt-3 text-center text-4xl font-medium text-gray-900">Unleash the full power of data</p>
          <p className="mt-5 text-center text-xl font-light text-gray-500">
            Everything you need to convert, engage, and retain more users.
          </p>
        </div>
        <div className="mx-auto mt-16 w-7/12">
          <div className="flex items-center justify-between">
            <div className="text-center">
              <p className="mb-2 text-6xl font-semibold text-primary-600">40+</p>
              <p className="text-lg font-medium text-gray-900">Integrations</p>
            </div>
            <div className="border-x border-gray-200 px-16 text-center">
              <p className="mb-2 text-6xl font-semibold text-primary-600">600%</p>
              <p className="text-lg font-medium text-gray-900">Return on investment</p>
            </div>
            <div className="text-center">
              <p className="mb-2 text-6xl font-semibold text-primary-600">4k+</p>
              <p className="text-lg font-medium text-gray-900">Global customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
