import React, { useState } from 'react';
import { Menu, ArrowLeftRight, BarChart2, DollarSign, PieChart, Briefcase, TrendingUp, Brain, BarChart, AlertTriangle, BookOpen } from 'lucide-react';

const FinancialDashboard = () => {
  const [selectedModule, setSelectedModule] = useState('Dashboard');
  const [selectedMonth, setSelectedMonth] = useState('February');
  const [selectedYear, setSelectedYear] = useState('2022');

  const sidebarModules = [
    { name: 'Dashboard', icon: <Menu /> },
    { name: 'Financial Statements', icon: <DollarSign /> },
    { name: 'KPI Analysis', icon: <BarChart2 /> },
    { name: 'Working Capital Analysis', icon: <ArrowLeftRight /> },
    { name: 'Budgeting & Forecasting', icon: <PieChart /> },
    { name: 'Montecarlo simulation', icon: <TrendingUp /> },
    { name: 'AI-dvisor (Gen AI)', icon: <Brain /> },
    { name: 'Benchmarking', icon: <BarChart /> },
    { name: 'Risk Management', icon: <AlertTriangle /> },
    { name: 'IFRS Advanced module', icon: <BookOpen /> },
  ];

  const financialData = {
    'Sales Revenue': { actuals: 12726467.00, budget: 13580996.34, previousPeriod: 13745707.00 },
    'Cost of goods sold': { actuals: 9023618.08, budget: 9384562.80, previousPeriod: 10562853.52 },
    'GROSS MARGIN': { actuals: 3702848.92, budget: 4196433.54, previousPeriod: 3182853.48 },
    'Personnel': { actuals: 938597.00, budget: null, previousPeriod: 991135.00 },
    'Facility': { actuals: 783888.00, budget: null, previousPeriod: 778137.00 },
    'Administration': { actuals: 790258.00, budget: null, previousPeriod: 795212.00 },
    'EBITDA': { actuals: 1190105.92, budget: null, previousPeriod: 618369.48 },
    'Financial Income': { actuals: 1229651.00, budget: null, previousPeriod: 1222608.00 },
    'Financial Cost': { actuals: 1206806.00, budget: null, previousPeriod: 1223814.00 },
    'NET RESULT': { actuals: 1212950.92, budget: null, previousPeriod: 617163.48 },
  };

  const renderFinancialTable = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Profit and loss statement</th>
            <th className="px-4 py-2 text-right">Actuals</th>
            <th className="px-4 py-2 text-right">Budget</th>
            <th className="px-4 py-2 text-right">Variance</th>
            <th className="px-4 py-2 text-right">Previous period</th>
            <th className="px-4 py-2 text-right">Variance</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(financialData).map(([key, value]) => (
            <tr key={key} className="border-b">
              <td className="px-4 py-2">{key}</td>
              <td className="px-4 py-2 text-right">{value.actuals?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
              <td className="px-4 py-2 text-right">{value.budget?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
              <td className="px-4 py-2 text-right">{value.budget ? (value.actuals - value.budget).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : '-'}</td>
              <td className="px-4 py-2 text-right">{value.previousPeriod?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
              <td className="px-4 py-2 text-right">{((value.actuals - value.previousPeriod) / value.previousPeriod * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">AIFINA</h1>
        </div>
        <nav>
          {sidebarModules.map((module) => (
            <button
              key={module.name}
              className={`flex items-center w-full px-4 py-2 text-left ${
                selectedModule === module.name ? 'bg-red-500' : 'hover:bg-blue-800'
              }`}
              onClick={() => setSelectedModule(module.name)}
            >
              {module.icon}
              <span className="ml-2">{module.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">{selectedModule}</h1>
            <div className="flex space-x-4">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="form-select"
              >
                <option>January</option>
                <option>February</option>
                {/* Add more months */}
              </select>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="form-select"
              >
                <option>2022</option>
                <option>2023</option>
                {/* Add more years */}
              </select>
            </div>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {selectedModule === 'Financial Statements' && renderFinancialTable()}
          {/* Add other module content here */}
        </main>
      </div>
    </div>
  );
};

export default FinancialDashboard;