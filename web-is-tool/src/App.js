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

function uploadFile(etaf){
  var file = etaf.target.files[0]
  var storageREF = storage.ref("test/" + file.name)
  var task = storageREF.put(file)
}

function testU(){

  // storage.ref("test").child("egypt.PNG").getDownloadURL().then(url => console.log(url))
  storage.ref().child("test").listAll().then(res => {console.log(res)}).catch(err => console.log(err))
}

function App() {
  return (
    <div className="App">
    <p>Web as Tool</p>
    <th style={{ display:'inline-block', width:'100px', height:'50px',  backgroundColor: 'pink'}}>project by me</th>
    <h1 style={{ color: 'orange' }}>
    subject</h1>
    <h3 style={{color:'tan'}}>another text</h3>
    <video width="500" height="30" controls src="https://firebasestorage.googleapis.com/v0/b/web-as-tool.appspot.com/o/test%2FModern%20Hip-Hop%2021-01-2020%2010-38.mp3?alt=media&token=3bb710c9-8898-4a4f-af6d-6a116457e748"/>
    <h2 style={{ color: 'blue' }}><button onClick = {()=>testU()}>Click here</button>
    <input type = 'file' onChange = {(e)=>uploadFile(e)}/>
    <video width="750" height="500" controls >
    <source src="https://firebasestorage.googleapis.com/v0/b/web-as-tool.appspot.com/o/test%2F%EC%B4%88%EB%8A%A5%EB%A0%A5%20%EC%B2%AB%EB%B2%88%EC%A7%B8%20%ED%8E%B8%EC%A7%91.mp4?alt=media&token=6b5d17cd-33b0-4591-a90f-61f3199c61a7"/>
    </video>
    </h2>
    <h1 style={{color:'royal blue' ,display:'inline-block', width:'1000px', height:'500px',  backgroundColor: 'green'}}></h1>
    <img src ="https://firebasestorage.googleapis.com/v0/b/web-as-tool.appspot.com/o/test%2Fegypt.PNG?alt=media&token=d8ecbf00-538a-478e-8b23-003f6744a29f"/>
    <style style={{ display:'inline-block', width:'100px', height:'100px',  backgroundColor: 'brown'}}/></div>
  );
}

export default App;
