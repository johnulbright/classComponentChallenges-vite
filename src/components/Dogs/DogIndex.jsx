import React from "react";
import { Media,Button } from "reactstrap";

export default class DogIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        url: ''
    }
    this.getImage=this.getImage.bind(this);
  }

  getImage(){
      fetch('https://dog.ceo/api/breeds/image/random')
      .then(res=>res.json())
      .then(json=>{
          this.setState({url:json.message})
      })
      .catch(err=>console.log(err))
  }
  componentDidMount(){
      this.getImage();
  }
  render() {
    return(
      <div>
        <Media src={this.state.url} />
        <Button onClick={this.getImage}>New dog</Button>
      </div>
    )
  }
}
