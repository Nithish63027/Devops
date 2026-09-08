function Registration({ registeredCourses, onRemove }) {
  const totalCredits = registeredCourses.reduce(
    (total, course) => total + course.credits,
    0
  );

  return (
    <section className="registration" id="registration">
      <h2>Registered Courses</h2>

      {registeredCourses.length === 0 ? (
        <p>No courses registered yet.</p>
      ) : (
        <>
          {registeredCourses.map((course) => (
            <div className="registered-course" key={course.code}>
              <div>
                <h3>{course.name}</h3>

                <p>
                  {course.code} | {course.credits} Credits
                </p>
              </div>

              <button onClick={() => onRemove(course.code)}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total Credits: {totalCredits}</h3>
        </>
      )}
    </section>
  );
}

export default Registration;