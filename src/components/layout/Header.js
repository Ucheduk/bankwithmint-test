import React, { useState } from 'react';
import SearchInput from '<components>/widgets/SearchInput';
import NotificationIcon from '<components>/widgets/NotificationIcon';
import ProfileBox from '<components>/widgets/ProfileBox';
import Avatar from '<image>/avatar.png';

const Header = () => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    console.log(text);
  };

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">TransMonitor</h1>
        <SearchInput
          id="header-search"
          className="header__search"
          placeholder="Search..."
          value={searchText}
          handleChange={handleChange}
        />
        <nav className="header__nav">
          <ul>
            <li>Support</li>
            <li>FAQ</li>
          </ul>
        </nav>
        <NotificationIcon count={8} />
        <ProfileBox
          name={'Oluwaleke Ojo'}
          avatar={Avatar}
        />
      </div>
    </header>
  );
};

export default Header;
