"use client"

import VisibleOnScreenView from "../VisibleOnScreenView"
import Project from "./Project"
import ipmr from "@/imgs/projects/ipmr.png"
import ipmrLanding from "@/imgs/projects/ipmr-landing.png"
import kst from "@/imgs/projects/kst.png"
import sap from "@/imgs/projects/sap.png"
import ds from "@/imgs/projects/ds.png"
import gym from "@/imgs/projects/gym.png"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";


const Projects = () => {
    return <div className="py-20 border-b-2 flex justify-center items-center flex-col">
        <VisibleOnScreenView>
            <p className="font-amiri text-5xl text-center">Projects</p>
        </VisibleOnScreenView>
        <div className="pt-10 flex flex-col gap-14 lg:w-[80vw] px-2 sm:px-10 xl:px-36">
            <Carousel className="w-full">
                <CarouselContent>
                    <CarouselItem>
                        <Project
                            title="industrialpmr Dashboard"
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
                    <CarouselItem>
                        <Project
                            title="industrialpmr Landing"
                            img={ipmrLanding}
                            stats={[
                                { title: "Machines Connected", value: "300+" },
                                { title: "Testimonials", value: "4.9/5" },
                            ]}
                            website="https://industrialpmr.com/"
                            description={<p>an <strong>IIoT monitoring solution</strong> designed for factories to monitor and visualize their data 📊 in real-time ⏱️ using our intuitive and powerful dashboard 🖥️. Track production, energy consumption ⚡, and material usage efficiently to optimize performance 🚀.</p>}
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <Project
                            title="Learning Management System (LMS)"
                            img={sap}
                            stats={[
                                // { title: "Machines Connected", value: "300+" },
                                // { title: "Testimonials", value: "4.9/5" },
                            ]}
                            website="https://sap-pf.web.app/"
                            github="https://github.com/shujaalik/sap-pf"
                            description={<p>A dynamic <strong>Learning Management System (LMS)</strong> 🎓 designed to enhance collaboration between teachers and students. With multi-auth 🔐, teachers can create and manage courses 📚, mark attendance ✅, and oversee student engagement, while students can enroll in courses, track schedules via an integrated calendar 📆, and stay organized effortlessly. This project blends intuitive design 🖌️ with seamless functionality, making learning and teaching more effective and interactive 🚀.</p>}
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <Project
                            title="Delivery Scheduler Manager"
                            img={ds}
                            stats={[
                                // { title: "Machines Connected", value: "300+" },
                                // { title: "Testimonials", value: "4.9/5" },
                            ]}
                            website="https://dsa-delivery-scheduler.web.app/"
                            github="https://github.com/shujaalik/delivery-scheduler"
                            description={<p>An intelligent <strong>Delivery Scheduler Manager</strong> 🚚 designed to optimize logistics by sorting and simulating deliveries based on profit margins 💰 and deadlines ⏳. This project streamlines vehicle allocation, monitors ongoing deliveries 📦, and provides real-time insights 📊 into queued, completed, and active shipments. Built to enhance efficiency and decision-making, it ensures maximum profitability and timely execution for delivery operations 🚀.</p>}
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <Project
                            title="Gym Management Application (Monorepo)"
                            img={gym}
                            stats={[
                                // { title: "Machines Connected", value: "300+" },
                                // { title: "Testimonials", value: "4.9/5" },
                            ]}
                            github="https://github.com/shujaalik/gym-management"
                            description={<p>🏋️‍♂️💻 The <strong>Gym Management Application</strong> is a powerful, containerized solution built with a React frontend and a FastAPI backend to streamline gym operations. 🚀 Manage your gym effortlessly with features like member management 👥, attendance tracking 📊, and fee status updates 💰. Designed with cutting-edge technologies like Tailwind CSS 🎨, Vite ⚡, and SQLite 🗄️, it offers a seamless experience. With Docker 🐳 for easy deployment, this app is perfect for modern gyms aiming to enhance efficiency and member satisfaction! 🌟</p>}
                        />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <a target="_blank" href="https://github.com/shujaalik" className="underline text-center mt-3 font-semibold text-md opacity-70">View more...</a>
        </div>
    </div>
}

export default Projects
