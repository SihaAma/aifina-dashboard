import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './UIComponents';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const monthlyData = [
  { month: 'Jan', revenue: 13745707, cost: 10562853, profit: 3182854 },
  { month: 'Feb', revenue: 12726467, cost: 9023618, profit: 3702849 },
  // ... (add more months)
];

const ProfitAndLossStatement = () => (
  <Card>
    <CardHeader>
      <CardTitle>Profit and Loss Statement</CardTitle>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={monthlyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
          <Line type="monotone" dataKey="cost" stroke="#82ca9d" />
          <Line type="monotone" dataKey="profit" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default ProfitAndLossStatement;