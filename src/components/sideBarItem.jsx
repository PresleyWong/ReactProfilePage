import React from "react";
import { NavLink } from "react-router-dom";

const SideBarItem = props => {
  const items = Object.keys(props.data);

  const collection = items.map((e, i) => {
    return (
      <li className="nav-item" key={i}>
        <NavLink
          exact
          activeClassName="nav-link js-scroll-trigger active"
          className="nav-link js-scroll-trigger"
          to={`/${e}`}
        >
          {e}
        </NavLink>
      </li>
    );
  });

  return collection;
};

export default SideBarItem;
