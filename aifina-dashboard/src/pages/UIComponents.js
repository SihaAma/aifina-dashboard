import React from 'react';

export const Card = ({ children, className, ...props }) => (
  <div className={`bg-white shadow-md rounded-lg p-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardHeader = ({ children, className, ...props }) => (
  <div className={`mb-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className, ...props }) => (
  <h2 className={`text-xl font-bold ${className}`} {...props}>
    {children}
  </h2>
);

export const CardContent = ({ children, className, ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

export const Tabs = ({ children, className, ...props }) => (
  <div className={`mb-4 ${className}`} {...props}>
    {children}
  </div>
);

export const TabsList = ({ children, className, ...props }) => (
  <div className={`flex ${className}`} {...props}>
    {children}
  </div>
);

export const TabsTrigger = ({ children, className, active, onClick, ...props }) => (
  <button
    className={`px-4 py-2 ${active ? 'bg-blue-500 text-white' : 'bg-gray-200'} ${className}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

export const TabsContent = ({ children, className, active, ...props }) => (
  <div className={`${active ? '' : 'hidden'} ${className}`} {...props}>
    {children}
  </div>
);