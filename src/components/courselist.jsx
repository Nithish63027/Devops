import Course from "./course";

function CourseList({ courses, onRegister, registeredCourses }) {
  return (
    <section id="courses">
      <h2>Available Courses</h2>

      <div className="course-list">
        {courses.map((course) => (
          <Course
            key={course.code}
            course={course}
            onRegister={onRegister}
            isRegistered={registeredCourses.some(
              (registeredCourse) =>
                registeredCourse.code === course.code
            )}
          />
        ))}
      </div>
    </section>
  );
}

export default CourseList;