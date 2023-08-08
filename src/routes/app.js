import Home from "../components/Home/index";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Account from "../components/Account";
import Feed from "../components/Feed";
import { FEATURES } from "../constants";
import SSAuthRoute from "../SSRouter/components/Routes/SSAuthRoute";

export const appRoutes = [
  {
    path: "/",
    element: <Home />,
    exact: true,
  },
  {
    path: "features",
    element: (
      <SSAuthRoute feature={FEATURES} element={Features} isAuth={true} />
    ),
  },
  {
    path: "pricing",
    element: <Pricing />,
  },
  {
    path: "account",
    element: <Account />,
  },
  {
    path: "feeds",
    element: (
      <SSAuthRoute isAuth={true} element={Feed} />
    ),
    exact: true,
  }
];
