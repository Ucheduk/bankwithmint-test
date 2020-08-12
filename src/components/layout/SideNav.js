import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import sideNavItems from '<helpers>/sideNavItems';
import Button from '<components>/items/Button';

const SideNav = () => {
  const history = useHistory();
  const [currentLocation, setCurrentLocation] = useState('/');
  useEffect(() => {
    setCurrentLocation(history.location.pathname);
  }, [history]);

  return (
    <div className="sidenav">
      <Button
        text="GENERATE INVOICE"
        className="btn"
      />

      <nav className="sidenav__nav">
        {sideNavItems.map((i, index) => (
          <div key={index} className="nav-group">
            {i.groupName && <div className="group-class">{i.groupName}</div>}
            <ul>
              {i.items.map((j) => (
                <li
                  className={j.path === currentLocation ? 'active' : ''}
                  key={j.name}
                >
                  <img src={j.icon} />
                  {j.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default SideNav;
