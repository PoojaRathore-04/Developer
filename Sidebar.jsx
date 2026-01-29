import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">Zoho<br/><span>CRM</span></div>
      <nav className="sidebar-nav">
        <div className="nav-item active"><span>Dashboard</span></div>
        <div className="nav-item"><span>Clients</span></div>
        <div className="nav-item"><span>Subscription Plans</span></div>
        <div className="nav-item"><span>Leads</span></div>
        <div className="nav-item"><span>Reports & Analytic</span></div>
        <div className="nav-item"><span>Billing & Payments</span></div>
        <div className="nav-item"><span>Revenue</span></div>
        <div className="nav-item"><span>Maintenance & Tickets</span></div>
        <div className="nav-item"><span>User & Role Management</span></div>
        <div className="nav-item"><span>Setting</span></div>
        <div className="nav-item"><span>profile</span></div>
      </nav>
    </div>
  );
};

export default Sidebar;
