import Link from "next/link"
import VisibleOnScreenView from "../VisibleOnScreenView"


const MyInfo = () => {
    return <div className="flex flex-col items-center justify-between gap-5 w-screen px-2 sm:px-10 sm:flex-row lg:absolute xl:px-36">
        <LeftRow />
        <RightRow />
    </div>
}

const RightRow = () => {
    return <div className={`font-poppins flex flex-col items-center gap-20 justify-center text-center sm:items-end sm:text-right w-1/2`}>
        <Item position="right" title="years of experience">
            <p className="font-bold text-6xl">4+</p>
        </Item>
        <Item position="right" title="projects completed">
            <p className="font-bold text-6xl">20+</p>
        </Item>
        <Item position="right" title="client satisfaction">
            <p className="font-bold text-6xl">100%</p>
        </Item>
    </div>
}

const LeftRow = () => {
    return <div className={`font-poppins flex flex-col items-center gap-20 justify-center text-center sm:items-start sm:text-left w-1/2`}>
        <Item position="left" title="biography">
            <p>{"A versatile full-stack developer specializing in building robust web applications."}</p>
        </Item>
        <Item position="left" title="contact">
            <div className="flex flex-col gap-1">
                <Link className="transition-all ease-linear duration-300 hover:text-link-hover" target="_blank" href="mailto:me@shujaalik.com">me@shujaalik.com</Link>
            </div>
        </Item>
        <Item position="left" title="services">
            <p>{"Saas Development"}</p>
            <p>{"IoT Programming"}</p>
            <p>{"Full-Stack Development"}</p>
        </Item>
    </div>
}

const Item = ({
    title,
    position,
    children
}: {
    title: string,
    position: "left" | "right",
    children?: JSX.Element | JSX.Element[]
}) => {
    return <VisibleOnScreenView>
        <div className={`gap-6 flex flex-col w-full items-center sm:items-${position === "left" ? "start" : "end"}`}>
            <p className="uppercase opacity-70 text-sm font-medium">{title}</p>
            <div className="max-w-sm font-amiri text-2xl font-medium lg:max-w-xs">
                {children}
            </div>
        </div>
    </VisibleOnScreenView>
}

export default MyInfo