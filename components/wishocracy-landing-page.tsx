import HeroSection from "@/components/HeroSection";
import HowWishesWork from "@/components/HowWishesWork";
import DiscoverWishes from "@/components/DiscoverWishes";
import GenieDAOs from "@/components/GenieDAOs";


export function WishocracyLandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <HeroSection/>
        <HowWishesWork/>
        <DiscoverWishes/>
        <GenieDAOs/>
      </main>
    </div>
  )
}