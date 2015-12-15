/*
This is empty on purpose! Your code to build the resume will go here.
 */
{
"bio": {
  "name" : "Keith Green",
"role" : "Junior Web Developer",
"contacts" : {
      "mobile": "646-236-5101",
      "email": "kegreen22@gmail.com",
      "github": "https://github.com/kegreen22",
      "twitter": "None",
      "location": "Brooklyn, New York"},
"welcomeMessage": "Welcome to my home page",
"skills": "Ruby, Ruby on Rails, HTML, CSS, SQL, Testing (RSpec).",
"biopic": "None",
"display": "function"}
}

var formattedName = HTMLheaderName.replace("%data", bio.name);
$("#name").append(formattedName);
// var headerrole

// var formattedContact = HTMLcontactGeneric.replace("%data%", bio.)
var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
// there is no unique id or class to use jquery to append/prepend
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.github);
var formattedLocation = HTMLlocation.replace("%data", bio.location);

var formattedWelcome = HTMLwelcomeMsg.replace("%data", bio.welcomeMessage);

// skills

{
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

{
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

{
	"education": {
		"education": {
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
	}
}


// Map info
// <div id=”mapDiv”>
$("#mapDiv").append(formattedLocation);
