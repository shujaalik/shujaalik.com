import Link from "next/link"
import Navbar from "../Navbar"
import VisibleOnScreenView from "../VisibleOnScreenView"
import { RiDownloadLine, RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri"

const HeroSection = () => {
    return <div className="w-screen flex flex-col">
        <Navbar />
        <div className="px-6 sm:px-10 py-20 sm:py-28 w-screen flex flex-col justify-center items-center">
            <VisibleOnScreenView>
                <div className="max-w-4xl text-center flex flex-col items-center">
                    <p className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-primary-three mb-3">
                        Systems Architect & Lead IoT / Full-Stack Engineer
                    </p>
                    <h1 className="ease-linear font-bold tracking-tight text-4xl sm:text-6xl xl:text-7xl mb-6">
                        Muhammad <strong className="font-extrabold text-primary-four">Shuja</strong> Ali
                    </h1>
                    <p className="font-poppins text-base sm:text-lg lg:text-xl text-slate-700 max-w-3xl leading-relaxed mb-8">
                        Architecting end-to-end industrial IoT solutions—from high-reliability edge firmware (FreeRTOS, ESP-IDF, Modbus RTU) to high-throughput time-series backends and real-time telemetry dashboards. Lead engineer powering 300+ industrial machines across tier-1 manufacturing facilities.
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <Link
                            href="/Muhammad_Shuja_Ali_Resume.pdf"
                            target="_blank"
                            download="Muhammad_Shuja_Ali_Resume.pdf"
                            className="inline-flex items-center gap-2 bg-primary-four text-white px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 hover:opacity-90 shadow"
                        >
                            <RiDownloadLine className="text-lg" />
                            <span>Download Resume</span>
                        </Link>
                        <Link
                            href="https://github.com/shujaalik"
                            target="_blank"
                            className="inline-flex items-center gap-2 border border-slate-300 px-5 py-3 rounded-full font-medium text-sm transition-all duration-200 hover:border-slate-800 hover:text-black"
                        >
                            <RiGithubFill className="text-lg" />
                            <span>GitHub</span>
                        </Link>
                        <Link
                            href="https://linkedin.com/in/shujaalik"
                            target="_blank"
                            className="inline-flex items-center gap-2 border border-slate-300 px-5 py-3 rounded-full font-medium text-sm transition-all duration-200 hover:border-slate-800 hover:text-black"
                        >
                            <RiLinkedinBoxFill className="text-lg text-blue-600" />
                            <span>LinkedIn</span>
                        </Link>
                    </div>
                </div>
            </VisibleOnScreenView>
        </div>
    </div>
}

export default HeroSection