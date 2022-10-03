import axios from "axios";
import { ApiServer } from "../../ApiConstant";
import {
  CALORIES_LIST_REQUEST,
  CALORIES_LIST_SUCCESS,
  CALORIES_LIST_FAILURE,
  CALORIES_LIST_AVG_REQUEST,
  CALORIES_LIST_AVG_SUCCESS,
  CALORIES_LIST_AVG_FAILURE,
  TOTAL_ENTRIES_REQUEST,
  TOTAL_ENTRIES_SUCCESS,
  TOTAL_ENTRIES_FAILURE,
} from "../constants/CaloriesListConstants";

const user_id = JSON.parse(localStorage.getItem("user"));
export const listCaloriesAction = () => async (dispatch) => {
  try {
    dispatch({ type: CALORIES_LIST_REQUEST });
    const config = {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo"))["access"]
        }`,
      },
    };
    const { data } = await axios.get(
      ApiServer + `/api/food_calories_user_details/${user_id}`,
      config
    );
    dispatch({
      type: CALORIES_LIST_SUCCESS,
      payload: data,
    });
    console.log("actiondtaa", data);
  } catch (error) {
    dispatch({
      type: CALORIES_LIST_FAILURE,
      payload: error.detail,
    });
  }
};

// ADMIN LIST CALORIES AVERAGE

export const caloriesAvgAction = () => async (dispatch) => {
  try {
    dispatch({ type: CALORIES_LIST_AVG_REQUEST });
    const config = {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo"))["access"]
        }`,
      },
    };
    const { data } = await axios.get(
      ApiServer + "/api/average_calories/",
      config
    );
    dispatch({
      type: CALORIES_LIST_AVG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CALORIES_LIST_AVG_FAILURE,
      payload: error.detail,
    });
  }
};

// ADMIN LIST CALORIES AVERAGE

export const totalEntriesAction = () => async (dispatch) => {
  try {
    dispatch({ type: TOTAL_ENTRIES_REQUEST });
    const config = {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo"))["access"]
        }`,
      },
    };
    const { data } = await axios.get(ApiServer + "/api/enteries_sum/", config);
    dispatch({
      type: TOTAL_ENTRIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TOTAL_ENTRIES_FAILURE,
      payload: error.detail,
    });
  }
};
