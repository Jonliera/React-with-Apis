import topsStoriesReducer from "../../reducers/top-stories-reducer";
import * as c from "../../actions/ActionTypes";

describe("topStoriesReducer", () => {
  let action;

  const initialState = {
    isLoaded: false,
    topStories: [],
    error: null,
  };

  test("successfully getting top stories should change isLoaded to true and update topStories", () => {
    const topStories = "An Article";
    action = {
      type: c.GET_TOP_STORIES_SUCCESS,
      topStories,
    };

    expect(topsStoriesReducer(initialState, action)).toEqual({
      isLoaded: true,
      topStories: "An Article",
      error: null,
    });
  });

  test("failing to get top stories should change isLoaded to true and update error", () => {
    const error = "An Error";
    action = {
      type: c.GET_TOP_STORIES_FAILURE,
      error,
    };

    expect(topsStoriesReducer(initialState, action)).toEqual({
      isLoaded: true,
      topStories: [],
      error: "An Error",
    });
  });
});

// Path: src/_tests_/reducers/top-stories-reducer.test.js
