import { GET_TWEET, DELETE_TWEET } from "./types";

const initialState = {
  tweet: [],
};

export const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TWEET:
      const temp_state = state.tweet;
      temp_state.push({
        id: temp_state.length + 1,
        text: action.text,
        end_date: action.end_date,
        completed: false,
      });
      console.log("Added State is ", temp_state);
      return {
        ...state,
        tweet: temp_state,
      };

    case DELETE_TWEET:
      console.log("New State", action.new_state_tweet);
      return {
        ...state,
        tweet: action.new_state_tweet,
      };

    default:
      return state;
  }
};
