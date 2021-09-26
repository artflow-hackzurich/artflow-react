import React from 'react';
import BottomPaneButton from './BottomPaneButton';
import './BottomPane.css';

function BottomPane() {
  return (
    <section className="bottom-pane row px-4 py-1 border-top">
      <BottomPaneButton linkTo="/browse" icon="search" />
      <BottomPaneButton linkTo="/history" icon="heart" />
      <BottomPaneButton linkTo="/messages" icon="message-circle" />
      <BottomPaneButton linkTo="/profile" icon="user" />
    </section>
  );
}

export default BottomPane;
