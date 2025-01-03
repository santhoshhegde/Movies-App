import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
// import { store, persistor } from "./store/store";
import store from "./store/store";
import Body from "./Components/Body";
import Browse from "./Components/Browse";
// import { PersistGate } from "redux-persist/integration/react";
function App() {
  const approute = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <Provider store={store}>
      {/* <PersistGate loading={<div>Loading.....</div>} persistor={persistor}> */}
      <RouterProvider router={approute} />
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
