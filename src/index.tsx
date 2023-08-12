import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"
import enableMock from "./mock"

import "./index.css"

enableMock()

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(<App />)
