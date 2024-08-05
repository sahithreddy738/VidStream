import { createBrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import MainContainer from "../components/MainContainer";
import WatchPage from "../components/WatchPage";
import SearchPage from "../components/SearchPage";
import App from "../App";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <MainContainer />,
          },
          {
            path: "/watch",
            element: <WatchPage />,
          },
          {
            path: "/results",
            element: <SearchPage />,
          },
        ],
      },
    ],
  },
]);

export default appRouter;
