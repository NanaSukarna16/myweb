import { PhoneIcon } from "@heroicons/react/24/outline";
import Bg from "../../img/bg2.jpeg";
import MyImg from "../../img/my.jpg";
import Portfolio from "@/Components/Portfolio";
import {
    FaGithubSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaFacebookSquare,
    FaWhatsappSquare,
} from "react-icons/fa";
import React from "react";
import Experience from "@/Components/Experience";
import Skils from "@/Components/Skils";
import Footer from "@/Components/Footer";

const supportLinks = [
    {
        name: "Sales",
        href: "#",
        description:
            "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
        icon: PhoneIcon,
    },
];

export default function Welcome() {
    return (
        <>
            <div className="bg-white">
                <div
                    className="relative pb-32"
                    style={{
                        backgroundImage: `url(${Bg})`,
                        backgroundAttachment: "fixed",
                    }}
                >
                    <div className="absolute inset-0">
                        <div
                            className="absolute inset-0 mix-blend-multiply"
                            aria-hidden="true"
                        />
                    </div>
                    <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8"></div>
                </div>

                <section
                    className="relative z-10 mx-auto -mt-40 max-w-5xl px-4 pb-32 sm:px-6 lg:px-8"
                    aria-labelledby="contact-heading"
                >
                    <div className="grid">
                        <div className="relative bg-gray-800 -mt-15 rounded-2xl">
                            <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                                <img
                                    className="h-full w-full object-cover"
                                    src={MyImg}
                                    alt=""
                                />
                            </div>
                            <div className="relative rounded-2xl mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                                <div className="md:ml-auto md:w-1/2 md:pl-10">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                        Nana Sukarna
                                    </p>
                                    <p className="mt-3 text-lg text-gray-300">
                                        Full Stack Web Developer
                                    </p>
                                    <div className="mt-10">
                                        <div className="inline-flex">
                                            <a
                                                href="https://api.whatsapp.com/send?phone=6285779129390&text=ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ"
                                                target="_blank"
                                            >
                                                <FaWhatsappSquare className="text-white text-4xl" />
                                            </a>
                                            <a
                                                href="https://github.com/NanaSukarna16/"
                                                className="ml-3"
                                                target="_blank"
                                            >
                                                <FaGithubSquare className="text-white text-4xl" />
                                            </a>
                                            <a
                                                href="https://www.instagram.com/nana16_sukarna6/?hl=id"
                                                className="ml-3"
                                                target="_blank"
                                            >
                                                <FaInstagramSquare className="text-white text-4xl" />
                                            </a>
                                            <a
                                                href="https://www.linkedin.com/in/nana-sukarna-55009822a/"
                                                className="ml-3"
                                                target="_blank"
                                            >
                                                <FaLinkedin className="text-white text-4xl" />
                                            </a>
                                            <a
                                                href="https://www.facebook.com/profile.php?id=100009220620648"
                                                className="ml-3"
                                                target="_blank"
                                            >
                                                <FaFacebookSquare className="text-white text-4xl" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Portfolio />
            <Experience />
            <Skils />
            <Footer />
        </>
    );
}
