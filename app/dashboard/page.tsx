import { Metadata } from "next"
import { redirect } from "next/navigation"

import { getDashboardData } from "@/lib/api/dashboard"
import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { dateRangeParams } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ActivityList } from "@/components/activity/activity-list"
import { logColumns } from "@/components/activity/logs/logs-columns"
import { LineChartComponent } from "@/components/charts/linechart"
import { PieChartComponent } from "@/components/charts/piechart"
import { DataTable } from "@/components/data-table"
import { DateRangePicker } from "@/components/date-range-picker"
import { Shell } from "@/components/layout/shell"
import { DashboardCards } from "@/components/pages/dashboard/dashboard-cards"
import { DashboardHeader } from "@/components/pages/dashboard/dashboard-header"
import BarChart from "@/components/bar-chart";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Monitor your progress.",
}

interface DashboardProps {
  searchParams: { from: string; to: string }
}

export default async function Dashboard({ searchParams }: DashboardProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/signin")
  }

  const dateRange = dateRangeParams(searchParams)
  const dashboardData = await getDashboardData(user.id, dateRange)

  const activityData =
    dashboardData.activityCountByDate.length > 0 &&
    dashboardData.topActivities.length > 0

  const layout = activityData
    ? "grid grid-cols-1 gap-4 md:grid-cols-2"
    : "grid grid-cols-1"
  const scrollClass = activityData
    ? "h-[17rem] rounded-lg border"
    : "h-[25.1rem] rounded-lg border"

  return (
    <Shell>
      <DashboardHeader heading="Current Results"
                       text="Here's how the average person would balance resources">
      </DashboardHeader>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <BarChart warPercentageDesired={dashboardData.averageWarPercentageDesired} labelsPosition={"bottom"} />
          <div className="rounded-lg shadow-lg p-4">
            <BarChart warPercentageDesired={95} labelsPosition={"bottom"}/>
            <p className="text-center text-sm text-muted-foreground">Average Vote</p>
          </div>
        </div>
      <div className={layout}>
        <ScrollArea className={scrollClass}>
          <div className="divide-y divide-border">
            <ActivityList activities={dashboardData.userActivities} />
          </div>
        </ScrollArea>
        {activityData && (
          <>
            <DashboardCards data={dashboardData} searchParams={searchParams} />
            <LineChartComponent data={dashboardData.activityCountByDate} />
            <PieChartComponent data={dashboardData.topActivities} />
          </>
        )}
      </div>
      <DataTable columns={logColumns} data={dashboardData.logs}>
        Log History
      </DataTable>
    </Shell>
  )
}