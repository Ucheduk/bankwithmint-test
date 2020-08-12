import React from 'react';
import sideNavItems from '<helpers>/sideNavItems';
import Button from '<components>/items/Button';

const SideNav = () => {
  return (
    <div className="sidenav">
      <Button
        text="GENERATE INVOICE"
        className="btn btn-primary"
      />

      <nav className="sidenav__nav">
        {sideNavItems.map((i, index) => (
          <div key={index} className="nav-group">
            {i.groupName && <span className="group-class">{i.groupName}</span>}
            <ul>
              {i.items.map((j) => (
                <li key={j.name}><img src={j.icon} />{j.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default SideNav;
