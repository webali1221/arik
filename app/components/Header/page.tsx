import Link from "next/link";

const Header = () => {
  return (
    <header className="my-[50px] fixed left-170 mx-auto">
      <div className="backdrop-blur-xl bg-black/30 border border-white/15 rounded-xl px-5 py-3 w-[570px]">
        <ul className="flex gap-7 text-white items-center justify-between">
          <li><Link href="/"><img src="./logo.svg" alt="logo" /></Link></li>
          <li><Link href="/Services" className="hover:transition-all duration-100 ease-in-out hover:text-[#DAC5A7]">Services</Link></li>
          <li><Link href="/Work" className="hover:transition-all duration-100 ease-in-out hover:text-[#DAC5A7]">Work</Link></li>
          <li><Link href="/About" className="hover:transition-all duration-100 ease-in-out hover:text-[#DAC5A7]">About</Link></li>
          <li><Link href="/Blog" className="hover:transition-all duration-100 ease-in-out hover:text-[#DAC5A7]">Blog</Link></li>
          <li><Link href="" className="hover:transition-all duration-100 ease-in-out hover:text-[#DAC5A7]">Pages</Link></li>
          <button className="transform hover:scale-105 transition-all duration-300 ease-in-out p-[10] bg-[#DAC5A7] text-black rounded-[5px] ">Let’s talk</button>
        </ul>
      </div>
    </header>
  );
};

export default Header;