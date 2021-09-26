import React from 'react';
import { useHistory } from "react-router-dom";
import BottomPane from '../components/BottomPane';
import './DetailsPage.css';

function DetailsPage() {
  let history = useHistory();

  // Apparently that's hacky, needs Redux or so
  let artwork = history.location.artwork;
  let artist = history.location.artist;

  if (!artwork || !artist) {
    // FIXME: Normally his would validate ID and load things from API
    artist = { id: 1, name: 'Van Gogh', bio: 'Bio preview' };
    artwork = { id: 1, title: 'Starry Night', year: 2021, desc: 'A timeless classic.', artist, imageUrl: 'http://172.22.0.2:3000/starry-night.jpg' };
  }

  return <>
      <section className="row overflow-scroll">
        <div className="artwork-preview p-3 d-flex justify-content-between align-items-start" style={{ backgroundImage: 'url(' + artwork.imageUrl + ')' }}>
          <button
              type="button"
              onClick={ /* FIXME: Swiped cards not preserved */ history.goBack}
              className="back-btn d-flex flex-column justify-content-center badge p-0 border-0 rounded-pill text-decoration-none align-items-center">
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '1rem', height: '1rem' }}>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 0.292893C9.09763 0.683417 9.09763 1.31658 8.70711 1.70711L3.41421 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H3.41421L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L0.292893 8.70711C-0.0976311 8.31658 -0.0976311 7.68342 0.292893 7.29289L7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893Z" fill="white"/>
            </svg>
          </button>
          <button type="button" className="ar-btn d-flex flex-column justify-content-center badge fs-6 p-0 pb-1 border-0 rounded-pill text-decoration-none text-center">AR</button>
        </div>
        <div className="artwork-details px-4 pt-3 flex-grow-0">
          <h2>
            {artwork.title}
            <span className="fw-normal">, {artwork.year}</span>
          </h2>
          <p className="small text-secondary mb-0">{ artwork.dims }</p>
          <p className="small text-secondary mb-2">{ artwork.medium }</p>
          <p className="small">{artwork.desc}</p>
        </div>
        <div className="artist-block pb-3 px-4 d-flex gap-2 align-items-center border-bottom">
          <img src={ artist.imageUrl } className="artist-image rounded-circle align-self-start" />
          <div className="details flex-grow-1">
            <h6 className="m-0">{ artist.name }</h6>
          </div>
          <button type="button" className="artist-details-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="black" stroke-width="2" stroke-linecap="square"/>
            </svg>
          </button>
        </div>
        <div className="d-flex gap-3 px-4 py-3 align-items-center justify-content-between">
          <p className="mb-0 fs-2 fw-bold">{ artwork.price }</p>
          <button className="buy-btn bg-dark rounded-pill text-light">Buy now</button>
        </div>
      </section>
      <BottomPane />
    </>;
}

export default DetailsPage;
