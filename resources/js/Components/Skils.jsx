import { FaReact, FaLaravel, FaVuejs } from "react-icons/fa";
import {
    SiPhp,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiBootstrap,
    SiMysql,
    SiLaravel,
    SiReact,
} from "react-icons/si";

export default function Skils() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <h2 className="text-lg text-center font-semibold text-indigo-600">
                    List
                </h2>
                <p className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
                    My Skills
                </p>
                <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
                    <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                        <SiHtml5 className="text-4xl text-gray-500" />
                    </div>
                    <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                        <SiCss3 className="text-4xl text-gray-500" />
                    </div>
                    <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                        <SiBootstrap className="text-4xl text-gray-500" />
                    </div>
                    <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                        <SiPhp className="text-5xl text-gray-500" />
                    </div>
                    <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                        <SiJavascript className="text-4xl text-gray-500" />
                    </div>
                    <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                        <SiMysql className="text-6xl text-gray-500" />
                    </div>
                    <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                        <SiLaravel className="text-5xl text-gray-500" />
                    </div>
                    <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                        <SiReact className="text-5xl text-gray-500" />
                    </div>
                    <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                        <FaVuejs className="text-5xl text-gray-500" />
                    </div>
                </div>
            </div>
        </div>
    );
}
