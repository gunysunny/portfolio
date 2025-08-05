import starbucksImg from "../assets/starbucks.png";
import appleImg from "../assets/apple.png";
import movieImg from "../assets/movie.png";
import instaImg from "../assets/insta.png";

const projects = [
        {
            title: "스타벅스 홈페이지",
            date: "약 3개월",
            type: "개인 프로젝트",
            github: "https://github.com/gunysunny/Starbucks_port", // 실제 깃허브 주소로 교체
            img: starbucksImg,
            desc: [
                "레이아웃 클론코딩",
            ],
            stack: ["Html", "Css", "Javascript"]
        },
        {
            title: "APPLE 홈페이지",
            date: "약 2개월",
            type: "개인 프로젝트",
            github: "https://github.com/gunysunny/Apple_port", // 실제 깃허브 주소로 교체
            img: appleImg,
            desc: [
                "레이아웃 클론코딩",
            ],
            stack: ["Html", "Css", "Javascript"]
        },
        {
            title: "영화 검색사이트",
            date: "2025-06-17 ~",
            type: "개인 프로젝트",
            github: "https://github.com/gunysunny/oz_react_PJ", // 실제 깃허브 주소로 교체
            img: movieImg,
            desc: [
                "레이아웃 디자인",
                "TMDB를 이용한 API설계",
                "React를 활용한 웹 개발"
            ],
            stack: ["React", "Tailwind", "Javascript"]
        },
        {
            title: "인스타그램 클론코딩",
            date: "약 1개월",
            type: "개인 프로젝트",
            github: "https://github.com/gunysunny/Instagram", // 실제 깃허브 주소로 교체
            img: instaImg,
            desc: [
                "레이아웃 클론코딩",
            ],
            stack: ["Flutter"]
        },
    ];

    export default function Projects() {
    return (
        <section id="projects" className="max-w-4xl mx-auto min-h-[80vh] mt-14">
            {/* [1] 섹션 바깥에 큰 제목 */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#222262] mb-10 mt-24 pl-2">
                Projects
            </h2>
            {/* [2] 프로젝트 카드 상자(위와 아래 margin을 더 크게) */}
            <div className="p-0 mb-24">
                {projects.map((proj, i) => (
                <div
                    key={proj.title}
                    className={
                            "flex flex-col md:flex-row items-start gap-10 md:gap-16 bg-white rounded-2xl shadow-lg p-8"
                            + (i !== projects.length - 1 ? " mb-12" : "") // 마지막 박스에는 마진 안줌
                    }
                >
                    {/* 왼쪽: 이미지/깃허브 */}
                    <div className="flex-shrink-0 w-full md:w-[440px] flex flex-col items-center">
                        <a
                            href={proj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 mb-2 text-gray-800 hover:text-[#222262]"
                        >
                            {/* 깃허브 아이콘은 react-icons/fi나 svg, 아무거나 써도 OK */}
                            <svg width="28" height="28" fill="currentColor" className="text-[#222262]">
                                <use href="#github" />
                            </svg>
                            Github  >
                        </a>
                        <div className="border-2 rounded-xl overflow-hidden shadow-lg w-full h-[230px] flex items-center justify-center bg-gray-50">
                            <img
                            src={proj.img}
                            alt={proj.title}
                            className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                    {/* 오른쪽: 상세 설명 */}
                    <div className="flex-1">
                        {/* [3] 프로젝트 제목 아래 밑줄 제거! */}
                        <div className="flex items-end gap-3 mb-1">
                            <span className="text-2xl font-extrabold text-[#222262]">{proj.title}</span>
                            <span className="text-lg text-gray-400 font-semibold">{proj.date}</span>
                        </div>
                        {/* <div className="border-b border-gray-300 my-1" /> 이 부분 주석처리 또는 삭제 */}
                        <div className="mb-2 text-sm text-gray-700">{proj.type}</div>
                        <div className="font-bold mb-2 mt-3 flex items-center gap-2">
                            <span>What I did</span>
                            <div className="flex-1 border-b-2 border-[#222262] opacity-50" />
                        </div>
                        <ul className="mb-4 ml-2 list-none text-gray-800 space-y-1">
                            {proj.desc.map((line, idx) => (
                            <li key={idx}>{line}</li>
                            ))}
                        </ul>
                        <div className="font-bold mb-2 mt-3 flex items-center gap-2">
                            <span>Stack</span>
                            <div className="flex-1 border-b-2 border-[#222262] opacity-50" />
                        </div>
                        <div className="flex gap-2">
                            {proj.stack.map((s, idx) => (
                            <span key={idx} className="bg-[#f1f1fa] px-3 py-1 rounded-full text-[#222262] font-semibold border">{s}</span>
                            ))}
                        </div>
                    </div>
                </div>
                ))}
            </div>
            {/* 깃허브 SVG 아이콘 (필요시 한 번만 넣으면 됨) */}
            <svg style={{ display: "none" }}>
                <symbol id="github" viewBox="0 0 16 16">
                    <path d="M8 .2a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.01.08-2.12 0 0 .67-.22 2.2.82a7.53 7.53 0 0 1 4.01 0c1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.92.08 2.12.51.56.82 1.27.82 2.14 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.45.55.38A8.01 8.01 0 0 0 8 .2"></path>
                </symbol>
            </svg>
    </section>
    );
}