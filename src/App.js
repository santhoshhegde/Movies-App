import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
  return <RouterProvider router={approute} />;
}

export default App;
