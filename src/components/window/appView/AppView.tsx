import { useEffect, useRef, useState } from "react";
import "./appView.css";

function AppView() {
    const onContextMenu = (e: any) => {
        e.preventDefault();
        let { clientX, clientY } = e;
        // console.log(object);
        setCntxt(`${clientY}-${clientX}`);
    };

    const [cntxt, setCntxt] = useState<string | null>(null);

    const onKill = () => {
        setCntxt(null);
    };

    return (
        <div onContextMenu={onContextMenu} className="__appsView">
            {cntxt && <Menu kill={onKill} cords={cntxt} />}
        </div>
    );
}

const texts = [
    "New Folder",
    "Get Info",
    "Change Desktop Background",
    "Use Stacks",
    "times",
    "open with VSC",
];
function Menu(props: { kill: () => void; cords: string }) {
    const kill = props.kill;
    const [animatiom, setAnimation] = useState("showDesktopAnim");

    const ref = useRef<HTMLDivElement | null>(null);

    const onKill = () => {
        setAnimation("hideDesktopAnim");
        setTimeout(() => kill(), 130);
    };

    useEffect(() => ref.current?.focus(), []);

    return (
        <div
            style={{
                top: props.cords.split("-")[0] + "px",
                left: props.cords.split("-")[1] + "px",
            }}
            tabIndex={0}
            onBlur={onKill}
            ref={ref}
            className={`__menu flex col __${animatiom}`}
        >
            {texts.map((txt, index) => (
                <>
                    <span key={index}>{txt}</span>
                    {index === 0 && <div className="line"> </div>}
                    {index === 3 && <div className="line"> </div>}
                </>
            ))}
        </div>
    );
}

export default AppView;
