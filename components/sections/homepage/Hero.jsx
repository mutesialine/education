import Link from "next/link";
import Image from "next/image";
import heroimage from "/public/images/Header-politikberatung-tab-kit_schattiert.webp"
export default function Hero(){
  return (
    <div className=" relative pt-20 w-full max-w-[1920px] mx-auto">
      <Image src={heroimage} classname=" " alt="hero image"></Image>
      <div className="  absolute top-40 left-0 right-0 max-w-main px-8 w-full text-white">
        <h1 className=" text-big border-b-4 pb-2 border-green w-fit">
          <Link href="#">
            Well Advised – Also in Times
            <br /> of Crisis
          </Link>
        </h1>
        <p>
          <Link href="">
            KIT runs the Office of Technology Assessment with the German
            Bundestag
          </Link>
        </p>
      </div>
    </div>
  );
}