import React from 'react';
import './ArtworkCard.css';

class ArtworkCard extends React.Component {

  render() {
    return (
      <div className="artwork-card col card flex-grow-1 d-flex flex-column justify-content-end" style={{ backgroundImage: 'url(' + this.props.imageUrl + ')' }}>
        <div className="card-body flex-grow-0 p-4 pt-5">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.desc}</p>
        </div>
      </div>
    );
  }

}

export default ArtworkCard;
