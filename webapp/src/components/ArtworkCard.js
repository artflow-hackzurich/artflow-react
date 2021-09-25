import React from 'react';
import { Link } from "react-router-dom";
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import './ArtworkCard.css';

function ArtworkCard({ title, year, artistName, imageUrl }) {
    return (
      <div
          className="artwork-card col card flex-grow-1 d-flex flex-column justify-content-end"
          style={{ backgroundImage: 'url(' + imageUrl + ')' }}>
        <div className="card-body flex-grow-0 p-4 pt-5">
          <h5 className="card-title d-flex">
            <Link to="/details" className="text-reset text-decoration-none">{title}</Link>
            <span className="fw-normal flex-grow-1">, {year}</span>
            <Link to="/details" className="artwork-card-info-button badge rounded-pill text-dark text-decoration-none">i</Link>
          </h5>
          <p className="card-text">{artistName}</p>
        </div>
      </div>
    );
}

function DraggableArtworkCard({ title, year, artistName, imageUrl }) {
  const windowWidth = document.documentElement.clientWidth;
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-0.6 * windowWidth, 0.6 * windowWidth], [-30, 30]);
  const opacity = useTransform(x, [-0.6 * windowWidth, -0.2 * windowWidth, 0, 0.2 * windowWidth, 0.6 * windowWidth], [0, 1, 1, 1, 0]);
  const animControls = useAnimation();

  const onDragEndHandler = (e, info) => {
    const windowWidth = document.documentElement.clientWidth;
    if (Math.abs(info.offset.x) <= 0.4 * windowWidth) {
      animControls.start({ x: 0 });
    } else {
      const isLeft = (info.offset.x < 0);
      const swipeEvent = new CustomEvent("swipe", {
        detail: {
          dir: (isLeft ? "left" : "right")
        }
      })
      const goAwayPromise = async () => {
        await animControls.start({ x: isLeft ? -windowWidth : windowWidth, opacity: 0 });
      }
      goAwayPromise().then(() => {
        x.set(0);
        window.dispatchEvent(swipeEvent);
      });
    }
  };

  return (
    <motion.div
        animate={animControls}
        drag="x"
        dragConstraints={{ left: -windowWidth, right: windowWidth }}
        className="artwork-card col card flex-grow-1 d-flex flex-column justify-content-end"
        style={{ x, rotate, opacity, backgroundImage: 'url(' + imageUrl + ')' }}
        onDragEnd={onDragEndHandler}>
      <div className="card-body flex-grow-0 p-4 pt-5">
        <h5 className="card-title d-flex">
          <Link to="/details" className="text-reset text-decoration-none">{title}</Link>
          <span className="fw-normal flex-grow-1">, {year}</span>
          <Link to="/details" className="artwork-card-info-button badge rounded-pill text-dark text-decoration-none">i</Link>
        </h5>
        <p className="card-text">{artistName}</p>
      </div>
    </motion.div>
  );
}

export { DraggableArtworkCard };
export default ArtworkCard;
