import Link from "next/link";

const Header = () => {
  return (
    <header className="my-[20px] md:my-[50px] fixed z-50 left-1/2 transform -translate-x-1/2 mx-auto w-[90vw] max-w-[570px]">
      <div className="backdrop-blur-xl bg-black/30 border border-white/15 rounded-xl px-3 md:px-5 py-3 w-full">
        <ul className="flex gap-2 md:gap-7 text-white items-center justify-between text-xs md:text-sm">
          <li><Link href="/"><img className="h-4 md:h-auto" src="./logo.svg" alt="logo" /></Link></li>
          <li><Link href="/Services" className="hover:transition-all duration-100 ease-in-out hover:text-[#DAC5A7]">Services</Link></li>
          <li><Link href="/Work" className="hover:transition-all duration-100 ease-in-out hover:text-[#DAC5A7]">Work</Link></li>
          <li><Link href="/About" className="hover:transition-all duration-100 ease-in-out hover:text-[#DAC5A7]">About</Link></li>
          <li><Link href="/Blog" className="hover:transition-all duration-100 ease-in-out hover:text-[#DAC5A7]">Blog</Link></li>
          <li><Link href="" className="hover:transition-all duration-100 ease-in-out hover:text-[#DAC5A7]">Pages</Link></li>
          <button className="transform hover:scale-105 transition-all duration-300 ease-in-out px-2 py-1 md:py-2 md:px-3 bg-[#DAC5A7] text-black rounded-[5px]">Let’s talk</button>
        </ul>
      </div>
    </header>
  );
};

export default Header;