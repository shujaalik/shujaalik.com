"use client"
import { useEffect, useRef } from "react";

const VISIBILITY_PADDING = 100;

const VisibleOnScreenView = ({
    children
}: {
    children: JSX.Element | JSX.Element[]
}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const checkIfInView = () => {
            const rect = ref.current?.getBoundingClientRect();
            if (rect) {
                let { innerHeight } = window
                innerHeight += VISIBILITY_PADDING;
                const { top, bottom } = rect;
                // check if in view with a little bit of padding
                if (bottom < innerHeight && top < innerHeight) {
                    ref.current?.style.setProperty("opacity", "1");
                }
                else {
                    ref.current?.style.setProperty("opacity", "0");
                }
            }
        };

        // check if element is in view
        document.addEventListener("scroll", checkIfInView);

        return () => {
            // cleanup
            document.removeEventListener("scroll", checkIfInView);
        }
    }, []);

    return <div ref={ref} className="transition-all ease-linear duration-700">
        {children}
    </div>
}

export default VisibleOnScreenView