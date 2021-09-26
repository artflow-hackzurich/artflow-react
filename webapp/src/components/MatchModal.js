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

  // FIXME: I'm crappy
  return (
    <div className="modal fade" ref={matchModal} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="false">
      <div className="modal-dialog modal-dialog-centered justify-content-center">
        <div className="modal-content">
          <div className="modal-body p-4">
            <h3 className="text-center">It's a match!</h3>
            <img src={ artwork.imageUrl } className="preview my-3 w-100" />
            <div className="artist-block py-2 d-flex gap-3 align-items-center">
              <img src="https://s.gravatar.com/avatar/23463b99b62a72f26ed677cc556c44e8?s=400" className="align-self-start" />
              <div className="details flex-grow-1">
                <h6 className="my-1">{ artist.name }</h6>
                <p className="text-secondary small mb-0">{ artist.bio }</p>
              </div>
            </div>
            <p className="text-center fs-2 mt-3 mb-1">$1500</p>
            <button className="text-center btn rounded-pill bg-dark text-light mx-auto d-block w-50">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchModal;
