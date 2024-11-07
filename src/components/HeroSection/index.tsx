import Navbar from "../Navbar"
import VisibleOnScreenView from "../VisibleOnScreenView"

const HeroSection = () => {
    return <div className="w-screen flex flex-col">
        <Navbar />
        <div className="px-10 py-32 w-screen h-3/5 flex justify-center items-center">
            <VisibleOnScreenView>
                <p className="ease-linear font-medium text-center tracking-wide text-5xl
            md:text-6xl
            xl:text-7xl">
                    Muhammad <strong>Shuja</strong> Ali
                    <br />
                    Full Stack Developer
                    <br />
                    Based in Pakistan
                </p>
            </VisibleOnScreenView>
        </div>
    </div>
}

export default HeroSection