import { WishocracyLandingPage } from "@/components/wishocracy-landing-page"
import FeatureCards from "@/components/pages/feature-cards"
import Hero from "@/components/pages/hero"
import OpenSource from "@/components/pages/opensource"
import Overview from "@/components/pages/overview"
import { Poll } from "@/components/poll"
import { PWARedirect } from "@/components/pwa-redirect"

export default function Home() {
  return (
    <main>
       <Hero />
      <FeatureCards />
      <Overview />
        <WishocracyLandingPage />
      <OpenSource />
      <PWARedirect />
    </main>
  )
}
