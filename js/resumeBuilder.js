/*
This is empty on purpose! Your code to build the resume will go here.
 */

{ "bio": {
  "name" : "Keith Green",
"role" : "Junior Web Developer",
"contacts" : {
      "mobile": "646-236-5101",
      "email": "kegreen22@gmail.com",
      "github": "https://github.com/kegreen22",
      "twitter": "None",
      "location": "Brooklyn, New York"},
"welcomeMessage": "Welcome to my home page",
"skills": "Ruby, Ruby on Rails, HTML, CSS, SQL, Testing (RSpec)",
"biopic": "/images/Kgreen1.jpg",
"display":
  (function () {
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#name").append(formattedName);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#mobile").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#email").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#github").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#location").append(formattedLocation);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
$("#skills").append(formattedSkills);
var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
$(".biopic").append(formattedBiopic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$(".welcome-message").append(formattedWelcome);
})();
}
}

// skills

var mywork = {
"work": {
  "jobs": [
    {"employer": "NYC Office of Management and Budget",
    "title": "Supervisory Analyst",
    "location": "New York, NY",
    "dates": "October 2006 - Current",
    "description": "Monitor and analyze New York City human service agencies' operational and financial activities."}
     ],
"display": "function"}
}
function mywork() {
  //work information
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);
$(".work-entry:last").append(formattedWorkEmployer);

var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[0].title);
$(".work-entry:last").append(formattedWorkTitle);

var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[0].dates);
$(".work-entry:last").append(formattedWorkDates);

var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[0].location);
$(".work-entry:last").append(formattedWorkLocation);

var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[0].description);
$(".work-entry:last").append(formattedWorkDescription);
}
mywork();


var myprojects = {
"projects": {
"projects": [
      {"title": "Treble Interests - Located at: treble-interests.herokuapp.com",
      "dates": "Summer 2015",
      "description": "Ruby on Rails application that enables users to receive news and networking opportunities based on their interests.",
      "images": "array with string urls"},

      {"title": "CitySpring - Located at: cityspring.herokuapp.com",
      "dates": "Summer 2014",
      "description": "Ruby on Rails application to help parents find NYC child resources (e.g., child care, programs, parks, etc.) by address.",
      "images": "array with string urls"}
    ],
    "display": "function"}
}
    function myprojects() {
      // projects
      for (var i = 0; i < projects.length; i++)
      {
var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
$(".project-entry:last").append(formattedProjectTitle);

var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
$(".project-entry:last").append(formattedProjectDates);  // or maybe use div - "date-text

var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
$(".project-entry:last").append(formattedProjectDescription);

var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
$(".project-entry:last").append(formattedProjectImage);
    }}
    myprojects();


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
		"display": "function"
	}}

function myeducation() {
  // education
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
var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[0].title);
$(".education-entry:last").append(formattedOnlineTitle);

var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[0].school);
$(".education-entry:last").append(formattedOnlineSchool);

var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[0].date);
$(".education-entry:last").append(formattedOnlineDates);

var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineURL[0].url);
$(".education-entry:last").append(formattedOnlineURL);
}
myeducation();







// Map info
// <div id=”mapDiv”>
$("#mapDiv").append(formattedLocation);
