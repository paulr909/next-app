import Link from "next/link";

export const metadata = {
  title: "Our Team",
};

const TeamPage = () => {
  return (
    <div>
      <h1>Our Team</h1>
      <h2>The web framework for when it matters</h2>
      <p>
        Peerless performance, efficiency and developer experience. Next.js is
        trusted by some of the biggest names of the web.
      </p>
      <div className="link">
        <Link href={"https://nextjs.org/"} target={"_blank"}>
          Find out more...
        </Link>
      </div>
    </div>
  );
};
export default TeamPage;
