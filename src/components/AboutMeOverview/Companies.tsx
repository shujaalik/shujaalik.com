import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import KunjiSoft from "@/lib/kunjisoft-full.png"
import IPMR from "@/lib/ipmr-full-nobg.png"
import plastisol from "@/lib/plastisol.png"
import kis from "@/lib/kis-logo.png"
import shopsqual from "@/lib/shopsqual-full-dark.png"

const Companies = () => {
    return <div className="w-screen flex justify-center items-center">
        <div className="py-20 w-fit items-center gap-5 grid grid-cols-2 lg:gap-16 lg:grid-cols-3 xl:grid-flow-col columns-auto border-b-2">
            <Item img={KunjiSoft} />
            <Item img={IPMR} />
            <Item img={plastisol} />
            <Item img={kis} />
            <Item img={shopsqual} />
        </div>
    </div>
}

const Item = ({
    img
}: {
    img: StaticImport
}) => {
    return <div className="flex items-center justify-center">
        <Image className="m-5 w-auto sm:max-w-36 grayscale transition ease-linear duration-300 opacity-50 hover:grayscale-0 hover:opacity-100" alt="comapny" src={img} />
    </div>
}

export default Companies