import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import LogoImage from "@/lib/logo.png"

const Navbar = () => {
  return <div className="h-36 w-full flex flex-row justify-around items-center">
    <Socials />
    <Logo />
    <Email />
  </div>
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

  return <div className="hidden flex-row justify-around items-center gap-3 text-3xl
  md:flex">
    <SocialLink link="https://www.instagram.com/shujaalik">
      <FaInstagram />
    </SocialLink>
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
  Socials
}