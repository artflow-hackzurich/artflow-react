import React from 'react';
import ArtworkCard from '../components/ArtworkCard';

class SwipeArea extends React.Component {

  constructor(props){
    super(props);
    this.onSwipe = this.onSwipe.bind(this);
  }

  componentDidMount() {
    window.addEventListener('swipe', this.onSwipe, false);
  }

  componentWillUnmount() {
    window.removeEventListener('swipe', this.onSwipe, false);
  }

  onSwipe(e) {
    alert("swipe " + e.detail.dir + "!");
  }

  render() {
    return (
      <div className="col flex-grow-1 d-flex p-4">
        <ArtworkCard title="Starry Night" desc="A great classic" imageUrl="http://172.22.0.2:3000/starry-night.jpg" />
        <ArtworkCard title="Starry Night" desc="A great classic" imageUrl="http://172.22.0.2:3000/starry-night.jpg" />
      </div>
    );
  }

}

export default SwipeArea;
