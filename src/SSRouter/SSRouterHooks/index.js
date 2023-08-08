import {
  useNavigate as useNavigateHook,
  useParams as useParamsHook,
  useLocation as useLocationHook,
  useLoaderData as useLoaderDataHook
} from "react-router-dom";

/**
 * @function useNavigate
 * @description 
 * A custom hook that provides a navigation function to programmatically navigate between routes in the application.
 *
 * @returns {Function} The navigate function that can be used to navigate to a different route.
 */
export const useNavigate = () => {
  return useNavigateHook();
};

/**
 * @function useParams
 * @description
 * A custom hook that returns the URL parameters extracted from the current route in the application.
 *
 * @returns {Object} An object containing the key-value pairs of URL parameters.
 */
export const useParams = () => {
  return useParamsHook();
};

/**
 * @function useLocation
 * @description 
 * A custom hook that provides access to the current URL location in the application.
 *
 * @returns {Object} An object containing information about the current URL location.
 */
export const useLocation = () => {
  return useLocationHook();
};

/**
 * @function useLoaderData
 * @description
 * A custom hook that fetches and provides loader data before component rendering.
 *
 * @returns {any} The loader data fetched 
 */
export const useLoaderData = () => {
  return useLoaderDataHook();
}