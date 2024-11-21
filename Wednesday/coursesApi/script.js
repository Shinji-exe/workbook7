"use strict";
const courseBody = document.getElementById("courseBody");
const cardSection = document.querySelector(".cardSection");
const urlParams = new URLSearchParams(location.search);

async function getData() {
  try {
    let fetching = fetch("http://localhost:8081/api/courses");
    let response = await fetching;
    let data = await response.json();
    console.log(data);
    getAllCourses(data);
    createCardsForDisplay(data);
  } catch (error) {
    console.log("Error code:", error);
  }
}
if (urlParams.has("courseid") === false) {
  getData();
} else {
  fetchSingleCourse();
}
function getAllCourses(courses) {
  courseBody.innerHTML = "";
  for (let i = 0; i < courses.length; i++) {
    let tableRow = courseBody.insertRow();

    let tableData = tableRow.insertCell();
    tableData.innerText = courses[i].id;

    let tableData2 = tableRow.insertCell();
    tableData2.innerText = courses[i].dept;

    let tableData3 = tableRow.insertCell();
    tableData3.innerText = courses[i].courseNum;

    let tableData4 = tableRow.insertCell();
    tableData4.innerText = courses[i].courseName;

    let tableData5 = tableRow.insertCell();
    tableData5.innerText = courses[i].instructor;

    let tableData6 = tableRow.insertCell();
    tableData6.innerText = courses[i].startDate;

    let tableData7 = tableRow.insertCell();
    tableData7.innerText = courses[i].numDays;

    let anchorTag = document.createElement("a");
    anchorTag.href = `details.html?courseid=${courses[i].id}`;
    anchorTag.innerText = "See More";

    let tableData8 = tableRow.insertCell();
    tableData8.appendChild(anchorTag);
  }
}

function createCardsForDisplay(courses) {
  for (let i = 0; i < courses.length; i++) {
    createCards(courses[i].courseName, courses[i].id, courses[i].dept, courses[i].startDate, courses[i].instructor);
  }
}

function createCards(courseName, courseNumber, department, startDate, instructor) {
  const cardContainers = document.createElement("div");
  cardContainers.className = "card";
  cardContainers.style.width = "18rem";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = courseName;

  const cardSubtitle = document.createElement("h6");
  cardSubtitle.className = "card-subtitle mb-2 text-body-secondary";
  cardSubtitle.textContent = `${courseNumber}, ${department}`;

  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.textContent = `Starts: ${startDate}, Instructor: ${instructor}`;

  const cardLink = document.createElement("a");
  cardLink.href = `details.html?courseid=${courseNumber}`;
  cardLink.innerText = `${courseName}`;

  cardBody.appendChild(cardLink);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubtitle);
  cardBody.appendChild(cardText);
  cardContainers.appendChild(cardBody);

  cardSection.appendChild(cardContainers);
}

async function fetchSingleCourse() {
  //Getting a single course with the id

  if (urlParams.has("courseid") === true) {
    let id = urlParams.get("courseid");
    // Now that you know the course id, make an
    // AJAX call to get that one course
    // and in the callback, display it.
    // Hint: you can create the URL you need for
    // the ajax request by concatenating
    // "http://localhost:8081pi/courses/" with the id!
    let fetching = fetch(`http://localhost:8081/api/courses/${id}`);
    let response = await fetching;
    let data = await response.json();
    console.log(data);
    getACourse(data);
    // createCardsForDisplay(data);
    getACardCourse(data);
  }
}

function getACourse(course) {
  courseBody.innerHTML = "";
  let tableRow = courseBody.insertRow();

  let tableData = tableRow.insertCell();
  tableData.innerText = course.id;

  let tableData2 = tableRow.insertCell();
  tableData2.innerText = course.dept;

  let tableData3 = tableRow.insertCell();
  tableData3.innerText = course.courseNum;

  let tableData4 = tableRow.insertCell();
  tableData4.innerText = course.courseName;

  let tableData5 = tableRow.insertCell();
  tableData5.innerText = course.instructor;

  let tableData6 = tableRow.insertCell();
  tableData6.innerText = course.startDate;

  let tableData7 = tableRow.insertCell();
  tableData7.innerText = course.numDays;

  let anchorTag = document.createElement("a");
  anchorTag.href = `details.html?courseid=${course.id}`;
  anchorTag.innerText = "See More";

  let tableData8 = tableRow.insertCell();
  tableData8.appendChild(anchorTag);
}

function getACardCourse(course) {
  // createCardsForDisplay(course)
  const cardContainers = document.createElement("div");
  cardContainers.className = "card";
  cardContainers.style.width = "18rem";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = course.courseName;

  const cardSubtitle = document.createElement("h6");
  cardSubtitle.className = "card-subtitle mb-2 text-body-secondary";
  cardSubtitle.textContent = `${course.courseNum}, ${course.dept}`;

  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.textContent = `Starts: ${course.startDate}, Instructor: ${course.instructor}`;

  const cardLink = document.createElement("a");
  cardLink.href = `details.html?courseid=${course.courseNum}`;
  cardLink.innerText = `${course.courseName}`;

  cardBody.appendChild(cardLink);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubtitle);
  cardBody.appendChild(cardText);
  cardContainers.appendChild(cardBody);

  cardSection.appendChild(cardContainers);
}
