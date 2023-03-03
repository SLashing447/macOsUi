import { useState } from "react";
import "./doc.css";

const apps = [
    "finder",
    "discord",
    "whatsapp",
    "telegram",
    "vsc",
    "apps-store",
    "brave",
    "photo",
    "chrome",
    "srvr",
    "trash",
    "menu",
];

function Doc(props: { setStatusHidden: (val: boolean) => void }) {
    const [hoverIndex, setHoverIndex] = useState<number>(-69);
    const [clickIndex, setClickIndex] = useState(-69);
    const [isDocHidden, setDocHide] = useState(false);

    const onMenuClick = () => {
        setDocHide(true);
        props.setStatusHidden(true);
    };

    if (!isDocHidden) {
        return (
            <div className="__windowDoc flex flexCenter">
                <main>
                    {apps.map((app, index) => {
                        return (
                            <>
                                {" "}
                                {index === 9 && <span className="liner"></span>}
                                {index === 1 && <span className="liner"></span>}
                                <li
                                    onMouseEnter={() => setHoverIndex(index)}
                                    onMouseLeave={() => setHoverIndex(-69)}
                                    className="flex flexCenter"
                                    key={index}
                                    aria-details={app}
                                    style={
                                        clickIndex === index
                                            ? {
                                                  animation:
                                                      "appShower 0.3s linear",
                                              }
                                            : {}
                                    }
                                    onClick={() => {
                                        setClickIndex(index);
                                        if (index === 11) {
                                            onMenuClick();
                                        }
                                    }}
                                    about={`${
                                        hoverIndex - 1 === index ||
                                        hoverIndex - 2 === index ||
                                        hoverIndex + 1 === index ||
                                        hoverIndex + 2 === index
                                            ? `s${hoverIndex - index}`
                                            : ""
                                    }`}
                                >
                                    <img
                                        draggable="false"
                                        src={`src/assets/icons/${app}.png`}
                                    />
                                </li>
                            </>
                        );
                    })}
                </main>
            </div>
        );
    } else {
        return <></>;
    }
}

export default Doc;
