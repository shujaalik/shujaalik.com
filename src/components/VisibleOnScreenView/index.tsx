"use client"
import { useEffect, useRef } from "react";

const VISIBILITY_PADDING = 100;

const VisibleOnScreenView = ({
    children,
    vidibilityPadding = VISIBILITY_PADDING
}: {
    children: JSX.Element | JSX.Element[],
    vidibilityPadding?: number
}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const checkIfInView = () => {
            const rect = ref.current?.getBoundingClientRect();
            if (rect) {
                let { innerHeight } = window
                innerHeight += vidibilityPadding;
                const { top, bottom } = rect;
                // check if in view with a little bit of padding
                if (bottom < innerHeight && top < innerHeight && bottom > 0) {
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
    }, [vidibilityPadding]);

    return <div ref={ref} className="transition-all ease-linear duration-500">
        {children}
    </div>
}

export default VisibleOnScreenView