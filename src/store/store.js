// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import userSlice from "../store/userSlice";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["user"],
// };

// const rootReducer = combineReducers({
//   user: userSlice,
// });
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: ["persist/PERSIST"], // Ignore the non-serializable error for persist actions
//       },
//     }),
// });

// const persistor = persistStore(store);

// export { store, persistor };

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../store/userSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
