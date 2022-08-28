import React from "react";
import Modal from "react-bootstrap/Modal";
import { Card } from "react-bootstrap";

class SelectedBeasts extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Card className='animals'>
          <Card.Body>
            <Card.Title>{this.props.animal.title}</Card.Title>
            <Card.Subtitle>{this.props.animal.favs}❤️ </Card.Subtitle>
            <img
              src={this.props.animal.image_url}
              alt={this.props.animal.title}
            />
            <p>{this.props.animal.description}</p>
          </Card.Body>
        </Card>
      </Modal>
    );
  }
}

export default SelectedBeasts;
