import React from "react";
import { Button } from "semantic-ui-react";
import moment from "moment";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Comment: "",
      ComList: []
    };
  }

  upload = e => this.setState({ Comment: e.target.value });
  register = e => {
    let arr = this.state.ComList;
    arr[arr.length] = {
      content: this.state.Comment,
      time: moment().format("MMMM Do YYYY, h:mm:ss a")
    };
    this.setState({ ComList: arr, Comment: "" });
    console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
  };

  render() {
    return (
      <div>
        <input onChange={this.upload} value="wow" />
        <Button onClick={this.register}> 등록</Button>
        {this.state.ComList.map(com => (
          <p>{com.content + "  >>  " + com.time}</p>
        ))}
      </div>
    );
  }
}

export { Comment };

// {[<p>승우</p>, <p>sw</p>]}
