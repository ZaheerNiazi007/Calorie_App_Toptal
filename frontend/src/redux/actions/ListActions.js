//AXIOS
import axios from "axios";
//COMMON API
import { ApiServer } from "../../ApiConstant";
//LIST CONSTANTS
import {
  ADMIN_LIST_REQUEST,
  ADMIN_LIST_SUCCESS,
  ADMIN_LIST_FAILURE,
  ADD_LIST_ADMIN_REQUEST,
  ADD_LIST_ADMIN_SUCCESS,
  ADD_LIST_ADMIN_FAILURE,
  EDIT_ADMIN_LIST_REQUEST,
  EDIT_ADMIN_LIST_SUCCESS,
  EDIT_ADMIN_LIST_FAILURE,
  UPDATE_ADMIN_LIST_REQUEST,
  UPDATE_ADMIN_LIST_SUCCESS,
  UPDATE_ADMIN_LIST_FAILURE,
  DELETE_ADMIN_LIST_REQUEST,
  DELETE_ADMIN_LIST_SUCCESS,
  DELETE_ADMIN_LIST_FAILURE,
  ADMIN_USER__DROPDOWN_REQUEST,
  ADMIN_USER__DROPDOWN_SUCCESS,
  ADMIN_USER__DROPDOWN_FAILURE,
} from "../constants/ListConstants";

//ADMIN LIST ACTIONS
export const listAdminAction = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LIST_REQUEST });
    const config = {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo"))["access"]
        }`,
      },
    };
    const { data } = await axios.get(ApiServer + "/api/food_items/", config);
    dispatch({
      type: ADMIN_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_LIST_FAILURE,
      payload: error.detail,
    });
  }
};

//ADD ADMIN LIST ACTIONS

export const AddAdminListAction =
  ({ name, calories, date_taken_on, time_taken_at, user }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ADD_LIST_ADMIN_REQUEST,
      });
      const config = {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("userInfo"))["access"]
          }`,
        },
      };
      const { data } = await axios.post(
        ApiServer + "/api/food_items/",
        {
          name: name,
          calories: calories,
          date_taken_on: date_taken_on,
          time_taken_at: time_taken_at,
          user: user,
        },
        config
      );
      dispatch({
        type: ADD_LIST_ADMIN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_LIST_ADMIN_FAILURE,
        payload: error.detail,
      });
    }
  };

//EDIT ADMIN ACTIONS
export const EditlistAdminAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_ADMIN_LIST_REQUEST,
    });
    const config = {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo"))["access"]
        }`,
      },
    };
    const { data } = await axios.get(
      ApiServer + `/api/update_food_items/${id.id}`,
      config
    );
    dispatch({
      type: EDIT_ADMIN_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EDIT_ADMIN_LIST_FAILURE,
      payload: error.detail,
    });
  }
};
// UPDATE ADMIN ACTIONS
export const UpdatelistAdminAction =
  ({ name, id, calories, user, time_taken_at, date_taken_on }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_ADMIN_LIST_REQUEST,
      });
      const config = {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("userInfo"))["access"]
          }`,
        },
      };
      const { data } = await axios.put(
        ApiServer + `/api/update_food_items/${id.id}/`,
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
        type: UPDATE_ADMIN_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_ADMIN_LIST_FAILURE,
        payload: error.detail,
      });
    }
  };
// DELETE ADMIN ACTIONS
export const DeletelistAdminAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_ADMIN_LIST_REQUEST,
    });
    const config = {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo"))["access"]
        }`,
      },
    };
    const { data } = await axios.delete(
      ApiServer + `/api/delete_food_items/${id}`,
      config
    );
    dispatch({
      type: DELETE_ADMIN_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ADMIN_LIST_FAILURE,
      payload: error.detail,
    });
  }
};

//ADMIN USER DROPDOWN ACTIONS
export const DropdownAdminAction = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_USER__DROPDOWN_REQUEST });
    const config = {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo"))["access"]
        }`,
      },
    };
    const { data } = await axios.get(ApiServer + "/user/all_users", config);
    dispatch({
      type: ADMIN_USER__DROPDOWN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_USER__DROPDOWN_FAILURE,
      payload: error.detail,
    });
  }
};
