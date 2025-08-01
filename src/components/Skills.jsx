import { 
    SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiGit, SiFlutter, SiGithub 
} from "react-icons/si";

const skills = [
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Git", icon: <SiGit className="text-orange-600" /> },
    { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
    { name: "Github", icon: <SiGithub className="text-gray-700" /> },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="min-h-[90vh] flex flex-col justify-center items-center"
        >
            {/* 제목을 카드 상자와 동일한 폭, 왼쪽 정렬로! */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#222262] mb-10 mt-10 w-full max-w-4xl text-left pl-8">
                Skills
            </h2>
            {/* 카드 상자 */}
            <div className="max-w-4xl w-full p-8 bg-white rounded-2xl shadow-lg flex flex-wrap gap-5 items-start">
                {skills.map(skill => (
                <span
                    key={skill.name}
                    className="flex items-center gap-3 px-2 py-2 bg-transparent font-semibold text-base hover:scale-105 transition"
                >
                    <span className="w-11 h-11 flex items-center justify-center bg-white rounded-lg shadow-md">
                        <span className="text-2xl">{skill.icon}</span>
                    </span>
                    <span>{skill.name}</span>
                </span>
                ))}
            </div>
        </section>
    );
}