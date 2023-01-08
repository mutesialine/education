import Image from "next/image"
import Link from "next/link"
export default function Tag({title}){
  <div>
    <p>
      <Link href="#">{title}</Link>
    </p>
      <Link><Image  src={leftArrow} alt="left arrow"/></Link>
  </div>
}