import { Modal } from 'bootstrap';
import React, { useState, useEffect, useRef } from 'react';
import './MatchModal.css';

function MatchModal({ artwork, artist, visible }) {
  const [modal, setModal] = useState(null);
  const matchModal = useRef();
  useEffect(() => {
    setModal(
      new Modal(matchModal.current)
    )
  }, []);

  useEffect(() => {
    if (visible) {
      modal.show();
    }
  })

  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      modal.hide();
    }
  }

  // FIXME: I'm crappy
  return (
    <div className="modal fade" onClick={handleClick} ref={matchModal} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="false">
      <div className="modal-dialog modal-dialog-centered justify-content-center">
        <div className="modal-content">
          <div className="modal-body p-4 pb-3">
            <h3 className="text-center">Purchase</h3>
            <img src={ artwork.imageUrl } className="preview my-3 w-100" />
            <div className="artist-block d-flex gap-2 align-items-center">
              <img src={ artist.imageUrl } className="rounded-circle align-self-start" />
              <div className="details">
                <h6 className="my-1">{ artist.name }</h6>
              </div>
            </div>
            { artwork.price !== null && artwork.price > 0 &&
              <div className="d-flex flex-column gap-2 py-3 align-items-center justify-content-between">
              <p className="mb-0 fs-2 fw-bold">$ { artwork.price }</p>
              <button className="buy-btn bg-dark rounded-pill text-light">Buy now</button>
            </div> }
            { artwork.price !== null && artwork.price === 0 &&
              <div className="d-flex flex-column gap-2 py-3 align-items-center justify-content-between">
              <p className="mb-0 fs-2 fw-bold">Free</p>
              <button className="buy-btn bg-dark rounded-pill text-light">Learn more</button>
            </div> }
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchModal;
