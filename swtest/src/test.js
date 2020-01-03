import React from 'react';


let movie = ["moana", "b", "c","frozen" ,"e"]
let name = <p>승우</p>

function Name(SW) {
  return (<div>
    <p> {SW.name1} </p>
    <p> {SW.name2} </p>
  </div>)
}

class Name2 extends React.Component{
  render(){
    return(<p> {this.props.nam} </p>)
  }
}

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <h1>My {this.props.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.props.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}

export {Name2, Car}
