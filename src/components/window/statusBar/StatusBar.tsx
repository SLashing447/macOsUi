import { useState } from "react";
import "./statusBar.css";

const icons = ["wifi", "srch", "adjust"];

function StatusBar() {
    const [state, setState] = useState("onWindow");

    const [time, setTime] = useState("9:41 AM");
    const [date, setDate] = useState("Mon Jan 18");

    return (
        <div className="__statusbar flex flexBetween">
            <div className="s1 flex flexCenter">
                <div className="logo flex flexCenter">
                    <img src="src/assets/icons/apple-w.png" alt="" />
                </div>
                {state === "onWindow" && (
                    <div className="window-texts">
                        <span>Messeges</span>
                        <span>Places</span>
                        <span>Files</span>
                        <span>Edit</span>
                        <span>View</span>
                        <span>Help</span>
                    </div>
                )}
            </div>{" "}
            <div className="s2 flex flexCenter">
                <div className="icons">
                    <li className="flex flexCenter icons"></li>
                    {icons.map((i) => (
                        <li className="flex flexCenter icons">
                            <img
                                src={"src/assets/icons/" + i + ".png"}
                                alt=""
                            />
                        </li>
                    ))}
                </div>
                <span>{date}</span>
                <span> {time}</span>
            </div>
        </div>
    );
}

export default StatusBar;
