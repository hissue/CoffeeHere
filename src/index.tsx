import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import Pay from "./Pay";
import App from "./App"
import enableMock from "./mock"

enableMock()

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(<Pay />)
