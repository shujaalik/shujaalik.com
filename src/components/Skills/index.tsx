import { IconType } from "react-icons"
import { BiLogoTypescript } from "react-icons/bi"
import { FaDocker, FaGitAlt, FaNodeJs, FaPython, FaReact } from "react-icons/fa"
import { RiNextjsLine } from "react-icons/ri"
import {
    SiArduino,
    SiC,
    SiCplusplus,
    SiEspressif,
    SiFastify,
    SiGooglecloud,
    SiInfluxdb,
    SiNginx,
    SiPostgresql,
    SiRedis,
    SiRedux,
    SiStmicroelectronics,
    SiTailwindcss,
    SiTimescale
} from "react-icons/si"
import { TbActivity, TbBroadcast, TbCpu, TbPlugConnected } from "react-icons/tb"
import { MdDeveloperBoard, MdElectricMeter } from "react-icons/md"
import VisibleOnScreenView from "../VisibleOnScreenView"

const Skills = () => {
    return <div className="py-20 border-b-2">
        <VisibleOnScreenView>
            <p className="font-amiri text-5xl text-center">Technical Skills</p>
            <p className="font-poppins text-sm text-center text-slate-500 mt-2 max-w-xl mx-auto">
                End-to-end technical expertise across edge firmware, high-throughput time-series infrastructure, and real-time operational interfaces.
            </p>
        </VisibleOnScreenView>
        <div className="pt-10 flex flex-col gap-14 px-2 sm:px-10 xl:px-36">
            <VisibleOnScreenView>
                <EmbeddedEdgeSkills />
            </VisibleOnScreenView>
            <VisibleOnScreenView>
                <BackendInfrastructureSkills />
            </VisibleOnScreenView>
            <VisibleOnScreenView>
                <FrontendTelemetrySkills />
            </VisibleOnScreenView>
        </div>
    </div>
}

const EmbeddedEdgeSkills = () => {
    return <div>
        <div className="flex items-center gap-3">
            <p className="font-amiri text-3xl text-left">Embedded & Edge Systems</p>
            <span className="text-xs uppercase font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold">
                Firmware & Hardware
            </span>
        </div>
        <div className="flex flex-row flex-wrap gap-4 sm:gap-6 mt-5">
            <Skill name="C" Icon={SiC} />
            <Skill name="C++" Icon={SiCplusplus} />
            <Skill name="ESP-IDF" Icon={SiEspressif} />
            <Skill name="FreeRTOS" Icon={TbCpu} />
            <Skill name="STM32" Icon={SiStmicroelectronics} />
            <Skill name="ESP32" Icon={SiEspressif} />
            <Skill name="Arduino" Icon={SiArduino} />
            <Skill name="Modbus RTU (RS-485)" Icon={TbPlugConnected} />
            <Skill name="ESP-NOW" Icon={TbBroadcast} />
            <Skill name="I2C / SPI / UART" Icon={MdDeveloperBoard} />
            <Skill name="Energy Metering Telemetry" Icon={MdElectricMeter} />
            <Skill name="Embedded Board Programming" Icon={MdDeveloperBoard} />
        </div>
    </div>
}

const BackendInfrastructureSkills = () => {
    return <div>
        <div className="flex items-center gap-3">
            <p className="font-amiri text-3xl text-left">Backend & Time-Series Infrastructure</p>
            <span className="text-xs uppercase font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold">
                Cloud & Distributed Telemetry
            </span>
        </div>
        <div className="flex flex-row flex-wrap gap-4 sm:gap-6 mt-5">
            <Skill name="Node.js" Icon={FaNodeJs} />
            <Skill name="Fastify" Icon={SiFastify} />
            <Skill name="Python" Icon={FaPython} />
            <Skill name="TimescaleDB" Icon={SiTimescale} />
            <Skill name="InfluxDB" Icon={SiInfluxdb} />
            <Skill name="PostgreSQL" Icon={SiPostgresql} />
            <Skill name="Redis" Icon={SiRedis} />
            <Skill name="Docker" Icon={FaDocker} />
            <Skill name="GCP (Pub/Sub, Cloud Run)" Icon={SiGooglecloud} />
            <Skill name="Nginx" Icon={SiNginx} />
            <Skill name="WebSockets & MQTT" Icon={TbBroadcast} />
            <Skill name="Git" Icon={FaGitAlt} />
        </div>
    </div>
}

const FrontendTelemetrySkills = () => {
    return <div>
        <div className="flex items-center gap-3">
            <p className="font-amiri text-3xl text-left">Frontend & Telemetry UI</p>
            <span className="text-xs uppercase font-mono px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-semibold">
                High-Density Dashboards
            </span>
        </div>
        <div className="flex flex-row flex-wrap gap-4 sm:gap-6 mt-5">
            <Skill name="React" Icon={FaReact} />
            <Skill name="Next.js" Icon={RiNextjsLine} />
            <Skill name="TypeScript" Icon={BiLogoTypescript} />
            <Skill name="Tailwind CSS" Icon={SiTailwindcss} />
            <Skill name="WebSockets (Live State Sync)" Icon={TbActivity} />
            <Skill name="Data Visualization (Highcharts / Recharts)" Icon={TbActivity} />
            <Skill name="Redux / Jotai" Icon={SiRedux} />
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
    return <div className="flex items-center gap-2 bg-primary-one rounded-lg px-3.5 py-2.5 w-fit drop-shadow-sm border border-slate-100 hover:border-slate-300 transition-colors">
        <Icon className="text-xl text-primary-four" />
        <p className="font-poppins text-sm sm:text-base font-medium">{name}</p>
    </div>
}

export default Skills
