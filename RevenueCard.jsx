import React from 'react';
import RevenueGraph from './RevenueGraph';
import './Dashboard.css';

const RevenueCard = () => {
  return (
    <div className="stat-card large-profit-card white-profit-card">
      <div className="card-header-with-dots">
        <h3>Revenue</h3>
        <div className="Month">Month</div>
      </div>
      <div className="stat-main-large">
        <div className="big-number-large">
          $56,400.12 
          <div style={{color:'#10B981', display: 'inline-block', marginLeft: '8px'}}>+10%</div>
        </div>
      </div>
      <RevenueGraph />
    </div>
  );
};

export default RevenueCard;
