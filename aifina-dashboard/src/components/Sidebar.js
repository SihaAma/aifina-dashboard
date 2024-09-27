import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, ArrowLeftRight, BarChart2, DollarSign, PieChart, Briefcase, TrendingUp, Brain, BarChart, AlertTriangle, BookOpen } from 'lucide-react';

const Sidebar = () => {
  const sidebarModules = [
    { name: 'Dashboard', icon: <Menu />, path: '/' },
    { name: 'Financial Statements', icon: <DollarSign />, path: '/financial-statements' },
    { name: 'KPI Analysis', icon: <BarChart2 />, path: '/kpi-analysis' },
    { name: 'Working Capital Analysis', icon: <ArrowLeftRight />, path: '/working-capital-analysis' },
    { name: 'Budgeting & Forecasting', icon: <PieChart />, path: '/budgeting-forecasting' },
    { name: 'Montecarlo simulation', icon: <TrendingUp />, path: '/montecarlo-simulation' },
    { name: 'AI-dvisor (Gen AI)', icon: <Brain />, path: '/ai-advisor' },
    { name: 'Benchmarking', icon: <BarChart />, path: '/benchmarking' },
    { name: 'Risk Management', icon: <AlertTriangle />, path: '/risk-management' },
    { name: 'IFRS Advanced module', icon: <BookOpen />, path: '/ifrs-advanced-module' },
  ];

  return (
    <div className="w-64 bg-blue-900 text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold">AIFINA</h1>
      </div>
      <nav>
        {sidebarModules.map((module) => (
          <Link
            key={module.name}
            to={module.path}
            className="flex items-center w-full px-4 py-2 text-left hover:bg-blue-800"
          >
            {module.icon}
            <span className="ml-2">{module.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;