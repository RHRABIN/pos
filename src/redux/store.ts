import { apiSlice } from "./api/apiSlice";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

// import { Middleware } from "redux";
// const middleware: Middleware[] = [apiSlice.middleware];
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

// Get the type of the dispatch method from the store
export type AppDispatch = typeof store.dispatch;
