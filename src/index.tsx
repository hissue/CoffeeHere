import ReactDOM from "react-dom/client";
import "./index.css"
import enableMock from "./mock"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

// recoil
import { RecoilRoot} from "recoil";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    }
])


enableMock()

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
