import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import FancyButton from '../components/FancyButton';
import SwipeArea from '../components/SwipeArea';
import BottomPane from '../components/BottomPane';
import MatchModal from '../components/MatchModal';

function SwipePage() {
  const sampleArtists = [
    { id: 1, name: 'Stuart Davis', bio: 'Bio preview', imageUrl: '/artists/stuart-davis.png' },
    { id: 2, name: 'Raphael Hefti', bio: 'Bio preview', imageUrl: '/artists/raphael-hefti.jpg' },
    { id: 3, name: 'Christo and Jean-Claude', bio: 'Bio preview', imageUrl: '/artists/christo-jean-claude.jpg' },
    { id: 4, name: 'Pieter de Hoock', bio: 'Bio preview', imageUrl: '/artists/pieter-de-hoock.jpg' }
  ];

  const MediumStillLife = 'With its abstract arrangement of colorful forms, "Medium Still Life" demonstrates Davis\'s use of what he called "color-space." The artist had developed the idea that the juxtaposition of strong colors could create spatial relationships within a painting, without the use of traditional perspective. He articulated his theories on the use of color in the 1940s, saying, "I think of it as another element like line and space… as an interval of space.… People use to think of color and form as two things. I think of them as the same thing."';
  const LArcDeTriompheWrapped = 'In 1961, three years after they met in Paris, Christo and Jeanne-Claude began creating works of art in public spaces. One of their projects was to wrap a public building. When he arrived in Paris, Christo rented a small room near the Arc de Triomphe and had been attracted by the monument ever since. In 1962, he made a photomontage of the Arc de Triomphe wrapped, seen from the Avenue Foch and, in 1988, a collage. 60 years later, the project will finally be concretized. Exhibition from September 18 to Sunday, October 3, 2021.';
  const RaphaelHefti = '> This will be the description of the Raphael Hefti\'s work';
  const TheBedroom = 'Pieter de Hooch excelled in the sensitive depiction of people going about their daily lives, be it inside their houses or in the sheltered environment of an urban courtyard. Through his careful arrangement of the interior space in The Bedroom and his treatment of light, De Hooch infused this everyday scene with an extraordinary intimacy and warmth. ';

  const sampleArtworks = [
    { id: 1, title: 'Medium Still Life', year: '1953', desc: MediumStillLife, artist: sampleArtists[0], imageUrl: '/artworks/medium-still-life.jpg', dims: '114.3 x 91.44 cm', price: 550, medium: 'Painting - Oil on canvas' },
    { id: 2, title: 'Salutary Failures, Message Not Sent', year: '2020', desc: RaphaelHefti, artist: sampleArtists[1], imageUrl: '/artworks/raphael-hefti-artwork.jpeg', dims: '114.3 x 91.44 cm', price: 18, medium: 'Painting - Oil on canvas' },
    { id: 3, title: 'L\'Arc de  Triomphe, Wrapped', year: '1961-2021', desc: LArcDeTriompheWrapped, artist: sampleArtists[2], imageUrl: '/artworks/arc.webp',  dims: '', price: 0, medium: 'Exhibition in Paris' },
    { id: 4, title: 'The Bedroom', year: '1658', desc: TheBedroom, artist: sampleArtists[3], imageUrl: '/artworks/the-bedroom.jpg',  dims: '51 x 60 cm', price: 1200, medium: 'Painting - Oil on canvas'}
  ];

  const [artworks, setArtworks] = useState(sampleArtworks);
  const [currentArtwork, setCurrentArtwork] = useState(sampleArtworks[0]);
  const [modalVisible, setModalVisible] = useState(false);

  const history = useHistory();

  const onSwipe = (e) => {
    if (e.detail.dir === 'right') {
      setCurrentArtwork(artworks[0]);
    }

    // Update artworks
    var newArtworks = [...artworks];
    const currentArtwork = newArtworks.shift();
    setArtworks(newArtworks);

    // Show modal
    if (e.detail.dir === 'right') {
      //setModalVisible(true);
      const detailsLinkTo = {
        pathname: '/artwork/' + currentArtwork.id,
        artwork: currentArtwork,
        artist: currentArtwork.artist
      }
      history.push(detailsLinkTo);
    }
  };

  useEffect(() => {
    window.addEventListener('swipe', onSwipe);
    return () => {
      window.removeEventListener('swipe', onSwipe);
    };
  });

  return <>
    <section className="row flex-grow-1 d-flex flex-column overflow-hidden">
      <SwipeArea artworks={artworks} />
      <div className="text-center d-flex align-items-center justify-content-center pb-4">
        <FancyButton customClass="btn-dont-like" icon="dont-like" />
        <FancyButton customClass="btn-like" icon="like" />
      </div>
      { artworks.length > 0 && <MatchModal artwork={currentArtwork} artist={currentArtwork.artist} visible={modalVisible} /> }
    </section>
    <BottomPane />
  </>;
}

export default SwipePage;
