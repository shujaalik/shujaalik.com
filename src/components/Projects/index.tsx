"use client"

import VisibleOnScreenView from "../VisibleOnScreenView"
import Project from "./Project"
import ipmr from "@/imgs/projects/ipmr.png"
import kst from "@/imgs/projects/kst.png"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


const Projects = () => {
    return <div className="py-20 border-b-2 flex justify-center items-center flex-col">
        <VisibleOnScreenView>
            <p className="font-amiri text-5xl text-center">Projects</p>
        </VisibleOnScreenView>
        <div className="pt-10 flex flex-col gap-14 lg:w-[80vw] px-2 sm:px-10 xl:px-36">
            <Carousel plugins={[
                Autoplay({
                    delay: 5000,
                }),
            ]} className="w-full">
                <CarouselContent>
                    <CarouselItem>
                        <Project
                            title="industrialpmr"
                            img={ipmr}
                            stats={[
                                { title: "Machines Connected", value: "300+" },
                                { title: "Testimonials", value: "4.9/5" },
                            ]}
                            website="https://dash.industrialpmr.com/"
                            description={<p>industrialpmr is my star project 🌟 — an <strong>IIoT monitoring solution</strong> designed for factories to monitor and visualize their data 📊 in real-time ⏱️ using our intuitive and powerful dashboard 🖥️. Track production, energy consumption ⚡, and material usage efficiently to optimize performance 🚀.</p>}
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <Project
                            title="KunjiSoft Landing"
                            img={kst}
                            stats={[
                                { title: "Clients", value: "50+" },
                                // { title: "Testimonials", value: "4.9/5" },
                            ]}
                            website="https://kunjisoft.com/"
                            description={<p>KunjiSoft delivers cutting-edge <strong>Industrial IoT (IIoT) solutions</strong> that transform how businesses monitor, analyze, and optimize their operations. 🚀 Our intuitive platform provides real-time visibility into production, energy consumption, and machine performance, enabling data-driven decisions for enhanced efficiency and profitability.📈</p>}
                        />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    </div>
}

export default Projects