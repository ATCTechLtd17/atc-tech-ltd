/* eslint-disable @typescript-eslint/ban-ts-comment */

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./index.css";

export const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
