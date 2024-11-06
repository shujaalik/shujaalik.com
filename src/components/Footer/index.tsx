import VisibleOnScreenView from "../VisibleOnScreenView"
import { Email, Socials } from "../Navbar"

const Footer = () => {
    return <VisibleOnScreenView>
        <div className="flex justify-around items-center w-screen py-10 border-t-2">
            <Copyright />
            <Email />
            <Socials />
        </div>
    </VisibleOnScreenView>
}

const Copyright = () => {
    return <div className="font-poppins text-sm">{`© ${new Date().getFullYear()} Shuja Ali. All Rights Reserved.`}</div>
}

export default Footer