import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { delete_tweet } from "../redux/actions";

function Timer({ getTweet, time, get_index, deletefn }) {
  const call_deletefn = () => {
    console.log("Index is ", get_index);
    delete getTweet.tweet[get_index];
    const newTweetState = getTweet.tweet;
    console.log(newTweetState);
    deletefn(newTweetState);
  };

  const calculateTimeLeft = () => {
    const difference = time - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hr: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeleft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });
  const timerComponents = [];

  Object.keys(timeleft).forEach((interval) => {
    if (!timeleft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeleft[interval]}
        {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <div>{get_index > -1 && call_deletefn()}</div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    getTweet: state.tweet_reducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deletefn: (tweet) => dispatch(delete_tweet(tweet)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
