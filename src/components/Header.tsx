import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

const AppHeader = () => {
  return (
    <>
      <a
        className="flex gap-3 top-0 h-4 md:h-12 items-center p-2 border-r lg:w-60 md:w-14"
        href="/"
      >
        <div className="flex mx-1">
          <Image src="/" alt="Logo" width={30} height={30} />
        </div>
        <p className="font-bold text-gray-700 lg:w-4/5 md:hidden lg:flex">
          InkChronicles
        </p>
      </a>
      <Navbar />
      {/* <Login /> and <Register />  Take inspiration from chaitainya project */}
    </>
  );
};

export default AppHeader;
