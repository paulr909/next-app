import Link from "next/link";
import Image from "next/image";
import nextLogo from "../../public/next.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <Image src={nextLogo} width={200} height={70} alt="logo" />
          </Link>
        </div>
        <div className="links">
          <Link href="/about">About</Link>
          <Link href="/about/team">Our Team</Link>
          <Link href="/code/repos">Code</Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
