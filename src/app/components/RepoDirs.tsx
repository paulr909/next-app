"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import React from "react"
import { RepoProps } from "@/interfaces/interfaces"
import { Content } from "@/interfaces/interfaces"

async function fetchRepoContents(name: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const response = await fetch(
    `https://api.github.com/repos/paulr909/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    },
  )
  return await response.json()
}

const RepoDirs = ({ name }: RepoProps) => {
  console.log("Name:", name)
  const [dirs, setDirs] = useState<Content[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const contents = await fetchRepoContents(name)
      console.log("Contents:", contents)
      if (Array.isArray(contents)) {
        const dirs = contents.filter(
          (content: Content) => content.type === "dir",
        )
        setDirs(dirs)
      } else {
        console.error("Expected contents to be an array, received:", contents)
      }
    }

    fetchData().then()
  }, [name])

  if (!dirs) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {Array.isArray(dirs) &&
          dirs.map((dir: Content) => (
            <li key={dir.path}>
              <Link
                href={`https://github.com/paulr909/${name}`}
                target={"_blank"}
              >
                {dir.path}
              </Link>
            </li>
          ))}
      </ul>
    </>
  )
}

export default RepoDirs
