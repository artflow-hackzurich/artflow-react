import React from 'react';
import BottomPaneButton from './BottomPaneButton';
import './BottomPane.css';

function BottomPane() {
  return (
    <section className="bottom-pane row pt-0 px-4 pb-1">
      <BottomPaneButton linkTo="/browse" icon="search" />
      <BottomPaneButton linkTo="/history" icon="heart" />
      <BottomPaneButton linkTo="/messages" icon="message-circle" />
      <BottomPaneButton linkTo="/profile" icon="user" />
    </section>
  );
}

export default BottomPane;
