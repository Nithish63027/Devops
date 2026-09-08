function StudentProfile({ student }) {
  return (
    <section className="student-profile">
      <h2>Student Profile</h2>

      <p>
        <strong>Name:</strong> {student.name}
      </p>

      <p>
        <strong>Roll Number:</strong> {student.rollNo}
      </p>

      <p>
        <strong>Department:</strong> {student.department}
      </p>

      <p>
        <strong>Year:</strong> {student.year}
      </p>
    </section>
  );
}

export default StudentProfile;