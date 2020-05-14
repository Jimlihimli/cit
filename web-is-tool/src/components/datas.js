import React from "react";
import styled from "styled-components";
import { Button, Input } from "semantic-ui-react";

const ID = "Leehi";
const PW = "1234";
const image1 = "https://firebasestorage.googleapis.com/v0/b/web-as-tool.appspot.com/o/test%2F20191231_124649.jpg?alt=media&token=32d4645d-6053-44fa-93a8-c022719a436a"
const image2 = "https://firebasestorage.googleapis.com/v0/b/web-as-tool.appspot.com/o/test%2F20190905_190034.jpg?alt=media&token=cab238b7-3ef8-43c7-ab8e-402ba763615b"
const image3 = "https://firebasestorage.googleapis.com/v0/b/web-as-tool.appspot.com/o/test%2F20190616_204257.jpg?alt=media&token=a251a65f-3262-4a47-81b8-376ad818a736"
const image4 = "https://firebasestorage.googleapis.com/v0/b/web-as-tool.appspot.com/o/test%2F20190331_143705.jpg?alt=media&token=ff343b8b-26dc-4a55-834b-021750591488"
const small = {width : "100px" ,height : "250px", color : "black", opacity : "0.7"}
const big = {width : "200px" ,height : "500px", color : "black"}
const imageList = [image1, image2, image3]
const chattings = [];

function VideoSW(props){
  return (
    props.sw === "성공" ?   <video width="750" height="400" controls >
      <source src="https://firebasestorage.googleapis.com/v0/b/web-as-tool.appspot.com/o/test%2F20200418_123741_39D7BF662.mp4?alt=media&token=30b1cb22-54c4-4c56-b0b9-2d5b87a62df3" />
    </video> : <p style={{color:"#e3d2e1"}}>로그인 상태 : {props.words}</p>)
}

class Chatting extends React.Component{
  constructor(props){
    super(props);
    this.state={
      chat:"",
      chatlist : []
    };
  }

register=e=>{
  this.setState({ chat : e.target.value});
};

chattingList=e=>{
  chattings[chattings.length] = {
    lists: this.state.chat
  };
  this.setState({ chatlist: chattings});
  alert("댓글이 등록되었습니다.");
  this.setState({ chat : ""});
};

  render(){
    return(
        <div>
        {this.props.lswlsw==="성공" ?

         <div>
          <Input placeholder="댓글을 입력하세요" onChange={this.register} value={this.state.chat}/>
          <Button content='등록' primary onClick={this.chattingList}/>

          {this.state.chatlist.map(e=>(<p>{e.lists}</p>))}

          </div>
          :
         <h3>채팅창을 사용하고 싶으시면 로그인하세요</h3>}
        </div>
    )
  }
}

export {ID, PW, image1, image2, image3, image4, small, big, imageList, VideoSW, Chatting}
