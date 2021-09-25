import React from 'react';
import ArtworkCard from '../components/ArtworkCard';
import FancyButton from '../components/FancyButton';

class SwipePage extends React.Component {

  render() {
    return (
      <section className="row flex-grow-1 d-flex flex-column">
        <div className="col flex-grow-1 d-flex p-4">
          <ArtworkCard title="Starry Night" desc="A great classic" imageUrl="http://172.22.0.2:3000/starry-night.jpg" />
        </div>
        <div className="text-center d-flex align-items-center justify-content-center pb-4">
          <FancyButton message="Yes" />
          <FancyButton message="No" />
        </div>
      </section>
    );
  }

}

export default SwipePage;
