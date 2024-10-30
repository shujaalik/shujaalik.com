import Navbar from "../Navbar"

const HeroSection = () => {
    return <div className="w-screen h-screen flex flex-col">
        <Navbar />
        <div className="w-screen h-3/5 flex justify-center items-center">
            <p className="text-7xl font-medium text-center tracking-wide">
                Muhammad <strong>Shuja</strong> Ali
                <br />
                Full Stack Developer
                <br />
                Based in Pakistan
            </p>
        </div>
    </div>
}

export default HeroSection