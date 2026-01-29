import './Dashboard.css';

const SealsNavigator = () => {
  return (
    <div className="seals-plan-card">
      <div className="card-header-with-dots">
        <h3>Seals Navigator</h3>
      </div>
      <div className="plan-content">
        <div className="client-gauge">
          <svg viewBox="0 0 200 150" className="gauge">
            <circle 
              cx="100" 
              cy="20" 
              r="60" 
              fill="none" 
              stroke="#6bb7f6ff" 
              strokeWidth="20" 
              strokeDasharray="188.5 188.5" 
              strokeDashoffset="0" 
              pathLength="0.5"
            />
            <circle 
              cx="100" 
              cy="20" 
              r="60" 
              fill="none" 
              stroke="#007BFF" 
              strokeWidth="20" 
              strokeDasharray="188.5 188.5" 
              strokeDashoffset="63" 
            />
            <g className="needle" transform="rotate(-65 65 80)">
              <path 
                d="M100 80 L 145 78 L 150 82 L 145 86 Z" 
                fill="#080808ff"  
                strokeWidth="15" 
                strokeLinejoin="round" 
              />
            </g>
          </svg>
          <div className="gauge-center">
            <div className="gauge-value">63%</div>
            <div>Sales percentage</div>
          </div>
          <div className="gauge-side">
            <div>Online Store 60%</div>
            <div>Offline Store 40%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SealsNavigator;
