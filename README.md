Nextjs and Redux Toolkit testing

// Create a Next.js app
npx create-next-app@latest --ts

// Install Redux Toolkit
`npm i @reduxjs/toolkit`

// Install Redux Toolkit
`npm i react-redux`

//Create Redux and Redux Store

- Redux ( directory)
  | - features (directory)
  |- counter (directory)
  |- counterSlice.ts (file)
  |- counterSlice
  | - store.ts (file)

// Create Redux and Redux Store

```
import { configureStore } from "@reduxjs/toolkit";
import *Reducer from "./features/*slice";
export const store = configureStore({
  reducer: {
    *Reducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

// Create Slice

    STEP 1: Create a Slice
    Import createSlice, PayloadAction from @reduxjs/toolkit
    Create a Slice with name, initialState, reducers
    Export actions from Slice
    Export reducer from Slice
