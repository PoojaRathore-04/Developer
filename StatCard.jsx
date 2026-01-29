import './Dashboard.css';

const StatCard = ({ title, value, change, today }) => {
  return (
    <div className="stat-card equal-small-card">
      <div className="card-header-with-dots">
        <h3>{title}</h3>
        <div className="three-dots">...</div>
      </div>
      <div className="stat-main">
        <div className="big-number">{value}</div>
      </div>
      <div className="sub-boxes">
        <div className="sub-box"><div className="sub-numbers">{change}</div></div>
        <div className="sub-box"><div className="sub-number">{today}</div></div>
      </div>
      <div className="view-review-section">
        <button className="full-width-review-btn">
          View Report
          <svg className="arrow-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default StatCard;
