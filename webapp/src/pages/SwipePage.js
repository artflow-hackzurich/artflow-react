import React, { useState, useEffect } from 'react';
import FancyButton from '../components/FancyButton';
import SwipeArea from '../components/SwipeArea';
import BottomPane from '../components/BottomPane';
import MatchModal from '../components/MatchModal';

function SwipePage() {
  const sampleArtists = [
    { id: 1, name: 'Van Gogh', bio: 'Bio preview' },
    { id: 2, name: 'Da Vinci', bio: 'Bio preview' }
  ];
  const sampleArtworks = [
    { id: 1, title: 'Starry Night', year: 2021, desc: 'A timeless classic.', artist: sampleArtists[0], imageUrl: 'http://172.22.0.2:3000/starry-night.jpg' },
    { id: 2, title: 'Mona Lisa', year: 2021, desc: 'A timeless classic.', artist: sampleArtists[1], imageUrl: 'http://172.22.0.2:3000/mona-lisa.jpg' },
    { id: 3, title: 'Starry Night', year: 2021, desc: 'A timeless classic.', artist: sampleArtists[0], imageUrl: 'http://172.22.0.2:3000/starry-night.jpg' },
    { id: 4, title: 'Mona Lisa', year: 2021, desc: 'A timeless classic.', artist: sampleArtists[1], imageUrl: 'http://172.22.0.2:3000/mona-lisa.jpg' }
  ];

  const [artworks, setArtworks] = useState(sampleArtworks);
  const [modalVisible, setModalVisible] = useState(false);

  const onSwipe = (e) => {
    // Update artworks
    var newArtworks = [...artworks];
    newArtworks.shift();
    setArtworks(newArtworks);

    // Show modal
    if (e.detail.dir === 'right') {
      setModalVisible(true);
    }
  }

  useEffect(() => {
    window.addEventListener('swipe', onSwipe);
    return () => {
      window.removeEventListener('swipe', onSwipe);
    };
  }, []);

  return <>
    <section className="row flex-grow-1 d-flex flex-column overflow-hidden">
      <SwipeArea artworks={artworks} />
      <div className="text-center d-flex align-items-center justify-content-center pb-4">
        <FancyButton message="No" />
        <FancyButton message="Yes" />
      </div>
      <MatchModal artwork={artworks[0]} artist={artworks[0].artist} visible={modalVisible} />
    </section>
    <BottomPane />
  </>;
}

export default SwipePage;
