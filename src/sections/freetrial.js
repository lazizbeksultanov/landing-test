import { Button } from '@/components/Button'

export const Freetrial = () => {
  return (
    <div className="bg-white pb-24">
      <div className="container">
        <div className="flex flex-col justify-between rounded-2xl bg-primary-50 px-6 py-10 md:flex-row md:p-16">
          <div>
            <p className="text-3xl font-semibold leading-[2.375rem] text-primary-900">Start your 30-day free trial</p>
            <p className="pt-3 text-lg font-normal leading-[1.875rem] text-primary-700">
              Join over 4,000+ startups already growing with Untitled.
            </p>
          </div>
          <div className="mt-8 flex flex-col-reverse gap-3 md:mt-0 md:flex-row">
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
      </div>
    </div>
  )
}
