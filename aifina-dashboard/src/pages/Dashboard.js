import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./UIComponents";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import moment from 'moment';

const Dashboard = () => {
  const [startDate, setStartDate] = useState(moment('2023-01', 'YYYY-MM'));
  const [endDate, setEndDate] = useState(moment('2024-12', 'YYYY-MM'));
  const [filteredData, setFilteredData] = useState([]);

  const monthlySummaryData = [
    { Month: '2024-01', TotalRevenue: 1374571000, DirectCosts: 1109591000, OperatingExpenses: 0, NetProfit: 264979469, GrossMargin: 19.28, GrossProfit: 264979469 },
    { Month: '2024-02', TotalRevenue: 1224270000, DirectCosts: 908958800, OperatingExpenses: 0, NetProfit: 315310761, GrossMargin: 25.76, GrossProfit: 315310761 },
    // ... (add all the data points here)
  ];

  useEffect(() => {
    updateDashboard(startDate, endDate);
  }, [startDate, endDate]);

  const updateDashboard = (start, end) => {
    const filtered = monthlySummaryData.filter(item => {
      const itemDate = moment(item.Month, 'YYYY-MM');
      return itemDate.isBetween(start, end, null, '[]');
    });
    setFilteredData(filtered);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value);
  };

  const KeyMetrics = () => {
    const totalRevenue = filteredData.reduce((sum, item) => sum + item.TotalRevenue, 0);
    const totalDirectCosts = filteredData.reduce((sum, item) => sum + item.DirectCosts, 0);
    const totalNetProfit = filteredData.reduce((sum, item) => sum + item.NetProfit, 0);
    const averageGrossMargin = filteredData.reduce((sum, item) => sum + item.GrossMargin, 0) / filteredData.length;

    return (
      <div className="row g-4 mb-4">
        <MetricCard title="Total Revenue" value={formatCurrency(totalRevenue)} />
        <MetricCard title="Total Direct Costs" value={formatCurrency(totalDirectCosts)} />
        <MetricCard title="Net Profit" value={formatCurrency(totalNetProfit)} />
        <MetricCard title="Average Gross Margin" value={`${averageGrossMargin.toFixed(2)}%`} />
      </div>
    );
  };

  const MetricCard = ({ title, value }) => (
    <div className="col-md-3">
      <Card className="metric-card">
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <p className="metric-value">{value}</p>
        </CardContent>
      </Card>
    </div>
  );

  const CashFlowChart = () => (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Cash Flow Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Month" />
            <YAxis tickFormatter={(value) => formatCurrency(value)} />
            <Tooltip formatter={(value) => formatCurrency(value)} />
            <Area type="monotone" dataKey="NetProfit" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );

  const GrossMarginChart = () => (
    <Card>
      <CardHeader>
        <CardTitle>Gross Margin Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Month" />
            <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
            <Tooltip formatter={(value) => `${value}%`} />
            <Line type="monotone" dataKey="GrossMargin" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );

  return (
    <div className="container-fluid py-4">
      <h1 className="text-center mb-4">Financial Overview</h1>
      <KeyMetrics />
      <div className="row g-4">
        <div className="col-lg-6">
          <CashFlowChart />
        </div>
        <div className="col-lg-6">
          <GrossMarginChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;