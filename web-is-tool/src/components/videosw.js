import React from "react";

function VideoSW(props){
  return (
    props.sw === "성공" ?   <video width="750" height="400" controls >
      <source src="https://firebasestorage.googleapis.com/v0/b/web-as-tool.appspot.com/o/test%2F20200227_190814.mp4?alt=media&token=3c95f8e7-59da-4c89-b3de-05713bfdc667" />
    </video> : <p style={{color:"#e3d2e1"}}>로그인 상태 : {props.words}</p>)
}

export default VideoSW
