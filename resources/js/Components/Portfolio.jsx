import PortfolioSatu from "../../img/portfolio1.png";
import PortfolioDua from "../../img/portfolio2.png";
import PortfolioTiga from "../../img/portfolio3.png";

const people = [
    {
        name: "Sistem Monitoring Beasiswa (SIMONEB)",
        role: "Full Stack Developer",
        imageUrl: PortfolioSatu,
        twitterUrl: "#",
        linkedinUrl: "#",
    },
    {
        name: "Sistem Donatur (SIDO)",
        role: "Full Stack Developer",
        imageUrl: PortfolioDua,
        twitterUrl: "#",
        linkedinUrl: "#",
    },
    {
        name: "Website SEBI SOCIAL FUND",
        role: "Full Stack Developer",
        imageUrl: PortfolioTiga,
        twitterUrl: "#",
        linkedinUrl: "#",
    },
];

export default function Portfolio() {
    return (
        <div className="bg-portfolio text-white">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12">
                    <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        <h2 className="text-3xl text-center font-bold tracking-tight sm:text-4xl">
                            My Portfolio
                        </h2>
                    </div>
                    <ul
                        role="list"
                        className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
                    >
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="space-y-4">
                                    <div className="aspect-w-3 aspect-h-2">
                                        <img
                                            className="picture rounded-lg object-cover shadow-lg"
                                            src={person.imageUrl}
                                            alt=""
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <div className="space-y-1 text-lg font-medium leading-6">
                                            <h3>{person.name}</h3>
                                            <p className="text-indigo-400">
                                                {person.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
