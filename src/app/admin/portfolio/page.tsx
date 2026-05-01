"use client";

import { usePortfolios, useDeletePortfolio } from "@/hooks/useAdminData";
import PortfolioTab from "@/components/admin/portfolio/PortfolioTab";

export default function AdminPortfolioPage() {
  const { data: portfolios = [], isLoading, refetch } = usePortfolios();
  const deletePortfolioMutation = useDeletePortfolio();

  return (
    <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <PortfolioTab
            portfolios={portfolios}
            loading={isLoading}
            onDelete={(id) => deletePortfolioMutation.mutate(id)}
            onRefresh={() => refetch()}
          />
        </div>
      </main>
    </div>
  );
}
