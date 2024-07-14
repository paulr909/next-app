import { NextResponse } from "next/server"
import courses from "../data.json"
import { NextRequest } from "next/server.js"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("query")
  const filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(<string>query?.toLowerCase())
  })
  return NextResponse.json(filteredCourses)
}
