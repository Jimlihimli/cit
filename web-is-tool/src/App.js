import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import ReactPlayer from 'react-player'

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

function uploadFile(anything){
  var file = anything.target.files[0]
  var storageREF = storage.ref("test/" + file.name)
  var task = storageREF.put(file)
}

function testU(){
  // storage.ref("test").child("egypt.PNG").getDownloadURL().then(url => console.log(url))
  storage.ref().child("test").listAll().then(res => {console.log(res)}).catch(err => console.log(err))
}

class App extends React.Component {
  render(){
    return (
      <div className="App" style={{backgroundColor: 'pink'}}>
      <p>안녕하세요</p>

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
