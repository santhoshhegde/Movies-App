import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Body from "./Components/Body";
import Browse from "./Components/Browse";
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
      <RouterProvider router={approute} />
    </Provider>
  );
}

export default App;
