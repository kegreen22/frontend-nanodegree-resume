/*
This is empty on purpose! Your code to build the resume will go here.
 */

// Bio
bio {
  name : string
role : string
contacts : an object with
      mobile: string
      email: string
      github: string
      twitter: string
      location: string
welcomeMessage: string
skills: array of strings
biopic: url
display: function
}



// Work Experience
work {
  jobs: array of objects with
     employer: string
     title: string
     location: string
     dates: string (works with a hyphen between them)
     description: string
display: function

function myWorkExperience() {

}
}

// Projects
projects {
projects: array of objects with
      title: string
      dates: string (works with a hyphen between them)
      description: string
      images: array with string urls
display: function

function myProjects() {

}
}

education {
schools: array of objects with
     name: string
     location: string
     degree: string
     majors: array of strings
     dates: integer (graduation date)
     url: string
onlineCourses: array of objects with
     title: string
     school: string
     date: integer (date finished)
     url: string
display: function

// Education
function myEducation() {

}
}



// Map info
// <div id=”mapDiv”>
$("#mapDiv").append(formattedLocation);