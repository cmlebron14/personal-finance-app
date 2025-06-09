import Image from "next/image";
import Navbar from "../Navbar";

const Navigation = () => {
  return (
    <>
      {/* Logo */}
      <Image
        src="/images/logo-large.svg"
        alt="finance logo"
        width={122}
        height={22}
      />
      <Navbar />
      {/* Button */}
    </>
  );
};

export default Navigation;
