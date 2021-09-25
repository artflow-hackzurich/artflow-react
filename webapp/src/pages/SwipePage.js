import React from 'react';
import FancyButton from '../components/FancyButton';

class SwipePage extends React.Component {

  render() {
    return (
      <section className="row flex-grow-1 d-flex flex-column">
        <div className="flex-grow-1 d-flex align-items-center justify-content-center">
          <p>Cards</p>
        </div>
        <div className="text-center d-flex align-items-center justify-content-center py-2" style={{ background: '#EEE' }}>
          <FancyButton message="Yes" />
          <FancyButton message="No" />
        </div>
      </section>
    );
  }

}

export default SwipePage;
