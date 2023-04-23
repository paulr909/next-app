import Link from "next/link";
import Image from "next/image";

const Courses = ({ courses }) => {
  return (
    <div className="courses">
      {courses.map((course) => (
        <div key={course.id} className="card">
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <small>Level: {course.level}</small>
          <Link href={course.link} target="_blank" className="btn">
            Go To Course
          </Link>
          <Image
            src={course.image}
            width={course.width}
            height={course.height}
            alt="logo"
            className="brand-logo"
          />
        </div>
      ))}
    </div>
  );
};
export default Courses;
