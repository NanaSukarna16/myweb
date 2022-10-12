import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact, FaLaravel, FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <h2 className="text-lg text-center font-semibold text-indigo-600">
                    List
                </h2>
                <p className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Work Experience
                </p>
                <VerticalTimeline lineColor="#F0F8FF">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: "#DC143C",
                            color: "#F0F8FF",
                        }}
                        contentArrowStyle={{
                            borderRight: "7px solid  #DC143C",
                        }}
                        date="September 2022 - Present"
                        dateClassName="dateStyle"
                        iconStyle={{ background: "#DC143C", color: "#fff" }}
                        icon={<FaReact />}
                    >
                        <h3 className="vertical-timeline-element-title font-extrabold">
                            PT. LAMACCA KREATIF SOLUSI
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Junior Full Stack Developer
                        </h4>
                        <p>
                            Membuat Sistem atau Aplikasi dan Website sesuai
                            dengan Klien
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                        contentArrowStyle={{
                            borderRight: "7px solid  rgb(33, 150, 243)",
                        }}
                        date="September 2021 - September 2022"
                        dateClassName="sebi"
                        iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                        icon={<FaLaravel />}
                    >
                        <h3 className="vertical-timeline-element-title font-extrabold">
                            STEI SEBI
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Junior Web Developer (STAF IT)
                        </h4>
                        <ul className="mt-3">
                            <li>
                                - Membuat Sistem atau aplikasi yang di butuhkan
                                oleh internal kampus
                            </li>
                            <li>
                                - Membuat Website yang di butuhkan oleh internal
                                kampus
                            </li>
                            <li>
                                - Membantu bidang IT seperti criping kabel LAN,
                                troubleshooting PC karyawan yang lain dan
                                sebagainya
                            </li>
                        </ul>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
}
