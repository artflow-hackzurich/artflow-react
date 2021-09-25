import React from 'react';
import { Link } from "react-router-dom";
import './DetailsPage.css';

function DetailsPage({ artwork, artist }) {
  return (
    <section className="row">
      <div className="artwork-preview p-3 d-flex flex-column justify-content-between align-items-end" style={{ backgroundImage: 'url(' + artwork.imageUrl + ')' }}>
        <button type="button" className="ar-btn d-flex flex-column justify-content-center badge fs-6 p-0 pb-1 border-0 rounded-pill text-dark text-decoration-none text-center">AR</button>
        <Link to="/" className="back-btn d-flex flex-column justify-content-center badge px-0 pb-1 border-0 rounded-pill text-decoration-none text-center">&lt;</Link>
      </div>
      <div className="artwork-details px-4 pt-3 flex-grow-0">
        <h2>
          {artwork.name}
          <span className="fw-normal">, {artwork.year}</span>
        </h2>
        <p className="small mb-0">Dimensions</p>
        <p className="small mb-2">Medium</p>
        <p>{artwork.desc}</p>
      </div>
      <div className="artist-block border-top py-3 px-4 d-flex gap-3 align-items-center">
        <img src="https://s.gravatar.com/avatar/23463b99b62a72f26ed677cc556c44e8?s=400" className="align-self-start" />
        <div className="details flex-grow-1">
          <h6 className="my-1">{ artist.name }</h6>
          <p className="text-secondary small mb-0">{ artist.bio }</p>
        </div>
        <button type="button" className="contact-btn">Contact</button>
      </div>
    </section>
  );
}

export default DetailsPage;
