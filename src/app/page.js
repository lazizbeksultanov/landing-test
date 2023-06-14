import { Main } from '@/sections/main'
import { TrustUs } from '@/sections/trust-us'
import { Features } from '@/sections/features'
import { Integrations } from '@/sections/integrations'
import { Statistics } from '@/sections/statistics'
import { Pricing } from '@/sections/pricing'

export default function Home() {
  return (
    <main>
      <Main />
      <TrustUs />
      <Features />
      <Integrations />
      <Statistics />
      <Pricing />
    </main>
  )
}
