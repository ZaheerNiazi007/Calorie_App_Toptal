//AXIOS
import axios from "axios";
//COMMON API
import { ApiServer } from "../../ApiConstant";
//LIST USER CONSTANTS
import {
  LIST_USER_REQUEST,
  LIST_USER_SUCCESS,
  LIST_USER_FAILURE,
  ADD_LIST_USER_REQUEST,
  ADD_LIST_USER_SUCCESS,
  ADD_LIST_USER_FAILURE,
  LIST_USER_CALORIES_REQUEST,
  LIST_USER_CALORIES_SUCCESS,
  LIST_USER_CALORIES_FAILURE,
} from "../constants/ListUserConstants";

//USER LIST ACTIONS
const user_id = JSON.parse(localStorage.getItem("user"));
export const listUserAction = () => async (dispatch) => {
  try {
    dispatch({ type: LIST_USER_REQUEST });
    const config = {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo"))["access"]
        }`,
      },
    };
    const { data } = await axios.get(
      ApiServer + `/api/food_items_by_user/${user_id}`,
      config
    );
    dispatch({
      type: LIST_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LIST_USER_FAILURE,
      payload: error.detail,
    });
  }
};

//ADD USER LIST ACTIONS

export const AddUserListAction =
  ({ name, user, calories, time_taken_at, date_taken_on }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ADD_LIST_USER_REQUEST,
      });
      const config = {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("userInfo"))["access"]
          }`,
        },
      };
      const { data } = await axios.post(
        ApiServer + "/api/add_food_items_by_user/",
        {
          calories: calories,
          date_taken_on: date_taken_on,
          name: name,
          time_taken_at: time_taken_at,
          user: user,
        },
        config
      );
      dispatch({
        type: ADD_LIST_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_LIST_USER_FAILURE,
        payload: error.detail,
      });
    }
  };

//USER CALORIES REQUEST ACTIONS
export const UserCaloriesRequestAction = () => async (dispatch) => {
  try {
    dispatch({ type: LIST_USER_CALORIES_REQUEST });
    const config = {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo"))["access"]
        }`,
      },
    };
    const { data } = await axios.get(
      ApiServer + `/api/food_calories_by_user/${user_id}`,
      config
    );
    console.log("sdfhsdskjf", data);
    dispatch({
      type: LIST_USER_CALORIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LIST_USER_CALORIES_FAILURE,
      payload: error.detail,
    });
  }
};
