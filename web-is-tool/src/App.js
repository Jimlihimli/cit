import React from "react";
import logo from "./logo.svg";
import firebase from "firebase";
import { Button } from 'semantic-ui-react'

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lsw: "LEe",
      identification: "",
      password: ""
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
      this.setState({ lsw: "로그인 성공" });
    } else {
      alert("아이디나 비밀번호가 잘못되었습니다.");
      this.setState({ lsw: "로그인 실패" });
    }
  };

  playMultimedia = () => {
    if (this.state.lsw === "로그인 성공") {
      return (
        <video width="750" height="500" controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/web-as-tool.appspot.com/o/test%2F20200227_190814.mp4?alt=media&token=3c95f8e7-59da-4c89-b3de-05713bfdc667" />
        </video>
      );
    } else {
      return <p>로그인부터 하시죠!</p>;
    }
  };

  logout = () => {
    this.setState({ lsw: "LEe" });
  };

  render() {
    return (
      <div style={{ backgroundColor: "#20F577" }}>
      <Button primary> asfsld </Button>
        <p>
          {this.state.lsw === "LEe" || this.state.lsw === "로그인 실패" ? (
            <div>
              <p>아이디</p>
              <input
                onChange={this.inputID}
                onKeyPress={e => this.compare(e)}
                placeholder="아이디를 입력해?!."
              />
              <p>
                비밀번호
                <input
                  onChange={this.inputPW}
                  onKeyPress={e => this.compare(e)}
                  type={"password"}
                />
              </p>
            </div>
          ) : (
            <p>로그인 성공</p>
          )}
        </p>

        {this.state.lsw === "로그인 성공" ? (
          <button onClick={()=> this.logout()}>로그아웃</button>
        ) : (
          <button onClick={this.login}>로그인</button>
        )}
        <div>
          {this.state.lsw === "로그인 성공" ? (
            <video width="750" height="500" controls>
              <source src="https://firebasestorage.googleapis.com/v0/b/web-as-tool.appspot.com/o/test%2F20200227_190814.mp4?alt=media&token=3c95f8e7-59da-4c89-b3de-05713bfdc667" />
            </video>
          ) : (
            <p>로그인을 하라.!</p>
          )}
        </div>
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
