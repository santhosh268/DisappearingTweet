import { GET_TWEET, DELETE_TWEET } from "./types";

const get_tweet = (input_text, input_end_date) => {
  return {
    type: GET_TWEET,
    text: input_text,
    end_date: input_end_date,
  };
};

const deleteTweet = (newtweet) => {
  return {
    type: DELETE_TWEET,
    new_state_tweet: newtweet,
  };
};

export const add_tweet = (text, dateTime) => {
  return (dispatch) => {
    dispatch(get_tweet(text, dateTime._d));
  };
};

export const delete_tweet = (tweet) => {
  return (dispatch) => {
    dispatch(deleteTweet(tweet));
  };
};
