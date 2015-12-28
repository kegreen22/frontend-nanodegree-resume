/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name" : "Keith Green",
"role" : "Junior Web Developer",
"contacts" : {
      "mobile": "646-236-5101",
      "email": "kegreen22@gmail.com",
      "github": "https://github.com/kegreen22",
      "twitter": "None",
      "location": "Brooklyn, New York"},
"welcomeMessage": "Welcome to my home page",
"skills": ["Ruby", " Ruby on Rails", " HTML", " CSS", " SQL", " Testing (RSpec)"],
"biopic": "images/Kgreen2.jpg",
"display":
  function () {
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
$("#header").append(formattedSkills);
var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBiopic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#topContacts").append(formattedWelcome);
}
};
bio.display();


var work = {
  "jobs":
    {"employer": "NYC Office of Management and Budget",
    "title": "Supervisory Analyst",
    "location": "New York, NY",
    "dates": "October 2006 - Current",
    "description": "Monitor and analyze New York City human service agencies' operational and financial activities."},
    "display": function () {
  //work information
  $("#workExperience").append(HTMLworkStart);
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs.employer);
$(".work-entry:last").append(formattedWorkEmployer);

var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs.title);
$(".work-entry:last").append(formattedWorkTitle);

var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs.dates);
$(".work-entry:last").append(formattedWorkDates);

var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs.location);
$(".work-entry:last").append(formattedWorkLocation);

var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs.description);
$(".work-entry:last").append(formattedWorkDescription);
}
};
work.display();


var projects = {
"projects": [
      {"title": "Treble Interests - Located at: treble-interests.herokuapp.com",
      "dates": "Summer 2015",
      "description": "Ruby on Rails application that enables users to receive news and networking opportunities based on their interests.",
      "images": ""},

      {"title": "CitySpring - Located at: cityspring.herokuapp.com",
      "dates": "Summer 2014",
      "description": "Ruby on Rails application to help parents find NYC child resources (e.g., child care, programs, parks, etc.) by address.",
      "images": ""}
    ],
    "display": function () {
      // projects
      for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
      {
var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
$(".project-entry:last").append(formattedProjectTitle);

var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
$(".project-entry:last").append(formattedProjectDates);  // or maybe use div - "date-text

var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
$(".project-entry:last").append(formattedProjectDescription);

var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
$(".project-entry:last").append(formattedProjectImage);
    }}}};

  projects.display();



// education
var education = {
		"schools": {
			"name": "University of Pittsburgh",
			"location": "Pittsburgh, PA",
			"degree": "MS in Information Systems, MBA",
			"majors": "Information Systems and Business Administration",
			"dates": "2001",
			"url": "http://www.pitt.edu/"
		},
		"onlineCourses": [{
			"title": "Rapid Prototyping with Ruby on Rails",
			"school": "Launch School",
			"date": "2015",
			"url": "https://launchschool.com"
		}, {
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"date": "2016",
			"url": "https://www.udacity.com"
		}],
		"display": function () {
   //   for (school in education.schools) {
      $("#education").append(HTMLschoolStart);
var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools.name);
$(".education-entry:last").append(formattedSchoolName);

var formattedSchoolDegree = HTMLschoolName.replace("%data%", education.schools.degree);
$(".education-entry:last").append(formattedSchoolDegree);

var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools.dates);
$(".education-entry:last").append(formattedSchoolDates);

var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools.location);
$(".education-entry:last").append(formattedSchoolLocation);

var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools.majors);
$(".education-entry:last").append(formattedSchoolMajor);


// online education
for (course in education.onlineCourses) {
$("#education").append(HTMLschoolStart);
var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
$(".education-entry:last").append(formattedOnlineTitle);

var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
$(".education-entry:last").append(formattedOnlineSchool);

var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
$(".education-entry:last").append(formattedOnlineDates);

var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
$(".education-entry:last").append(formattedOnlineURL);
}
}};
education.display();






// Map info
//<div id=”mapDiv”>
$("#mapDiv").append(bio.display.formattedLocation);
