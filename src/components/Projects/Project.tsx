import Image, { StaticImageData } from "next/image"
import { TbWorld } from "react-icons/tb"
const Project = ({
    title,
    description,
    img,
    website,
    github,
    stats,
}: {
    title: string,
    description: JSX.Element,
    img: StaticImageData,
    website?: string,
    github?: string,
    stats: {
        title: string,
        value: string,
    }[]
}) => {
    return <div className="grid grid-cols-1 gap-10 font-poppins md:grid-cols-2 justify-center items-center">
        <div className="flex gap-5 flex-col max-w-[90vw]">
            <h1 className="text-4xl font-bold text-primary-four">{title}</h1>
            <div className="flex justify-start items-center gap-3">
                {website && <p className="flex justify-center items-center gap-3 w-min underline font-medium"><TbWorld /> <a href={website} target="_blank">Website</a></p>}
                {github && <p className="flex justify-center items-center gap-3 w-min underline font-medium"><TbWorld /> <a href={github} target="_blank">Github</a></p>}
            </div>
            <p>{description}</p>
            <div className="flex mt-5 justify-start items-center gap-10">
                {stats.map(({ title, value }) => <div key={title} className="flex flex-col justify-start items-start gap-3">
                    <p className="text-md uppercase font-bold text-primary-three">{title}</p>
                    <p className="text-5xl font-bold text-primary-four">{value}</p>
                </div>)}
            </div>
        </div>
        <div style={{
            position: "relative",
            height: "25rem",
            overflow: "hidden",
            background: "linear-gradient(180deg, #FEB48C 0%, #1EBBFF 100%)",
            borderRadius: "1.25rem",
        }} className="rounded-xl shadow flex max-w-[90vw] w-[100%]">
            <div style={{
                position: "absolute",
                left: "2.5rem",
                top: "2.5rem",
                width: "56.25rem",
                height: "31.25rem",
                background: "white",
                borderRadius: "1.25rem",
                overflow: "hidden",
                boxShadow: "0px 25px 50px rgba(0, 0, 0, 0.25)",
            }}>

                <Image src={img} alt={"industrialpmr"} style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: "0px",
                    objectFit: "cover",
                    objectPosition: "-16% center",
                    color: "transparent",
                }} />
            </div>
        </div>

    </div>
}

export default Project