import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomPaneButton.css';

function BottomPaneButton({ exactLink, linkTo, message }) {
  return (
    <NavLink exact={exactLink} to={linkTo} activeClassName="active" className="bottom-pane-button col py-3 text-decoration-none text-center text-body">{message}</NavLink>
  );
}

export default BottomPaneButton;
