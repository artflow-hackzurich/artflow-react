import React from 'react';
import BottomPaneButton from './BottomPaneButton';
import './BottomPane.css';

function BottomPane() {
  return (
    <section className="bottom-pane row p-0">
      <BottomPaneButton exactLink={false} linkTo="/browse" message="Browse" />
      <BottomPaneButton exactLink={false} linkTo="/history" message="History" />
      <BottomPaneButton exactLink={false} linkTo="/messages" message="Messages" />
      <BottomPaneButton exactLink={false} linkTo="/profile" message="Profile" />
    </section>
  );
}

export default BottomPane;
