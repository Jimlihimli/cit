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
      color: "green",
      year: 2015, //State라는 property에 저장되어있는 객체의 index,
      sven : "IamSven"
    };
  }
  changeColor = () => {
    this.setState({color: "purple"});
  }
  changeYear = (data) => {
    this.setState({year: data.target.value});
      console.log(data.target.value)
    return 1
  }
  // changeBrand = () => {
  //   this.setProps({brand: "Nissan"});
  // }
  render() {
    return (
      <div>
        <h1>My {this.props.brand}</h1>
        <p>
          It is a {this.state.color} {this.props.model}
          from {this.state.year}.
        </p>

        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      <input onChange = {(event) => this.changeYear(event)} />
        <button
          type="button"
          onClick={this.changeYear}
        >Change year</button>
        <p> {this.state.sven}</p>
      </div>
      //
      // <button
      //   type="button"
      //   onClick={this.changeBrand}
      // >Change brand</button>
    );
  }
}

export {Name2, Car}
