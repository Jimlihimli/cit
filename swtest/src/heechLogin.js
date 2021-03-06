import React from "react";
import { Button } from "semantic-ui-react";

import egy from "./egypt.PNG";
// import tst from './test.jpg'

const ID = "swtest";
const PW = "sw1234";

class HeechLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pw: "",
      loginStatus: ""
    };
  }
  //'3' === 3 False
  // "3" == 3 True
  changeID = e => this.setState({ id: e.target.value });
  changePW = e => this.setState({ pw: e.target.value });
  changeID2 = e => {
    if (e.key == "Enter") {
      this.loginTest();
    }
  };
  loginTest = () => {
    if (this.state.id === ID && this.state.pw === PW) {
      alert("신규가입최대 배당 15% 놓치지마세요");
      this.setState({ loginStatus: "Login 성공!!" });
    } else {
      alert("로그인 실패..");
      this.setState({ loginStatus: "Login 실패!!" });
    }
  };

  render() {
    return (
      <div>
        <img src={egy} />
        <input onChange={this.changeID} onKeyPress={e => this.changeID2(e)} />
        <br />
        <input onChange={this.changePW} onKeyPress={e => this.changeID2(e)} />
        <Button onClick={this.loginTest}> 로그인하기</Button>
        <p> {this.state.loginStatus} </p>
      </div>
    );
  }
}

export { HeechLogin };
