import { Metadata } from "next"
import { notFound, redirect } from "next/navigation"

import { getUserWishingWell } from "@/lib/api/wishingWells"
import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { WishingWellEditForm } from "@/components/wishingWell/wishing-well-edit-form"
import { Shell } from "@/components/layout/shell"
import { DashboardHeader } from "@/components/pages/dashboard/dashboard-header"

export const metadata: Metadata = {
  title: "WishingWell Settings",
}

interface WishingWellEditProps {
  params: { wishingWellId: string }
}

export default async function WishingWellEdit({ params }: WishingWellEditProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/signin")
  }

  const wishingWell = await getUserWishingWell(params.wishingWellId, user.id)

  if (!wishingWell) {
    notFound()
  }

  return (
    <Shell>
      <DashboardHeader
        heading="WishingWell Settings"
        text="Modify wishingWell details."
      />
      <div className="grid grid-cols-1 gap-10">
        <WishingWellEditForm
          wishingWell={{
            id: wishingWell.id,
            name: wishingWell.name,
            description: wishingWell.description,
          }}
        />
      </div>
    </Shell>
  )
}
