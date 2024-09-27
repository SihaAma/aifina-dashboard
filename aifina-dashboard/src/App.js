import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import FinancialStatements from './pages/FinancialStatements';
import KPIAnalysis from './pages/KPIAnalysis';
import WorkingCapitalAnalysis from './pages/WorkingCapitalAnalysis';
import BudgetingForecasting from './pages/BudgetingForecasting';
import MontecarloSimulation from './pages/MontecarloSimulation';
import AIAdvisor from './pages/AIAdvisor';
import Benchmarking from './pages/Benchmarking';
import RiskManagement from './pages/RiskManagement';
import IFRSAdvancedModule from './pages/IFRSAdvancedModule';
//import FinancialDashboard from './components/FinancialDashboard';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/financial-statements" element={<FinancialStatements />} />
            <Route path="/kpi-analysis" element={<KPIAnalysis />} />
            <Route path="/working-capital-analysis" element={<WorkingCapitalAnalysis />} />
            <Route path="/budgeting-forecasting" element={<BudgetingForecasting />} />
            <Route path="/montecarlo-simulation" element={<MontecarloSimulation />} />
            <Route path="/ai-advisor" element={<AIAdvisor />} />
            <Route path="/benchmarking" element={<Benchmarking />} />
            <Route path="/risk-management" element={<RiskManagement />} />
            <Route path="/ifrs-advanced-module" element={<IFRSAdvancedModule />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;