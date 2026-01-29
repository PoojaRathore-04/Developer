import './Header.css';

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="compact-header">
      <div className="search-container-left">
        <svg className="search-icon-left" viewBox="0 0 20 20" fill="none">
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2"/>
          <path d="m15 15-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <input 
          className="compact-search-left" 
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="header-right">
        <div className="user-profile-compact">
          <img src="" alt="JA" className="profile-img-compact" />
          <span className="profile-name-compact">Joseph Arimathea</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
