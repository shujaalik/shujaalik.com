import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import KunjiSoft from "@/imgs/companies/kunjisoft-full.png"
import IPMR from "@/imgs/companies/ipmr-full-nobg.png"
import plastisol from "@/imgs/companies/plastisol.png"
import kis from "@/imgs/companies/kis-logo.png"
import shopsqual from "@/imgs/companies/shopsqual-full-dark.png"
import kew from "@/imgs/companies/kew.png"

const Companies = () => {
    return <div className="w-screen flex justify-center items-center">
        <div className="py-20 w-fit items-center gap-5 flex flex-wrap border-b-2">
            <Item img={plastisol} />
            <Item img={IPMR} />
            <Item img={KunjiSoft} />
            <Item img={kis} />
            <Item img={shopsqual} />
            <Item img={kew} />
        </div>
    </div>
}

const Item = ({
    img
}: {
    img: StaticImport
}) => {
    return <div className="flex items-center justify-center">
        <Image className="m-5 w-auto max-h-20 sm:max-w-36 grayscale transition ease-linear duration-300 opacity-50 hover:grayscale-0 hover:opacity-100" alt="comapny" src={img} />
    </div>
}

export default Companies