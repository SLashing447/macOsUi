import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./style/base/base.css";
import "./style/global/global.css";
import "./style/colors/colors.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
