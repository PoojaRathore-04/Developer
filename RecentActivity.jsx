import './Dashboard.css';

const RecentActivity = () => {
  const activities = [
    {
      name: 'Joseph Arimathea',
      email: 'josepherimathea@gmail.com',
      status: 'Member',
      id: '#74568320',
      time: '10 min ago',
      amount: '$10,000'
    },
    {
      name: 'Joseph Arimathea',
      email: 'josepharimathea@gmail.com',
      status: 'Signed Up',
      id: '#7568510',
      time: '10 min ago',
      amount: '$5,000'
    },
    {
      name: 'Joseph Arimathea',
      email: 'josepherimachaa@gmail.com',
      status: 'Signed Up',
      id: '#756050',
      time: '15 min ago',
      amount: '$5,000'
    },
    {
      name: 'Joseph Arimathea',
      email: 'josepherimachaa@gmail.com',
      status: 'Signed Up',
      id: '#756050',
      time: '15 min ago',
      amount: '$5,000'
    }
  ];

  return (
    <div className="recent-activity-card">
      <div className="activity-header">
        <h3>Recent Activity</h3>
      </div>
      <div className="activity-table">
        <div className="table-header">
          <span>Customer</span>
          <span>Status</span>
          <span>Customer ID</span>
          <span>Recent</span>
          <span>Amount</span>
        </div>
        <div className="table-body">
          {activities.map((activity, index) => (
            <div key={index} className="table-row">
              <div className="customer-cell">
                <div className="customer-name">{activity.name}</div>
                <div className="customer-email">{activity.email}</div>
              </div>
              <div className={`status-cell ${activity.status.toLowerCase().replace(' ', '-')}`}>
                {activity.status}
              </div>
              <div className="id-cell">{activity.id}</div>
              <div className="recent-cell">{activity.time}</div>
              <div className="amount-cell">{activity.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
