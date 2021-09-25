import React, { useState, useEffect } from 'react';
import FancyButton from '../components/FancyButton';
import SwipeArea from '../components/SwipeArea';
import BottomPane from '../components/BottomPane';
import MatchModal from '../components/MatchModal';

function SwipePage() {
  const artist = { id: 1, name: 'Van Gogh', bio: 'Bio preview' };
  const artwork = { id: 1, title: 'Starry Night', year: 2021, desc: 'A timeless classic.', artist, imageUrl: 'http://172.22.0.2:3000/starry-night.jpg' };

  const [modalVisible, setModalVisible] = useState(false);
  const onSwipe = (e) => {
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
      <SwipeArea />
      <div className="text-center d-flex align-items-center justify-content-center pb-4">
        <FancyButton message="No" />
        <FancyButton message="Yes" />
      </div>
      <MatchModal artwork={artwork} artist={artwork.artist} visible={modalVisible} />
    </section>
    <BottomPane />
  </>;
}

export default SwipePage;
