import Link from "next/link";

export const metadata = {
  title: "About Us",
};

const AboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>The React Framework for the Web</h2>
      <p>
        Used by some of the world's largest companies, Next.js enables you to
        create full-stack Web applications by extending the latest React
        features, and integrating powerful Rust-based JavaScript tooling for the
        fastest builds.
      </p>
      <div className="link">
        <Link href={"https://nextjs.org/"} target={"_blank"}>
          Find out more...
        </Link>
      </div>
    </div>
  );
};
export default AboutPage;
