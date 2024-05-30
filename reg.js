// Course Database
let courses = [
    { code: 'CS101', title: 'Intro to Computer Science', description: 'Basics of computer science', capacity: 30, schedule: 'MWF 9-10am', enrolled: 0 },
    { code: 'MATH101', title: 'Calculus I', description: 'Introduction to Calculus', capacity: 25, schedule: 'TTh 11-12:30pm', enrolled: 0 },
    { code: 'ENG101', title: 'English Literature', description: 'Study of English literature', capacity: 20, schedule: 'MWF 10-11am', enrolled: 0 }
];

// Student Database
let students = [];

// Display Available Courses
function displayCourses() {
    let courseListDiv = document.getElementById('course-list');
    courseListDiv.innerHTML = '<table><tr><th>Code</th><th>Title</th><th>Description</th><th>Capacity</th><th>Schedule</th><th>Available Slots</th></tr>';
    courses.forEach(course => {
        courseListDiv.innerHTML += `<tr>
            <td>${course.code}</td>
            <td>${course.title}</td>
            <td>${course.description}</td>
            <td>${course.capacity}</td>
            <td>${course.schedule}</td>
            <td>${course.capacity - course.enrolled}</td>
        </tr>`;
    });
    courseListDiv.innerHTML += '</table>';
}

// Register a Student
function registerStudent() {
    let studentId = document.getElementById('student-id').value;
    let studentName = document.getElementById('student-name').value;
    if (studentId && studentName) {
        students.push({ id: studentId, name: studentName, registeredCourses: [] });
        alert(`Student ${studentName} registered successfully.`);
    } else {
        alert('Please enter both student ID and name.');
    }
}

// Register for a Course
function registerForCourse() {
    let studentId = document.getElementById('reg-student-id').value;
    let courseCode = document.getElementById('course-code').value;
    let student = students.find(s => s.id === studentId);
    let course = courses.find(c => c.code === courseCode);

    if (student && course) {
        if (course.enrolled < course.capacity) {
            if (!student.registeredCourses.includes(courseCode)) {
                student.registeredCourses.push(courseCode);
                course.enrolled += 1;
                alert(`Registered for course ${courseCode} successfully.`);
                displayCourses();
            } else {
                alert('Student is already registered for this course.');
            }
        } else {
            alert('Course is full.');
        }
    } else {
        alert('Invalid student ID or course code.');
    }
}

// Drop a Course
function dropCourse() {
    let studentId = document.getElementById('drop-student-id').value;
    let courseCode = document.getElementById('drop-course-code').value;
    let student = students.find(s => s.id === studentId);
    let course = courses.find(c => c.code === courseCode);

    if (student && course) {
        let index = student.registeredCourses.indexOf(courseCode);
        if (index !== -1) {
            student.registeredCourses.splice(index, 1);
            course.enrolled -= 1;
            alert(`Dropped course ${courseCode} successfully.`);
            displayCourses();
        } else {
            alert('Student is not registered for this course.');
        }
    } else {
        alert('Invalid student ID or course code.');
    }
}

// Display Student Information
function displayStudentInfo() {
    let studentInfoDiv = document.getElementById('student-info');
    studentInfoDiv.innerHTML = '<h3>Registered Students</h3>';
    students.forEach(student => {
        studentInfoDiv.innerHTML += `<p>ID: ${student.id}, Name: ${student.name}, Courses: ${student.registeredCourses.join(', ')}</p>`;
    });
}

// Initial Display of Courses
displayCourses();
setInterval(displayStudentInfo, 1000);
