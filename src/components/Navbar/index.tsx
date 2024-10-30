import Link from "next/link"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

const Navbar = () => {
  return <div className="h-36 w-full flex flex-row justify-around items-center">
    <Link className="font-poppins text-sm hover:text-link-hover" href="mailto:me@shujaalik.com" target="_blank">me@shujaalik.com</Link>
    <p className="font-poppins font-bold">ShujaAliK</p>
    <Socials />
  </div>
}

const Socials = () => {

  return <div className="flex flex-row justify-around items-center gap-3 text-3xl">
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