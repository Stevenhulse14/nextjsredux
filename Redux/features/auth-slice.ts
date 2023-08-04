import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// Define a type for the slice state
interface AuthState {
  value: AuthPayload;
}
interface AuthPayload {
  isAuth: boolean;
  username: string;
  uid: string;
  isModerator: boolean;
}

// The initial state of the auth slice
const initialState: AuthState = {
  value: {
    isAuth: false,
    username: "",
    uid: "",
    isModerator: false,
  },
};
// createSlice is a function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (_, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          username: action.payload,
          uid: uuidv4(),
          isModerator: false,
        },
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { logOut, logIn } = auth.actions;

// The function below is called a selector and allows us to select a value from the state.
// Selectors can also be defined inline where they're used instead of in the slice file.
// For example: `useSelector((state: RootState) => state.auth.value)`
export default auth.reducer;
