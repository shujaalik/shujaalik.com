import { IconType } from "react-icons"
import { BiLogoTypescript } from "react-icons/bi"
import { FaGitAlt, FaHtml5, FaJsSquare, FaNodeJs, FaPython, FaReact } from "react-icons/fa"
import { PiGhostBold } from "react-icons/pi"
import { RiNextjsLine } from "react-icons/ri"
import { SiAntdesign, SiArduino, SiChakraui, SiCss3, SiCurl, SiDocker, SiEclipsemosquitto, SiEspressif, SiExpress, SiFirebase, SiGithubactions, SiGooglecloud, SiMicropython, SiMysql, SiRedux, SiServerless, SiTailwindcss } from "react-icons/si"
import VisibleOnScreenView from "../VisibleOnScreenView"

const Skills = () => {
    return <div className="py-20 border-b-2">
        <VisibleOnScreenView>
            <p className="font-amiri text-5xl text-center">My Skills</p>
        </VisibleOnScreenView>
        <div className="pt-10 flex flex-col gap-14 px-2 sm:px-10 xl:px-36">
            <VisibleOnScreenView>
                <Frontend />
            </VisibleOnScreenView>
            <VisibleOnScreenView>
                <Styling />
            </VisibleOnScreenView>
            <VisibleOnScreenView>
                <Backend />
            </VisibleOnScreenView>
            <VisibleOnScreenView>
                <DevOps />
            </VisibleOnScreenView>
            <VisibleOnScreenView>
                <IoT />
            </VisibleOnScreenView>
        </div>
    </div>
}

const Frontend = () => {
    return <div>
        <p className="font-amiri text-3xl text-left">Frontend</p>
        <div className="flex flex-row flex-wrap gap-10 mt-5">
            <Skill name="HTML" Icon={FaHtml5} />
            <Skill name="Javascript" Icon={FaJsSquare} />
            <Skill name="Typescript" Icon={BiLogoTypescript} />
            <Skill name="ReactJS" Icon={FaReact} />
            <Skill name="NextJS" Icon={RiNextjsLine} />
            <Skill name="Redux" Icon={SiRedux} />
            <Skill name="Jotai" Icon={PiGhostBold} />
            <Skill name="Firebase" Icon={SiFirebase} />
        </div>
    </div>
}

const Backend = () => {
    return <div>
        <p className="font-amiri text-3xl text-left">Backend</p>
        <div className="flex flex-row flex-wrap gap-10 mt-5">
            <Skill name="NodeJS" Icon={FaNodeJs} />
            <Skill name="ExpressJS" Icon={SiExpress} />
            <Skill name="REST API" Icon={SiCurl} />
            <Skill name="Firebase" Icon={SiFirebase} />
            <Skill name="Python" Icon={FaPython} />
            <Skill name="MySQL" Icon={SiMysql} />
        </div>
    </div>
}

const IoT = () => {
    return <div>
        <p className="font-amiri text-3xl text-left">IoT</p>
        <div className="flex flex-row flex-wrap gap-10 mt-5">
            <Skill name="MQTT" Icon={SiEclipsemosquitto} />
            <Skill name="ESP-IDF" Icon={SiEspressif} />
            <Skill name="Arduino" Icon={SiArduino} />
            <Skill name="Micropython" Icon={SiMicropython} />
        </div>
    </div>
}

const Styling = () => {
    return <div>
        <p className="font-amiri text-3xl text-left">Styling</p>
        <div className="flex flex-row flex-wrap gap-10 mt-5">
            <Skill name="Vanilla CSS" Icon={SiCss3} />
            <Skill name="Tailwind CSS" Icon={SiTailwindcss} />
            <Skill name="Chakra UI" Icon={SiChakraui} />
            <Skill name="Ant Design" Icon={SiAntdesign} />
        </div>
    </div>
}

const DevOps = () => {
    return <div>
        <p className="font-amiri text-3xl text-left">DevOps</p>
        <div className="flex flex-row flex-wrap gap-10 mt-5">
            <Skill name="Git" Icon={FaGitAlt} />
            <Skill name="GCP" Icon={SiGooglecloud} />
            <Skill name="Docker" Icon={SiDocker} />
            <Skill name="Serverless" Icon={SiServerless} />
            <Skill name="CD" Icon={SiGithubactions} />
        </div>
    </div>
}


const Skill = ({
    name,
    Icon
}: {
    name: string,
    Icon: IconType
}) => {
    return <div className="flex items-center gap-2 bg-primary-one rounded px-3 py-2 w-fit drop-shadow">
        <Icon className="text-xl" />
        <p className="font-amiri text-2xl">{name}</p>
    </div>
}


export default Skills