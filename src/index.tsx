import ReactDOM from "react-dom/client";
import "./index.css"
import enableMock from "./mock"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Pay from "./Pages/Pay";

import { RecoilRoot} from "recoil";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "/pay",
        element: <Pay />,
      },
])


enableMock()

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
