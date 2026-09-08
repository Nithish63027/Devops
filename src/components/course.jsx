function Course({ course, onRegister, isRegistered }) {
  return (
    <div className="course-card">
      <h3>{course.name}</h3>

      <p>
        <strong>Course Code:</strong> {course.code}
      </p>

      <p>
        <strong>Department:</strong> {course.department}
      </p>

      <p>
        <strong>Credits:</strong> {course.credits}
      </p>

      <button
        onClick={() => onRegister(course)}
        disabled={isRegistered}
      >
        {isRegistered ? "Registered" : "Register"}
      </button>
    </div>
  );
}

export default Course;