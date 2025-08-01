import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-[100vh] text-center bg-[#1a2233]">
            <TypeAnimation
                sequence={[
                "LEEJAEGEON",
                1500,
                ]}
                wrapper="h1"
                speed={300}
                className="text-9xl font-extrabold mb-4 text-[#edb352] drop-shadow-lg tracking-widest "
                repeat={0}
            />
        </section>
    );
}