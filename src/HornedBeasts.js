import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favs: 0,
    };
  }
  favorite = () => {
    this.setState({
      favs: this.state.favs + 1,
    });
  };
  handleImgClick = () => {
    this.props.temp(this.props.animal);
  };
  render() {
    return (
      <Card className='animals'>
        <h2>{this.props.animal.title}</h2>
        <img
          src={this.props.animal.image_url}
          alt={this.props.animal.title}
          onClick={this.handleImgClick}
        />
        <p>{this.props.animal.description}</p>
        <p>{this.state.favs} &hearts;</p>
        <Button onClick={this.favorite} variant='primary'>
          Favorite
        </Button>
      </Card>
    );
  }
}

export default HornedBeasts;
//
