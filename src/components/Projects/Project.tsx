import Image, { StaticImageData } from "next/image"
import { TbWorld } from "react-icons/tb"
import { FaGithub } from "react-icons/fa"

const Project = ({
    title,
    tag,
    description,
    architectureHighlights,
    img,
    website,
    github,
    stats,
}: {
    title: string,
    tag?: string,
    description: React.ReactNode,
    architectureHighlights?: {
        label: string,
        detail: string
    }[],
    img: StaticImageData,
    website?: string,
    github?: string,
    stats: {
        title: string,
        value: string,
    }[]
}) => {
    return <div className="grid grid-cols-1 gap-10 font-poppins md:grid-cols-2 justify-center items-center py-4">
        <div className="flex gap-4 flex-col max-w-[90vw]">
            <div className="flex items-center gap-3">
                {tag && (
                    <span className="text-xs uppercase tracking-wider font-mono font-semibold px-2.5 py-1 rounded bg-slate-200 text-slate-800">
                        {tag}
                    </span>
                )}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-four">{title}</h2>
            <div className="flex justify-start items-center gap-4 text-sm">
                {website && (
                    <a href={website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 underline font-medium hover:text-link-hover">
                        <TbWorld className="text-base" /> Website
                    </a>
                )}
                {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 underline font-medium hover:text-link-hover">
                        <FaGithub className="text-base" /> GitHub
                    </a>
                )}
            </div>
            <div className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {description}
            </div>
            {architectureHighlights && architectureHighlights.length > 0 && (
                <div className="mt-2 pt-3 border-t border-slate-200 flex flex-col gap-2">
                    <p className="text-xs uppercase tracking-wider font-bold text-slate-500">Architecture & Technical Depth</p>
                    <div className="grid grid-cols-1 gap-1.5 text-xs sm:text-sm">
                        {architectureHighlights.map(({ label, detail }) => (
                            <div key={label} className="text-slate-700">
                                <strong className="text-primary-four">{label}:</strong> {detail}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {stats && stats.length > 0 && (
                <div className="flex mt-3 justify-start items-center gap-8 sm:gap-10">
                    {stats.map(({ title, value }) => (
                        <div key={title} className="flex flex-col justify-start items-start gap-1">
                            <p className="text-xs sm:text-sm uppercase font-bold text-primary-three">{title}</p>
                            <p className="text-3xl sm:text-4xl font-bold text-primary-four">{value}</p>
                        </div>
                    ))}
                </div>
            )}
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
                <Image
                    src={img}
                    alt={title}
                    style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        objectFit: "cover",
                        objectPosition: "-16% center",
                        color: "transparent",
                    }}
                />
            </div>
        </div>
    </div>
}

export default Project