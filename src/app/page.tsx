"use client"
import { useEffect, useState } from "react"
import Courses from "@/app/components/Courses"
import CourseSearch from "@/app/components/CourseSearch"
import Loading from "@/app/loading"
import { Course } from "@/interfaces/interfaces"

const HomePage = () => {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses")
      const data = await res.json()
      setCourses(data)
      setLoading(false)
    }

    fetchCourses().then()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="mt-6">
      <h1 className="mb-2">Welcome</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </div>
  )
}
export default HomePage
