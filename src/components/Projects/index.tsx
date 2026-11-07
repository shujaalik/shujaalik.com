"use client"

import VisibleOnScreenView from "../VisibleOnScreenView"
import Project from "./Project"
import ipmr from "@/imgs/projects/ipmr.png"
import kst from "@/imgs/projects/kst.png"
import sap from "@/imgs/projects/sap.png"
import ds from "@/imgs/projects/ds.png"
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
            <p className="font-amiri text-5xl text-center">Featured Projects</p>
            <p className="font-poppins text-sm text-center text-slate-500 mt-2 max-w-xl mx-auto">
                Selected systems architecture, deterministic edge firmware, high-throughput time-series pipelines, and enterprise applications.
            </p>
        </VisibleOnScreenView>
        <div className="pt-10 flex flex-col gap-14 lg:w-[80vw] px-2 sm:px-10 xl:px-36">
            <Carousel className="w-full">
                <CarouselContent>
                    {/* Spotlight 1: IPMR Edge & industrialpmr Lead Case Study */}
                    <CarouselItem>
                        <Project
                            title="IPMR Edge & industrialpmr Platform"
                            tag="Embedded / IIoT & Telemetry Infrastructure"
                            img={ipmr}
                            stats={[
                                { title: "Connected Machines", value: "300+" },
                                { title: "Downtime Data Loss", value: "0%" },
                                { title: "Ingestion Latency", value: "<10ms" },
                            ]}
                            website="https://industrialpmr.com/"
                            description={<p>Lead case study covering an end-to-end industrial telemetry platform powering continuous operations across tier-1 manufacturing facilities. Connects edge telematic units and energy meters directly with a sharded cloud time-series pipeline and real-time operations dashboards.</p>}
                            architectureHighlights={[
                                { label: "Edge Integration", detail: "Programmed board firmware interfacing with high-accuracy energy metering and digital vibration sensors, verified in 40°C+ ambient industrial environments." },
                                { label: "Deterministic Firmware", detail: "FreeRTOS preemptive task scheduling, non-volatile SPI flash ring buffer preventing data loss across 72+ hours of factory network downtime, and Modbus RTU (RS-485) multi-drop polling." },
                                { label: "Backend & Ingestion", detail: "Sharded MQTT broker architecture, sub-millisecond Redis deduplication filter, TimescaleDB hypertables, GCP Pub/Sub push queues, and Node.js microservices." },
                                { label: "Frontend & Visualization", detail: "High-density Bento Box telemetry dashboards built in React/TypeScript with live WebSocket state synchronization and shift production analytics." }
                            ]}
                        />
                    </CarouselItem>

                    {/* Spotlight 2: Smart Doser (AKU SIMVENTION Expo 2025 - 2nd Prize) */}
                    <CarouselItem>
                        <Project
                            title="Smart Doser — Medical Infusion System"
                            tag="Embedded Systems & Healthcare Automation"
                            img={kst}
                            stats={[
                                { title: "Award Recognition", value: "2nd Prize" },
                                { title: "Expo Venue", value: "AKU SIMVENTION" },
                                { title: "Precision", value: "Micro-Step" },
                            ]}
                            website="https://kunjisoft.com/"
                            description={<p>Automated precision medical dosing device engineered for clinical infusion accuracy. Awarded <strong>2nd Prize at the Aga Khan University (AKU) SIMVENTION Expo 2025</strong> out of nationwide engineering and biomedical entries.</p>}
                            architectureHighlights={[
                                { label: "Embedded Control Loop", detail: "ESP32 microcontroller running deterministic C++ control loops for precision micro-stepping motor actuation and flow rate calibration." },
                                { label: "Safety & Failsafes", detail: "Closed-loop feedback sensors detecting occlusion, air bubbles, and dosage drift with millisecond-level hardware interrupt interlocks." },
                                { label: "Validation & Clinical Award", detail: "Rigorously validated under simulated clinical delivery conditions; recognized with 2nd Prize at the Aga Khan University SIMVENTION 2025 medical innovation showcase." }
                            ]}
                        />
                    </CarouselItem>

                    {/* Spotlight 3: MedQueue Clinic Management */}
                    <CarouselItem>
                        <Project
                            title="MedQueue — Clinic Management & Queue Engine"
                            tag="Full-Stack & Concurrency Architecture"
                            img={sap}
                            stats={[
                                { title: "Throughput", value: "Real-Time" },
                                { title: "Sync Protocol", value: "WebSocket" },
                            ]}
                            github="https://github.com/shujaalik"
                            description={<p>High-concurrency outpatient clinic queue and appointment orchestration engine designed to eliminate patient congestion and streamline multi-specialty healthcare workflows.</p>}
                            architectureHighlights={[
                                { label: "Queue State Machine", detail: "Deterministic state machine preventing queue-jump race conditions across concurrent check-ins and triage re-prioritizations." },
                                { label: "Live Synchronization", detail: "Sub-50ms WebSocket broadcast pipeline delivering real-time queue states across triage desks, doctor consultation rooms, and public waiting monitors." },
                                { label: "Automated Dispatch", detail: "Rule-based triage routing paired with automated WhatsApp notification webhooks for turn-based patient alerts." }
                            ]}
                        />
                    </CarouselItem>

                    {/* Spotlight 4: Delivery Scheduler Simulation Engine */}
                    <CarouselItem>
                        <Project
                            title="Delivery Scheduler Optimization Engine"
                            tag="Logistics & Algorithmic Optimization"
                            img={ds}
                            stats={[
                                { title: "Algorithm", value: "Dynamic Prog" },
                                { title: "Efficiency Gain", value: "Optimized" },
                            ]}
                            website="https://dsa-delivery-scheduler.web.app/"
                            github="https://github.com/shujaalik/delivery-scheduler"
                            description={<p>Algorithmic logistics simulation platform engineered to solve multi-vehicle package dispatch challenges under strict delivery deadlines and profit-maximization objectives.</p>}
                            architectureHighlights={[
                                { label: "Simulation Engine", detail: "Dynamic programming and greedy heuristic algorithms for multi-constraint route allocation and cargo volume balancing." },
                                { label: "Interactive Visualization", detail: "Real-time state telemetry tracking fleet status transitions: Queued, In Transit, and Completed shipments with live KPI tracking." }
                            ]}
                        />
                    </CarouselItem>

                    {/* Spotlight 5: Learning Management System */}
                    <CarouselItem>
                        <Project
                            title="LMS Collaborative Platform"
                            tag="Web App & Multi-Role Systems"
                            img={sap}
                            stats={[
                                { title: "Role Isolation", value: "Multi-Role" },
                                { title: "Architecture", value: "Modular" },
                            ]}
                            website="https://sap-pf.web.app/"
                            github="https://github.com/shujaalik/sap-pf"
                            description={<p>Collaborative educational platform architected with strict multi-role authentication, dynamic curriculum workflows, and calendar schedule synchronization.</p>}
                            architectureHighlights={[
                                { label: "Authentication & RBAC", detail: "Role-based access control isolating faculty curriculum tools from student engagement tracking." },
                                { label: "State Synchronization", detail: "Reactive state models providing real-time attendance registration and grade distribution metrics." }
                            ]}
                        />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <a target="_blank" href="https://github.com/shujaalik" rel="noopener noreferrer" className="underline text-center mt-3 font-semibold text-md opacity-70 hover:opacity-100">
                View more repositories on GitHub...
            </a>
        </div>
    </div>
}

export default Projects
