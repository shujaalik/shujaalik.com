import Image from "next/image"
import Link from "next/link"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { RiDownloadLine } from "react-icons/ri"
import LogoImage from "@/imgs/site/logo.png"
import VisibleOnScreenView from "../VisibleOnScreenView"

const Navbar = () => {
  return <VisibleOnScreenView>
    <div className="h-36 w-full flex flex-row justify-around items-center px-4">
      <Socials />
      <Logo />
      <div className="flex items-center gap-6">
        <ResumeButton />
        <Email />
      </div>
    </div>
  </VisibleOnScreenView>
}

const ResumeButton = () => {
  return (
    <Link
      href="/Muhammad_Shuja_Ali_Resume.pdf"
      target="_blank"
      download="Muhammad_Shuja_Ali_Resume.pdf"
      className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-four text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:bg-primary-four hover:text-white"
    >
      <RiDownloadLine className="text-sm" />
      <span>Resume</span>
    </Link>
  )
}

const Email = () => {
  return <Link className="transition-all ease-linear duration-300 font-poppins text-sm font-medium opacity-90 hover:text-link-hover" href="mailto:me@shujaalik.com" target="_blank">me@shujaalik.com</Link>
}

const Logo = () => {
  return <div className="m-3">
    <Image className="h-auto w-20" alt={"Logo"} src={LogoImage} />
  </div>
}

const Socials = () => {
  return <div className="flex flex-row justify-around items-center gap-4 text-2xl">
    <SocialLink link="https://www.linkedin.com/in/shujaalik/">
      <FaLinkedin />
    </SocialLink>
    <SocialLink link="https://github.com/shujaalik">
      <FaGithub />
    </SocialLink>
  </div>
}

const SocialLink = ({
  link,
  children
}: {
  link: string,
  children: JSX.Element
}) => {
  return <Link href={link} target="_blank" className="hover:-translate-y-1 hover:text-link-hover ease-linear duration-100">
    {children}
  </Link>
}

export default Navbar

export {
  Email,
  Socials,
  ResumeButton
}