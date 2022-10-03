//REDUX
import { createStore, applyMiddleware, combineReducers } from "redux";
//REDUX-THUNK
import thunk from "redux-thunk";
//REDUX-DEVTOOLS-EXTENSION
import { composeWithDevTools } from "redux-devtools-extension";
//REDUCERS
import { userLoginReducer } from "./reducers/LoginReducers";
import {
  adminListReducer,
  EditAdminListReducer,
  UpdateAdminListReducer,
  DeleteAdminListReducer,
  AddAdminListReducer,
  adminDropdownReducer,
} from "./reducers/ListReducers";
import {
  AddUserListReducer,
  userListReducer,
  userListRequestReducer,
} from "./reducers/ListUserReducers";
import {
  caloriesAvgReducer,
  caloriesListReducer,
  totalEntriesReducer,
} from "./reducers/CaloriesListReducer";

//CALLING REDUCERS
const reducer = combineReducers({
  userLogin: userLoginReducer,
  adminList: adminListReducer,
  EditAdminList: EditAdminListReducer,
  UpdateAdminList: UpdateAdminListReducer,
  DeleteAdminList: DeleteAdminListReducer,
  userList: userListReducer,
  UserAddList: AddUserListReducer,
  caloriesList: caloriesListReducer,
  caloriesAvg: caloriesAvgReducer,
  totalEntries: totalEntriesReducer,
  AddAdminList: AddAdminListReducer,
  adminDropdown: adminDropdownReducer,
  userListRequest: userListRequestReducer,
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
