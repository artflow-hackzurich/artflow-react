import React from 'react';
import { matchPath } from 'react-router';
import { NavLink, useHistory } from 'react-router-dom';

function BottomPaneButton({ linkTo, icon }) {
  let history = useHistory();

  const pathname = history.location.pathname;
  const isActive = matchPath(pathname, {
    path: linkTo,
    exact: false,
    strict: false
  });

  return (
    <NavLink to={linkTo} activeClassName="active" className="bottom-pane-button col py-3 text-decoration-none text-center text-body">
      <img src={'/icons/' + icon + (isActive ? '-active' : '') + '.svg'} />
    </NavLink>
  );
}

export default BottomPaneButton;
