import { appRoutes } from "./app"
import { feedRoutes } from "./feed"

export const rootChildren = [
  ...appRoutes,
  ...feedRoutes
]