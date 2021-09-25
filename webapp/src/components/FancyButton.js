import React from 'react';

class FancyButton extends React.Component {

  render() {
    return (
      <button type="button" className="btn btn-primary rounded-pill mx-1">{this.props.message}</button>
    );
  }

}

export default FancyButton;
