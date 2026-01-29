import React from 'react';
import StatCard from './StatCard';
import RevenueCard from './RevenueCard';
import RecentActivity from './RecentActivity';
import SealsNavigator from './SealsNavigator';
import './Dashboard.css';

const stats = [
  { title: 'Total Leads', value: '12,832', change: '+20.1%', today: '+2,123 today' },
  { title: 'Active Leads', value: '12,832', change: '+20.1%', today: '+2,123 today' },
  { title: 'Subscriptions', value: '12,832', change: '+20.1%', today: '+2,123 today' },
  { title: 'Clients', value: '12,832', change: '+20.1%', today: '+2,123 today' }
];

const Dashboard = () => {
  return (
    <main className="content-area">
      <div className="dashboard-control-bar">
        <div className="control-left">
          <span className="dashboard-text">Dashboard</span>
        </div>
        <div className="control-right">
          <div className="control-items"><span>Subscription</span></div>
          <div className="control-item export-item">
            <span>Export</span>
            <svg className="down-arrow" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="control-item date-item"><span>Jan 24, 2026</span></div>
        </div>
      </div>

      {/* Row 1 */}
      <div className="dashboard-grid">
        <div className="small-boxes-container">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
        <RevenueCard />
      </div>

      {/* Row 2 */}
      <div className="bottom-row">
        <RecentActivity />
        <SealsNavigator />
      </div>
    </main>
  );
};

export default Dashboard;
