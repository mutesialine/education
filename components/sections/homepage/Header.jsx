import Image from "next/image";
import logo from "/public/svg/logo.svg";
import Link from "next/link";
export default function Header(){
  return (
    <div className="w-full fixed z-[99] left-0 right-0 max-w-main mx-auto px-8  py-6 lg:flex justify-between">
      <div>
        <Image className="w-24 object-cover" src={logo} alt="logo" />
      </div>
      <div className="space-y-4 text-base ">
        <ul className="flex gap-4 text-gray-500">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Plain Language</Link>
          </li>
          <li>
            <Link href="#">Legals</Link>
          </li>
          <li>
            <Link href="#">Accessibility</Link>
          </li>
          <li>
            <Link href="#">Sitemap</Link>
          </li>
          <li>
            <Link href="#">Intranet</Link>
          </li>
          <li>
            <Link href="#">KIT</Link>
          </li>
          <li>
            <Link href="#">DE</Link>
          </li>
          <li>
            <Link href="#">search</Link>
          </li>
        </ul>
        <ul className="flex font-bold  justify-end gap-4">
          <li>
            <Link href="#">KIT</Link>
          </li>
          <li>
            <Link href="#">Topics</Link>
          </li>
          <li>
            <Link href="#">Studies</Link>
          </li>
          <li>
            <Link href="#">Readerch</Link>
          </li>
          <li>
            <Link href="#">Innovation</Link>
          </li>
          <li>
            <Link href="#">Career</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}