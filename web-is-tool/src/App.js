import React from "react";
import logo from "./logo.svg";
import firebase from "firebase";
import { Button, Input } from "semantic-ui-react";
import styled from "styled-components";
import {ID, PW, image1, image2, image3, image4, small, big, imageList,VideoSW, Chatting} from "./components/datas.js";

// Set the configuration for your app
// TODO: Replace with your app's config object
var firebaseConfig = {
  apiKey: "AIzaSyBsvlQeTsMVePO4_vJSrl3sHrgf18SQTOY",
  authDomain: "web-as-tool.firebaseapp.com",
  databaseURL: "https://web-as-tool.firebaseio.com",
  projectId: "web-as-tool",
  storageBucket: "web-as-tool.appspot.com"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();
var provider = new firebase.auth.GoogleAuthProvider();

function uploadFile(anything) {
  var file = anything.target.files[0];
  var storageREF = storage.ref("test/" + file.name);
  var task = storageREF.put(file);
}

function testU() {
  // storage.ref("test").child("egypt.PNG").getDownloadURL().then(url => console.log(url))
  storage
    .ref()
    .child("test")
    .listAll()
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lsw: "LEe",
      identification: "",
      password: "",
      imgIdx : 0,
      imgshow : false,
      imgSize : small
    };
  }

  inputID = e => this.setState({ identification: e.target.value });

  inputPW = e => this.setState({ password: e.target.value });

  compare = e => {
    if (e.key == "Enter") {
      this.login();
    }
  };

  login = () => {
    if (this.state.identification === ID && this.state.password === PW) {
      alert("로그인 성공");
      this.setState({ lsw: "성공" });
    } else {
      alert("아이디나 비밀번호가 잘못되었습니다.");
      this.setState({ lsw: "로그인 실패" });
    }
  };

  logout = () => {
    this.setState({ lsw: "LEe" });
  };

glogin = ()=> {
  firebase.auth().signInWithPopup(provider).then(function(result) { // 자바스크립트의 Promise 구조를 찾아서 공부
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(user)
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}

 bigPicture = () => {
   this.setState({imgshow: !this.state.imgshow, imgSize : (!this.state.imgshow? big : small)})
 }

 changeBackgroundImage = () => {
   this.setState({imgIdx : (this.state.imgIdx + 1)})
 }


  render() {
    return (
      <div style = {{ backgroundImage : `url("${imageList[this.state.imgIdx % 3]}")` , backgroundPosition : "center", backgroundSize : "cover", padding : "384.5px"}} >
        <center>

          {this.state.lsw === "LEe" && !this.state.imgshow || this.state.lsw === "로그인 실패" ? (

            <div>
              <p style={{color:"#e6e6fa"}}>
              {" 아이디 "}
                <Input
                  size="large"
                  onChange={this.inputID}
                  onKeyPress={e => this.compare(e)}
                  placeholder="아이디"
                />
              </p>

              <p style={{color:"#e6e6fa"}}>
                비밀번호
                <Input
                  size="large"
                  onChange={this.inputPW}
                  onKeyPress={e => this.compare(e)}
                  type={"password"}
                  placeholder="비밀번호"
                />
              </p>
            </div>
          ) : (
            <p style={{color:"yellow"}}>로그인 성공</p>
          )}

          <Button onClick={()=>this.changeBackgroundImage()}>배경 바꾸기</Button>

        <p>
        {this.state.lsw === "성공" ? (
          <Button primary onClick={() => this.logout()}>
            로그아웃
          </Button>
        ) : (
          <Button secondary onClick={this.login}>
            로그인
          </Button>
        )}

        <Button onClick = {this.glogin} > Google login </Button>

        </p>

          <VideoSW sw={this.state.lsw} words={this.state.lsw} />
          <a href="http://www.naver.com">www.daum.net</a>

          <img onClick={(e)=> this.bigPicture(e)} src = {image4} style={this.state.imgSize} />

          <Chatting sw={this.state.lsw} lswlsw = {this.state.lsw}/>
          </center>
      </div>
    );
  }
}

export default App;
