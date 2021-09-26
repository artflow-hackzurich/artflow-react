import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import BottomPane from '../components/BottomPane';
import './ArPage.css';

function ArPage() {
  let history = useHistory();
  useEffect(() => {
    document.getElementsByTagName('video')[0].play();
  }, []);

  return <>
      <section className="row overflow-hidden">
        <div className="col px-0 ar-preview-container">
          <button
              type="button"
              onClick={ /* FIXME: Swiped cards not preserved */ history.goBack}
              className="back-btn d-flex flex-column justify-content-center badge p-0 border-0 rounded-pill text-decoration-none align-items-center">
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '1rem', height: '1rem' }}>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 0.292893C9.09763 0.683417 9.09763 1.31658 8.70711 1.70711L3.41421 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H3.41421L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L0.292893 8.70711C-0.0976311 8.31658 -0.0976311 7.68342 0.292893 7.29289L7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893Z" fill="white"/>
            </svg>
          </button>
          <video className="w-100 ar-preview-video" autoplay>
            <source src="/ar-preview.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <BottomPane />
    </>;
}

export default ArPage;
