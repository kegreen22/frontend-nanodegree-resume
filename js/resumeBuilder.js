/*
This is empty on purpose! Your code to build the resume will go here.
 */

// Bio
bio {
  "name" : "Keith Green"
"role" : string
contacts : an object with
      "mobile": "646-236-5101"
      "email": "kegreen22@gmail.com"
      "github": "https://github.com/kegreen22"
      "twitter": string
      "location": string
welcomeMessage: string
skills: array of strings
"biopic": url
display: function
}



// Work Experience
work {
  “jobs”:
     “employer”: “NYC Office of Management and Budget”,
     “title”: “Supervisory Analyst”,
     “location”: “New York, NY”,
     “dates”: “October 2006 – Current”,
     "description": "Monitor and analyze New York City human service agencies’ operational and financial activities."
display: function}


// Projects
projects {
"projects": [
      {"title": "Treble Interests",
      "dates": "Summer 2015",
      "description": "Ruby on Rails application that enables users to receive news and networking opportunities based on their interests.",
      "images": array with string urls}

      {"title": "CitySpring",
      "dates": "Summer 2014",
      "description": "Ruby on Rails application to help parents find NYC child resources (e.g., child care, programs, parks, etc.) by address."
      "images": array with string urls}

    ]
display: function
}


education {
  {"name": "University of Pittsburgh",
       "location": "Pittsburgh, PA",
       "degree": "MS in Information Systems, MBA",
       "majors": "Information Systems and Business Administration",
       "dates": "2001",
       "url": "pitt.edu"}
  "onlineCourses": [{
       “title”: “Rapid Prototyping with Ruby on Rails”,
      “ School”: “Launch School”,
       “date”: “Spring 2015”,
       “url”: “https://launchschool.com/”
     },
      {“title”: “Front-End Web Developer Nanodegree”,
      “ School”: “Udacity”,
       “date”: “Spring 2016”,
       “url”: “https://www.udacity.com”
     }
   ]
display: function
}
// Education



// Map info
// <div id=”mapDiv”>
$("#mapDiv").append(formattedLocation);
