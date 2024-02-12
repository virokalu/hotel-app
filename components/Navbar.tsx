import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="\hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link)=>(
          <Link href={link.href} key={link.key} className="regular-16 text-grey-50 flexCenter
            cursor-pointer pb-1.5 transition-all hover:font-bold">
             {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden gap-6">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          varient="btn_dark_green"
        />
        {/* <Button
          type="button"
          title="Register"
          icon="/user-plus.svg"
          varient="btn_white_text"
        /> */}
        <div className="flex">
          <Image src="globe.svg" alt="LAN" width={24} height={24}/>
          <select>
            <option selected value="english">EN</option>
          </select>
        </div>
      </div>
      
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar