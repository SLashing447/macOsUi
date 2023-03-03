import { useState } from "react";
import AppView from "./appView/AppView";
import Doc from "./doc/Doc";
import StatusBar from "./statusBar/StatusBar";
import "./window.css";

function Window(props: { setShowBlur: (val: boolean) => void }) {
    const [isStatusHidden, setStatusHidden] = useState(false);

    return (
        <div
            onClick={() => {
                if (isStatusHidden) setStatusHidden(false);
            }}
            className={`__window flex col${isStatusHidden ? " multi" : ""}`}
        >
            {!isStatusHidden && <StatusBar />}
            <AppView />
            <Doc
                setStatusHidden={(val) => {
                    setStatusHidden(val);
                    props.setShowBlur(val);
                }}
            />
        </div>
    );
}

export default Window;
