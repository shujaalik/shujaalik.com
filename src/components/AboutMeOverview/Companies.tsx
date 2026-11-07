import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import KunjiSoft from "@/imgs/companies/kunjisoft-full.png"
import IPMR from "@/imgs/companies/ipmr-full-nobg.png"
import plastisol from "@/imgs/companies/plastisol.png"
import kis from "@/imgs/companies/kis-logo.png"
import shopsqual from "@/imgs/companies/shopsqual-full-dark.png"
import kew from "@/imgs/companies/kew.png"

const Companies = () => {
    return <div className="w-screen flex flex-col justify-center items-center">
        <p className="uppercase tracking-widest text-xs font-semibold text-slate-500 text-center mb-2">
            Trusted Partners & Industrial Deployments
        </p>
        <div className="py-12 w-fit items-center gap-6 flex flex-wrap border-b-2">
            <Item img={plastisol} name="Plastisol Manufacturing" />
            <Item img={IPMR} name="industrialpmr" />
            <Item img={KunjiSoft} name="KunjiSoft" />
            <Item img={kis} name="KIS Industrial Systems" />
            <Item img={shopsqual} name="ShopsQual" />
            <Item img={kew} name="KEW Industrial" />
        </div>
    </div>
}

const Item = ({
    img,
    name
}: {
    img: StaticImport,
    name: string
}) => {
    return <div className="flex items-center justify-center m-auto" title={name}>
        <Image className="m-5 w-auto max-h-20 sm:max-w-36 grayscale transition ease-linear duration-300 opacity-60 hover:grayscale-0 hover:opacity-100" alt={name} src={img} />
    </div>
}

export default Companies