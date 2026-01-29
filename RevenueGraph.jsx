import './Dashboard.css';

const RevenueGraph = () => {
  const data = [
    { month: 'Jan', profit: 18, loss: 4.2 },
    { month: 'Feb', profit: 40, loss: 10 },
    { month: 'Mar', profit: 38, loss: 4.8 },
    { month: 'Apr', profit: 30, loss: 14 }
  ];

  const maxValue = 50;
  const graphHeight = 200;
  const barSpacing = 110;

  return (
    <div className="graph">
      <div className="revenue-bar-graph">
        <div className="y-axis-grid">
          <div className="grid-line" style={{bottom: '15%'}}><span>0K</span></div>
          <div className="grid-line" style={{bottom: '30%'}}><span>10K</span></div>
          <div className="grid-line" style={{bottom: '45%'}}><span>20K</span></div>
          <div className="grid-line" style={{bottom: '60%'}}><span>30K</span></div>
          <div className="grid-line" style={{bottom: '75%'}}><span>40K</span></div>
          <div className="grid-line" style={{bottom: '90%'}}><span>50K</span></div>
        </div>

        {data.map((item, index) => (
          <div key={item.month} className="month-group" style={{ left: `${20 + index * barSpacing}px` }}>
            <div 
              className="vertical-bar profit-bar"
              style={{ 
                height: `${(item.profit / maxValue) * graphHeight}px`,
                left: '90px'
              }}
            />
            <div 
              className="vertical-bar loss-bar"
              style={{ 
                height: `${(item.loss / maxValue) * graphHeight}px`,
                left: '118px'
              }}
            />
          </div>
        ))}

        <div className="graph-legend">
          <div className="legend-item profit-legend">
            <div className="legend-dot profit-dot"></div>
            <span>Profit</span>
          </div>
          <div className="legend-item loss-legend">
            <div className="legend-dot loss-dot"></div>
            <span>Loss</span>
          </div>
        </div>

        <div className="trend-labels-large">
          <span style={{left: '26px'}}>Jan</span>
          <span style={{left: '28px'}}>Feb</span>
          <span style={{left: '20px'}}>Mar</span>
          <span style={{left: '5px'}}>Apr</span>
        </div>
      </div>
    </div>
  );
};

export default RevenueGraph;
