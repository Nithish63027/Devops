import { useState } from "react";

import StudentProfile from "../components/studentprofile";
import CourseList from "../components/courselist";
import Registration from "../components/registration";

function Home() {
  // Student information
  const student = {
    name: "Nithish Raj",
    rollNo: "SRU2027CSE001",
    department: "Computer Science and Engineering",
    year: "3rd Year"
  };

  // Available courses
  const courses = [
    {
      code: "CS301",
      name: "Data Structures and Algorithms",
      department: "CSE",
      credits: 4
    },
    {
      code: "CS302",
      name: "Database Management Systems",
      department: "CSE",
      credits: 4
    },
    {
      code: "CS303",
      name: "Operating Systems",
      department: "CSE",
      credits: 3
    },
    {
      code: "CS304",
      name: "Computer Networks",
      department: "CSE",
      credits: 3
    },
    {
      code: "AI301",
      name: "Artificial Intelligence",
      department: "AI",
      credits: 4
    },
    {
      code: "EC301",
      name: "Digital Electronics",
      department: "ECE",
      credits: 3
    }
  ];

  // State for registered courses
  const [registeredCourses, setRegisteredCourses] = useState([]);

  // State for search
  const [search, setSearch] = useState("");

  // State for department filter
  const [department, setDepartment] = useState("All");

  // Register a course
  function registerCourse(course) {
    setRegisteredCourses((previousCourses) => [
      ...previousCourses,
      course
    ]);
  }

  // Remove a course
  function removeCourse(courseCode) {
    setRegisteredCourses((previousCourses) =>
      previousCourses.filter(
        (course) => course.code !== courseCode
      )
    );
  }

  // Search and department filtering
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" ||
      course.department === department;

    return matchesSearch && matchesDepartment;
  });

  return (
    <main className="container">

      {/* Student information */}
      <StudentProfile student={student} />

      {/* Search and filter */}
      <section className="filters">
        <h2>Find Courses</h2>

        <input
          type="text"
          placeholder="Search course name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="All">All Departments</option>
          <option value="CSE">CSE</option>
          <option value="AI">AI</option>
          <option value="ECE">ECE</option>
        </select>
      </section>

      {/* Available courses */}
      <CourseList
        courses={filteredCourses}
        onRegister={registerCourse}
        registeredCourses={registeredCourses}
      />

      {/* Registered courses */}
      <Registration
        registeredCourses={registeredCourses}
        onRemove={removeCourse}
      />

    </main>
  );
}

export default Home;