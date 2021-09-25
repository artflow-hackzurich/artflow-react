import React from 'react';
import ArtworkCard, { DraggableArtworkCard } from '../components/ArtworkCard';
import './SwipeArea.css';

class SwipeArea extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      artworks: [
        { name: 'Starry Night', desc: 'A great classic', imageUrl: 'http://172.22.0.2:3000/starry-night.jpg' },
        { name: 'Mona Lisa', desc: 'Another one', imageUrl: 'http://172.22.0.2:3000/mona-lisa.jpg' },
        { name: 'Starry Night', desc: 'A great classic', imageUrl: 'http://172.22.0.2:3000/starry-night.jpg' },
        { name: 'Mona Lisa', desc: 'Another one', imageUrl: 'http://172.22.0.2:3000/mona-lisa.jpg' }
      ]
    }
    this.onSwipe = this.onSwipe.bind(this);
  }

  componentDidMount() {
    window.addEventListener('swipe', this.onSwipe, false);
  }

  componentWillUnmount() {
    window.removeEventListener('swipe', this.onSwipe, false);
  }

  onSwipe(e) {
    console.log("Swipe " + e.detail.dir);
    var newArtworks = [...this.state.artworks];
    newArtworks.shift();
    this.setState({ artworks: newArtworks });
  }

  render() {
    const front = this.state.artworks[0];
    const back = this.state.artworks[1];
    return (
      <div className="col flex-grow-1 d-flex p-4">
        {this.state.artworks.length >= 1 && <DraggableArtworkCard title={front.name} desc={front.desc} imageUrl={front.imageUrl} />}
        {this.state.artworks.length >= 2 && <ArtworkCard title={back.name} desc={back.desc} imageUrl={back.imageUrl} />}
      </div>
    );
  }

}

export default SwipeArea;
