import { StaticImport } from "next/dist/shared/lib/get-img-props"
import VisibleOnScreenView from "../VisibleOnScreenView"
import Image from "next/image"
import ReactBasic from "@/imgs/certificates/react-basic.png";
import JSBasic from "@/imgs/certificates/js-basic.png";
import JSInermediate from "@/imgs/certificates/js-intermediate.png";
import FrontEndDev from "@/imgs/certificates/frontend-dev.png";
import PythonBasic from "@/imgs/certificates/python-basic.png";
import CssBasic from "@/imgs/certificates/css-basic.png";
import NodeBasic from "@/imgs/certificates/node-basic.png";
import Link from "next/link";
import { LiaHackerrank } from "react-icons/lia";

const Certification = () => {

    return <VisibleOnScreenView vidibilityPadding={400}>
        <div className="py-20 w-screen">
            <p className="font-amiri text-5xl text-center">Certification</p>
            <div className="pt-10 flex flex-row justify-start items-center gap-10 flex-wrap px-2 sm:px-10 xl:px-36">
                <Certificate title="Frontend Developer (React)" img={FrontEndDev} url={"https://www.hackerrank.com/certificates/5a31e577766a"} />
                <Certificate title="React (Basic)" img={ReactBasic} url={"https://www.hackerrank.com/certificates/a5a9d70376e1"} />
                <Certificate title="JavaScript (Basic)" img={JSBasic} url={"https://www.hackerrank.com/certificates/1cc8732a169e"} />
                <Certificate title="JavaScript (Intermediate)" img={JSInermediate} url={"https://www.hackerrank.com/certificates/be96a7f07dad"} />
                <Certificate title="Node (Basic)" img={NodeBasic} url={"https://www.hackerrank.com/certificates/2cd327c54469"} />
                <Certificate title="Python (Basic)" img={PythonBasic} url={"https://www.hackerrank.com/certificates/619e04e75239"} />
                <Certificate title="CSS (Basic)" img={CssBasic} url={"https://www.hackerrank.com/certificates/8b98bfc62805"} />
            </div>
        </div>
    </VisibleOnScreenView>
}

const Certificate = ({
    title,
    img,
    url,
}: {
    title: string,
    img: StaticImport
    url: string,
}) => {
    return <div className="flex flex-col">
        <Link href={url} target="_blank" className="group transition ease-linear duration-300 shadow h-auto rounded -translate-y-0 hover:-translate-y-1 hover:shadow-lg">
            <Image src={img} alt={title} className="w-80" />
            <div className="transition ease-linear duration-300 absolute bottom-0 bg-slate-200 opacity-50 py-2 px-4 font-poppins rounded-tr-lg font-semibold group-hover:opacity-80 group-hover:translate-x-2 group-hover:scale-110">
                <p>{title}</p>
            </div>
        </Link>
        <Link href={url} target="_blank" className="trasition ease-linear text-lg font-bold duration-100 w-fit flex justify-center items-center gap-2 italic opacity-80 mt-2 hover:opacity-100 hover:text-link-hover">
            <LiaHackerrank />
            view certificate
        </Link>
    </div>
}

export default Certification