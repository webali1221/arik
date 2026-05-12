import { FaInstagram, FaTwitter, FaDribbble, FaBehance, FaLongArrowAltUp } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[black] text-[white] px-10 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-6">arik.</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer bg-black text-white p-3 rounded-full  border-[1px] border-[#DAC5A726] w-[40px] h-[40px] p-[2px] bg-[#DAC5A70D] rounded-[50%] p-[10px]">
                <FaInstagram size={20} />
              </div>
              <span className="text-sm">Instagram</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer bg-black text-white p-3 rounded-full  border-[1px] border-[#DAC5A726] w-[40px] h-[40px] p-[2px] bg-[#DAC5A70D] rounded-[50%] p-[10px]">
                <FaTwitter size={20} />
              </div>
              <span className="text-sm">Twitter</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer bg-black text-white p-3 rounded-full  border-[1px] border-[#DAC5A726] w-[40px] h-[40px] p-[2px] bg-[#DAC5A70D] rounded-[50%] p-[10px]">
                <FaDribbble size={20} />
              </div>
              <span className="text-sm">Dribbble</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer bg-black text-white p-3 rounded-full  border-[1px] border-[#DAC5A726] w-[40px] h-[40px] p-[2px] bg-[#DAC5A70D] rounded-[50%] p-[10px]">
                <FaBehance size={20} />
              </div>
              <span className="text-sm">Behance</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-medium mb-4">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:cursor-pointer">Home</li>
            <li className="hover:cursor-pointer">Services</li>
            <li className="hover:cursor-pointer">About</li>
            <li className="hover:cursor-pointer">Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-4">CMS</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:cursor-pointer">Work</li>
            <li className="hover:cursor-pointer">Work Single</li>
            <li className="hover:cursor-pointer">Blog</li>
            <li className="hover:cursor-pointer">Blog Post</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-4">Utility Pages</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:cursor-pointer">404 Error Page</li>
            <li className="hover:cursor-pointer">Password Protected</li>
            <li className="hover:cursor-pointer">Styleguide</li>
            <li className="hover:cursor-pointer">Licensing</li>
            <li className="hover:cursor-pointer">Changelog</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 flex flex-col md:flex-row justify-between items-center text-xs opacity-70">
        <p>© 2022 Made by Pawel Gola. Powered by Framer.</p>

        <button className="mt-4 bg-black text-white w-30 text-[20px] gap-[10px] h-10 rounded-full flex items-center justify-center">
          To Top <span className="transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer border-[1px] border-[#DAC5A726] w-[40px] h-[40px] p-[2px] bg-[#DAC5A70D] rounded-[50%] p-[10px]"><FaLongArrowAltUp size={20} /></span>
        </button>
      </div>
    </footer>
  );
}