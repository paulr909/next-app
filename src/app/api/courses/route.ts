import { NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid"
import rawCourses from "./data.json"
import { NextRequest } from "next/server.js"
import { Course } from "@/interfaces/interfaces"

// Assign the imported JSON data to a variable with correct type
const courses: Course[] = rawCourses.map((course) => ({
  ...course,
  id: course.id.toString(),
}))

export async function GET(request: NextRequest): Promise<NextResponse> {
  return NextResponse.json(courses)
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const courseDetails = await request.json()

  const newCourse: Course = {
    id: uuidv4(),
    ...courseDetails,
  }

  courses.push(newCourse)

  return NextResponse.json(courses)
}
