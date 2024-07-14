export interface Course {
  id: string
  title: string
  description: string
  link: string
  level: string
  image: string
  width: number
  height: number
}

export interface CourseProps {
  courses: Course[]
}

export interface CourseSearchProps {
  getSearchResults: (courses: Course[]) => void
}

export interface Content {
  path: string | undefined
  type: string
}

export interface Repo {
  id: string
  name: string
  description: string
  stargazers_count: number
  forks_count: number
  watchers_count: number
}

export interface RepoProps {
  name: string
}
