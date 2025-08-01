import profileImg from '../assets/1.jpg'; // 이미지 import
import { FiMail, FiPhone, FiEdit, FiGithub } from "react-icons/fi";

export default function About() {
    return (
        <section
            id="about"
            className="w-full flex justify-center items-center min-h-[90vh] relative"
            style={{ background: "transparent" }}
        >
        {/* 좌측 - Profile 텍스트, 장식선 */}
            <div className="absolute right-2/4 top-[80px] z-20">
                <span className="text-[88px] font-extrabold text-[#f7dbac] opacity-80 select-none">
                    PROFILE
                </span>
            </div>
            {/* 메인 컨텐츠 박스 */}
            <div className="flex flex-row items-start bg-white rounded-xl shadow-lg p-8 gap-12">
                {/* 사진 + 테두리 장식 */}
                <div className="relative">
                    {/* 네모 테두리 장식 효과(선택사항) */}
                    <div className="absolute left-[-35px] top-[-30px] w-[200px] h-[260px] border-2 border-[#2d2940]"></div>
                    <img
                        src={profileImg}
                        alt="프로필"
                        className="w-[200px] h-[260px] object-cover shadow-md relative z-10"
                    />
                    
                </div>
                {/* 프로필 상세 */}
                <div className="flex flex-col justify-center">
                    <div className="mb-1">
                        <span className="text-2xl font-extrabold text-black">이재건</span>
                        <span className="ml-2 text-gray-400 text-lg font-semibold">| LEE JAEGEON</span>
                    </div>
                    <span className="inline-block bg-[#262262] text-white font-semibold px-3 py-1 rounded mt-1 mb-4 text-sm w-fit">
                        Web FrontEnd Developer
                    </span>
                    <ul className="space-y-2 text-lg">
                        <li className="flex items-center">
                            <FiMail className="mr-2 text-[#262262] text-xl" />
                            naworjs@gmail.com
                        </li>
                        <li className="flex items-center">
                            <FiPhone className="mr-2 text-[#262262] text-xl" />
                            010-3692-6686
                        </li>
                        <li className="flex items-center">
                            <FiEdit className="mr-2 text-[#262262] text-xl" />
                            velog.io/@mikan31/posts
                        </li>
                        <li className="flex items-center">
                            <FiGithub className="mr-2 text-[#262262] text-xl" />
                            github.com/gunysunny
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}