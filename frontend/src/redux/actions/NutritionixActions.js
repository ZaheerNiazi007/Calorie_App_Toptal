// //AXIOS
// import axios from "axios";
// //NUTRITIONIX CONSTANTS
// import {
//   NUTRITIONIX_REQUEST,
//   NUTRITIONIX_SUCCESS,
//   NUTRITIONIX_FAILURE,
// } from "../constants/NutritionixConstants";

// //NUTRITIONIX ACTIONS

// export const listUserAction = () => async (dispatch) => {
//   try {
//     dispatch({ type: LIST_USER_REQUEST });
//     nutritionix.init(YOUR_APP_ID,YOUR_API_KEY);
//     const { data } = await axios.get("https://api.nutritionix.com/v1_1/search", nutritionix.init);
//     dispatch({
//       type: LIST_USER_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: LIST_USER_FAILURE,
//       payload: error.detail,
//     });
//   }
// };
