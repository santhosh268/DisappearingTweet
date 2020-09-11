import React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import Timer from "../Timer";
import "./card.css";

function TweetCard({ getTweet }) {
  return (
    <div>
      {getTweet.tweet.length > 0 &&
        getTweet.tweet.map((item, index) => {
          return (
            <div key={index} className="card_grid">
              <div className="card_text">
                <text className="display-txt">{item.text}</text>
              </div>
              <div className="time_grid">
                <div className="actualtime">
                  Expires in : <strong>{item.end_date.toString()}</strong>
                </div>
                <div className="timer">
                  <Timer time={item.end_date} get_index={index} />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    getTweet: state.tweet_reducer,
  };
};

export default connect(mapStateToProps)(TweetCard);
