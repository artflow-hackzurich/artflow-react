import React from 'react';
import './FancyButton.css';

class FancyButton extends React.Component {

  render() {
    return (
      <button type="button" className="fancy-btn btn btn-primary rounded-circle mx-3">{this.props.message}</button>
    );
  }

}

export default FancyButton;
