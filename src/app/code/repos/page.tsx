import Link from "next/link"
import { FaCodeBranch, FaEye, FaStar } from "react-icons/fa"
import { Repo } from "@/interfaces/interfaces"
export const metadata = {
  title: "Code Repositories",
}

async function fetchRepos() {
  const response = await fetch("https://api.github.com/users/paulr909/repos", {
    next: {
      revalidate: 60,
    },
  })

  await new Promise((resolve) => setTimeout(resolve, 1000)) // Wait 1 second

  return await response.json()
}

const ReposPage = async () => {
  const repos = await fetchRepos()

  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {Array.isArray(repos) &&
          repos.map((repo: Repo) => (
            <li key={repo.id}>
              <Link href={`/code/repos/${repo.name}`}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <div className="repo-details">
                  <span>
                    <FaStar /> {repo.stargazers_count}
                  </span>
                  <span>
                    <FaCodeBranch /> {repo.forks_count}
                  </span>
                  <span>
                    <FaEye /> {repo.watchers_count}
                  </span>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}
export default ReposPage
