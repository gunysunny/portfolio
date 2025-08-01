
export default function Intro() {
    return (
        <section id="intro" className="max-w-4xl mx-auto my-20 px-4 min-h-[80vh] flex flex-col justify-center items-center">
            <h2
                className="text-5xl md:text-6xl font-extrabold text-white mb-10"
                style={{
                    WebkitTextStroke: '1px #232262',       // 얇은 남색 테두리
                    textShadow: '8px 8px 0 #232262'        // 진한 남색 그림자 (간격 넓게)
                }}
            >
                노력하는 일류 개발자
            </h2>
            <div className="text-xl md:text-2xl leading-relaxed text-gray-800 space-y-3">
                <p>
                    <span className="font-bold text-[#232262]">Web FrontEnd Developer 이재건</span>입니다.
                </p>
                <p className="text-base">
                    처음 코딩이라는 세계를 접하게 된 계기는 쇼핑몰 제작에 대한 호기심이었습니다.<br />
                    혼자 이것저것 시도하며 다양한 기능을 구현해보는 과정에서, 코딩이 생각보다 흥미롭다는 걸 느꼈고<br />
                    얼마나 더 다채로운 기능과 기술이 있는지 궁금증이 커져갔습니다.
                </p>
                <p className="text-base">
                    그래서 독학으로 퍼블리싱에 도전하며 <span className="font-bold text-[#d19939]">HTML, CSS, JavaScript</span>를 익혔고,
                    혼자서 배우는 것에는 한계가 있다는 것도 경험했습니다.<br />
                    더 다양한 기술을 접하고 싶어 <span className="font-bold text-[#d19939]">Flutter</span>와 <span className="font-bold text-[#d19939]">React</span>도 혼자 공부해보았고,
                    결국 <span className="font-bold text-[#d19939]">OZ-코딩스쿨 초격차 프론트엔드 과정</span>에 도전하게 되었습니다.
                </p>
                <p className="text-base">
                    지금도 항상 궁금증을 풀기 위해 다양한 언어와 기술을 틈틈이 공부하며,  
                    더 나은 개발자가 되기 위해 끊임없이 노력하고 있습니다.
                </p>
            </div>
        </section>
    );
}