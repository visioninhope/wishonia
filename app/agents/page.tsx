import React from "react";
import AgentList from "@/components/agents/agent-list";
import {Shell} from "@/components/layout/shell";
import AfterLoginHandler from "@/components/AfterLoginHandler";
import {DashboardCards} from "@/components/pages/dashboard/dashboard-cards";
export default function AgentListPage() {

  return (
      <Shell>
        <AgentList></AgentList>
      </Shell>
  )
}
