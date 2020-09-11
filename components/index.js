import React from "react";
import { Input, DatePicker, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./inputbox.css";
import { connect } from "react-redux";
import { add_tweet } from "../redux/actions";
import moment from "moment";

function InputBox({ tweetVal, addTweet }) {
  let dateTime = undefined;
  let diff = 0;

  const disableDate = (current) => {
    return current < moment().startOf("day");
  };

  const onOk = (value) => {
    diff = value - new Date();
    console.log(diff);
    if (diff > 0) {
      if (value) {
        dateTime = value;
      } else {
        dateTime = undefined;
      }
    } else {
      alert("Choose Time Greater than Current Time");
      diff = -1;
    }
  };
  const addTweetToList = () => {
    const text_val = document.getElementById("inputboxval").value;
    if (text_val.length > 0 && dateTime && diff > 0) {
      addTweet(text_val, dateTime);
    }
  };

  return (
    <div className="input_grid">
      <div className="inputBox">
        <Input.Group compact>
          <Input
            style={{ width: "50%" }}
            defaultValue="Sample Tweet"
            id="inputboxval"
          />
          <DatePicker
            showTime
            disabledDate={disableDate}
            style={{ width: "50%" }}
            onOk={onOk}
          />
        </Input.Group>
      </div>
      <div>
        <Button
          shape="circle"
          icon={<PlusOutlined />}
          className="button"
          onClick={addTweetToList}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tweetVal: state.tweet_reducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTweet: (text, date) => dispatch(add_tweet(text, date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputBox);
