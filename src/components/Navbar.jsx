// src/components/Navbar.jsx
export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-end px-12 h-16 bg-white border-b shadow-sm sticky top-0 z-50">
            {/* <div className="font-bold text-xl">이재건_LeeJaeGun</div> */}
            <div className="space-x-8 text-right">
                <a href="#about" className="hover:text-yellow-600">About</a>
                <a href="#intro" className="hover:text-yellow-600">Intro</a>
                <a href="#skills" className="hover:text-yellow-600">Skills</a>
                <a href="#projects" className="hover:text-yellow-600">Projects</a>
                <a href="#contact" className="hover:text-yellow-600">Contact</a>
            </div>    
        </nav>
    );
}