import React from 'react';
import ArtworkCard, { DraggableArtworkCard } from '../components/ArtworkCard';
import './SwipeArea.css';

function SwipeArea({ artworks }) {
  const front = artworks[0];
  const back = artworks[1];
  return (
    <div className="col flex-grow-1 d-flex p-4">
      {artworks.length >= 1 && <DraggableArtworkCard artwork={artworks[0]} />}
      {artworks.length >= 2 && <ArtworkCard artwork={artworks[1]} />}
    </div>
  );
}

export default SwipeArea;
