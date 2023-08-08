import SSAuthRoute from "../SSRouter/components/Routes/SSAuthRoute";
import { VIEW_FEED } from "../constants";
import ViewFeed from '../components/Feed/ViewFeed';

export const feedRoutes = [
  {
    path: "/feeds/:id",
    element: (
      <SSAuthRoute isAuth={true} feature={VIEW_FEED} element={ViewFeed} />
    ),
    exact: true,
  }
]