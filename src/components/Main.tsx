import React, { useState } from "react";
import Window from "./window/Window";

function Main() {
    const [state, setState] = useState("window");
    const [showBlur, setShowBlur] = useState(false);

    return (
        <div className={`__main${showBlur ? " sBlr" : ""}`}>
            {state === "window" && <Window setShowBlur={setShowBlur} />}
        </div>
    );
}

export default Main;
