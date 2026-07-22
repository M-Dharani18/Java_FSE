export const courses = [
  {
    id: 1,
    cname: "React",
    duration: "30 Days"
  },
  {
    id: 2,
    cname: "Spring Boot",
    duration: "45 Days"
  }
];

export default function CourseDetails(props) {
  return (
    <div>
      <h1>Course Details</h1>
      {props.courses.map(course => (
        <div key={course.id}>
          <h3>{course.cname}</h3>
          <p>{course.duration}</p>
        </div>
      ))}
    </div>
  );
}