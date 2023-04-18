import {
  createBrowserRouter
} from "react-router-dom";

import Page from '../src/assets/Page/LandingPage';
import Testing from './assets/Page/MovieStreaming';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },
  {
    path: "/page",
    element: <Page />,
  },
  {
    path: "/testing",
    element: <Testing />,
  },
]);

export default router;