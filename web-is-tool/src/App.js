import React from "react";
import logo from "./logo.svg";
import firebase from "firebase";
import { Button, Input } from "semantic-ui-react";

import VideoSW from "./components/videosw.js";

import styled from "styled-components";

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

const ID = "Leehi";
const PW = "1234";
const image1 = "https://firebasestorage.googleapis.com/v0/b/web-as-tool.appspot.com/o/test%2F20191231_124649.jpg?alt=media&token=32d4645d-6053-44fa-93a8-c022719a436a"
const image2 = "https://firebasestorage.googleapis.com/v0/b/web-as-tool.appspot.com/o/test%2F20190905_190034.jpg?alt=media&token=cab238b7-3ef8-43c7-ab8e-402ba763615b"
const image3 = "https://firebasestorage.googleapis.com/v0/b/web-as-tool.appspot.com/o/test%2F20190616_204257.jpg?alt=media&token=a251a65f-3262-4a47-81b8-376ad818a736"

const imageList = [image1, image2, image3]


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lsw: "LEe",
      identification: "",
      password: "",
      imgIdx : 0
    };

  }

componentDidMount(){
  this.changeImage()
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


  changeImage = () => {
    setInterval(() => {
        this.setState({imgIdx : (this.state.imgIdx + 1)})
    }, 2000);

  }

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

  render() {
    console.log(this.state.imgIdx)
    return (
      <div style = {{ backgroundImage : `url("${imageList[this.state.imgIdx % 3]}")` , backgroundPosition : "center", backgroundSize : "cover"}}>
        <center>
        <br/><br/><br/><br/><br/><br/>
          {this.state.lsw === "LEe" || this.state.lsw === "로그인 실패" ? (
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

        <Button onClick = {this.glogin} > google login </Button>
        </p>

          <VideoSW sw={this.state.lsw} words={this.state.lsw} />

          </center>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      </div>
    );
  }
}

export default App;



// <p style={{backgroundColor: 'purple'}}>Web as Tool</p>
// <th style={{color:'blue',width:'80',height:'80',backgroundColor: 'yellow'}}>projected by me</th>
// <h1 style={{ color: 'orange' }}>e l y ts</h1>
// <h3 style={{color:'tan'}}>welcome</h3>
//
// <video width="500" height="30" controls src="https://firebasestorage.googleapis.com/v0/b/web-as-tool.appspot.com/o/test%2FModern%20Hip-Hop%2021-01-2020%2010-38.mp3?alt=media&token=3bb710c9-8898-4a4f-af6d-6a116457e748"/>
//
// <th style={{ display:'inline-block', width:'30px', height:'100px', backgroundColor: '#3db387'}}></th>
// <th style={{ display:'inline-block', width:'30px', height:'100px', backgroundColor: '#e856c6'}}></th>
// <th style={{ display:'inline-block', width:'30px', height:'100px', backgroundColor: '#b0fa7a'}}></th>
//
// <ul>
// <li><a href="https://ko-kr.facebook.com/36finalcut">스마일링</a></li>
// </ul>
//
// <h2 style={{ color: '#c142fc', width : '800px', height:'130px',backgroundColor:'#3f144a' }}><button onClick = {()=>testU()}>Click here</button>
// <input type = 'file' onChange = {(e)=>uploadFile(e)}/>
// <video width="750" height="500" controls >
// <source src="https://firebasestorage.googleapis.com/v0/b/web-as-tool.appspot.com/o/test%2F20200227_190814.mp4?alt=media&token=3c95f8e7-59da-4c89-b3de-05713bfdc667"/>
// </video>
// </h2>
// <h1 style={{ display:'inline-block', width:'500px', height:'500px', backgroundColor: '#02a839'}}></h1>
//
// <img src ="https://firebasestorage.googleapis.com/v0/b/web-as-tool.appspot.com/o/test%2Fegypt.PNG?alt=media&token=d8ecbf00-538a-478e-8b23-003f6744a29f"/>
// <h1 style={{ display:'inline-block', width:'100px', height:'100px', backgroundColor: 'brown'}}></h1>

// import React from "react";
// import logo from "./logo.svg";
// import firebase from "firebase";
//
// // Set the configuration for your app
// // TODO: Replace with your app's config object
// var firebaseConfig = {
//   apiKey: "AIzaSyBsvlQeTsMVePO4_vJSrl3sHrgf18SQTOY",
//   authDomain: "web-as-tool.firebaseapp.com",
//   databaseURL: "https://web-as-tool.firebaseio.com",
//   projectId: "web-as-tool",
//   storageBucket: "web-as-tool.appspot.com"
// };
// firebase.initializeApp(firebaseConfig);
//
// // Get a reference to the storage service, which is used to create references in your storage bucket
// var storage = firebase.storage();
//
// function uploadFile(anything) {
//   var file = anything.target.files[0];
//   var storageREF = storage.ref("test/" + file.name);
//   var task = storageREF.put(file);
// }
//
// function testU() {
//   // storage.ref("test").child("egypt.PNG").getDownloadURL().then(url => console.log(url))
//   storage
//     .ref()
//     .child("test")
//     .listAll()
//     .then(res => {
//       console.log(res);
//     })
//     .catch(err => console.log(err));
// }
//
// const ID="Leehi";
// const PW ="helloworld"
//
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       lsw: "LEe",
//       identification: "",
//       password: ""
//     };
//   }
//
//   inputID=e=>this.setState({identification : e.target.value});
//
//   inputPW=e=>this.setState({password : e.target.value});
//
//   compare=e=>{
//     if(e.key=="Enter"){
//       this.login();
//     }
//   };
//
//   login=()=>{
//     if(this.state.identification===ID && this.state.password===PW){
//       alert("로그인 성공");
//       this.setState({lsw : "로그인 성공"});
//     } else {
//       alert("아이디나 비밀번호가 잘못되었습니다.");
//       this.setState({lsw : "로그인에 실패하셨습니다."});
//     }
//   };
//
//   render() {
//
//     return (
//       <div style={{backgroundColor: "#20F577"}}>
//         <p>
//           {"아이디"}
//           <input onChange={this.inputID} onKeyPress={e=>this.compare(e)}/>
//         </p>
//         <p>
//           비밀번호
//           <input onChange={this.inputPW} onKeyPress={e=>this.compare(e)} type={"password"} />
//         </p>
//         <button onClick={this.login}>로그인 확인</button>
//         <p> {this.state.lsw} </p>
//       </div>
//     );
//   }
// }
//
// export default App;
