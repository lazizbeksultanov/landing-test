import CompanyLogo from '../../public/assets/images/companyLogo.png'
import Link from 'next/link'
import Image from 'next/image'

export const TrustUs = () => {
  return (
    <div className="w-full bg-gray-50 py-24">
      <div className="container">
        <p className="text-center text-base font-medium leading-6 text-gray-500">
          Join 4,000+ companies already growing
        </p>
        <div className="mt-8 grid w-full grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
          <Link href="/">
            <Image src={CompanyLogo} alt="Company Logo" className="mx-auto" />
          </Link>
          <Link href="/">
            <Image src={CompanyLogo} alt="Company Logo" className="mx-auto" />
          </Link>
          <Link href="/">
            <Image src={CompanyLogo} alt="Company Logo" className="mx-auto" />
          </Link>
          <Link href="/">
            <Image src={CompanyLogo} alt="Company Logo" className="mx-auto" />
          </Link>
          <Link href="/">
            <Image src={CompanyLogo} alt="Company Logo" className="mx-auto" />
          </Link>
          <Link href="/">
            <Image src={CompanyLogo} alt="Company Logo" className="mx-auto" />
          </Link>
        </div>
      </div>
    </div>
  )
}
