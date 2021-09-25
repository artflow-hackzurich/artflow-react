import React from 'react';
import ArtworkCard, { DraggableArtworkCard } from '../components/ArtworkCard';
import './SwipeArea.css';

class SwipeArea extends React.Component {

  constructor(props){
    super(props);

    const artists = [
      { id: 1, name: 'Van Gogh', bio: 'Bio preview' },
      { id: 2, name: 'Da Vinci', bio: 'Bio preview' }
    ];
    const artworks = [
      { id: 1, title: 'Starry Night', year: 2021, desc: 'A timeless classic.', artist: artists[0], imageUrl: 'http://172.22.0.2:3000/starry-night.jpg' },
      { id: 2, title: 'Mona Lisa', year: 2021, desc: 'A timeless classic.', artist: artists[1], imageUrl: 'http://172.22.0.2:3000/mona-lisa.jpg' },
      { id: 3, title: 'Starry Night', year: 2021, desc: 'A timeless classic.', artist: artists[0], imageUrl: 'http://172.22.0.2:3000/starry-night.jpg' },
      { id: 4, title: 'Mona Lisa', year: 2021, desc: 'A timeless classic.', artist: artists[1], imageUrl: 'http://172.22.0.2:3000/mona-lisa.jpg' }
    ];

    this.state = { artworks };
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
        {this.state.artworks.length >= 1 && <DraggableArtworkCard artwork={front} artist={front.artist} />}
        {this.state.artworks.length >= 2 && <ArtworkCard artwork={back} artist={back.artist} />}
      </div>
    );
  }

}

export default SwipeArea;
