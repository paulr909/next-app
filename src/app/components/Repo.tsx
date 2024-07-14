import { FaCodeBranch, FaEye, FaStar } from "react-icons/fa"
import { RepoProps } from "@/interfaces/interfaces"

async function fetchRepo(name: string) {
  const response = await fetch(
    `https://api.github.com/repos/paulr909/${name}`,
    {
      next: {
        revalidate: 60,
      },
    },
  )
  return await response.json()
}

const Repo = async ({ name }: RepoProps) => {
  const repo = await fetchRepo(name)

  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  )
}
export default Repo
