import React from 'react';
import FancyButton from '../components/FancyButton';
import SwipeArea from '../components/SwipeArea';

class SwipePage extends React.Component {

  render() {
    return (
      <section className="row flex-grow-1 d-flex flex-column">
        <SwipeArea />
        <div className="text-center d-flex align-items-center justify-content-center pb-4">
          <FancyButton message="Yes" />
          <FancyButton message="No" />
        </div>
      </section>
    );
  }

}

export default SwipePage;
