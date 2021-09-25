import React from 'react';
import ArtworkCard, { DraggableArtworkCard } from '../components/ArtworkCard';
import './SwipeArea.css';

class SwipeArea extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      artworks: [
        { name: 'Starry Night', year: 2021, artistName: 'Van Gogh', imageUrl: 'http://172.22.0.2:3000/starry-night.jpg' },
        { name: 'Mona Lisa', year: 2021, artistName: 'Da Vinci', imageUrl: 'http://172.22.0.2:3000/mona-lisa.jpg' },
        { name: 'Starry Night', year: 2021, artistName: 'Van Gogh', imageUrl: 'http://172.22.0.2:3000/starry-night.jpg' },
        { name: 'Mona Lisa', year: 2021, artistName: 'Da Vinci', imageUrl: 'http://172.22.0.2:3000/mona-lisa.jpg' }
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
        {this.state.artworks.length >= 1 && <DraggableArtworkCard title={front.name} year={front.year} artistName={front.artistName} imageUrl={front.imageUrl} />}
        {this.state.artworks.length >= 2 && <ArtworkCard title={back.name} year={back.year} artistName={back.artistName} imageUrl={back.imageUrl} />}
      </div>
    );
  }

}

export default SwipeArea;
