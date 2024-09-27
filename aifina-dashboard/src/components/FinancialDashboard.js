import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './UIComponents';
import ProfitAndLossStatement from './ProfitAndLossStatement';
import BalanceSheet from './BalanceSheet';
import CashFlowStatement from './CashFlowStatement';

const FinancialDashboard = () => {
  const [activeTab, setActiveTab] = useState('pnl');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">AIFINA Financial Dashboard</h1>
      
      <Tabs>
        <TabsList>
          <TabsTrigger active={activeTab === 'pnl'} onClick={() => setActiveTab('pnl')}>Profit & Loss</TabsTrigger>
          <TabsTrigger active={activeTab === 'balance'} onClick={() => setActiveTab('balance')}>Balance Sheet</TabsTrigger>
          <TabsTrigger active={activeTab === 'cashflow'} onClick={() => setActiveTab('cashflow')}>Cash Flow</TabsTrigger>
        </TabsList>
        <TabsContent active={activeTab === 'pnl'}>
          <ProfitAndLossStatement />
        </TabsContent>
        <TabsContent active={activeTab === 'balance'}>
          <BalanceSheet />
        </TabsContent>
        <TabsContent active={activeTab === 'cashflow'}>
          <CashFlowStatement />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FinancialDashboard;