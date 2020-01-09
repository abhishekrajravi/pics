import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }
  state = {};
  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;