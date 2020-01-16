import React from 'react';
import './App.css';

import Name from './Components/Name/Name';
import Image from './Components/Image/Image';
import About from './Components/About/About';
import Section from './Components/Section/Section';
import Footer from './Components/Footer/Footer';
import SectionItem from './Components/SectionItem/SectionItem';

// Import your section item images here:
// i.e. import schoolLogo from './SectionItemImagers/schoolLogo.jpg';
import schoolLogo from './SectionItemImages/schoolLogo.jpg';
import workLogo from './SectionItemImages/workLogo.jpg';
import projectLogo from './SectionItemImages/projectLogo.jpg';

// DOWNLOAD social media icons here: https://iconmonstr.com/
// and
// Import your social Media Icons here:
// i.e. import linkedIn from './SocialMediaIcons/linkedin.svg';
import github from './SocialMediaIcons/github.png';
import gmail from './SocialMediaIcons/gmail.png';
import linkedin from './SocialMediaIcons/linkedin.png'

function App() {

  // To modify the website title (what is displayed on the browser tab), navigate to public/index.html, and modify line 27.
  const fullName = "Your Name";
  // Put the image that you want to be display as your main photo under the following: /src/Components/Image/ and name it "Profile.jpg"
  // USE A 1:1 IMAGE, AKA Square Cropped IMAGE for ALL Images on this website
  const aboutDescription = "Enter a short description about yourself here. For example, you could do a short overview of your education, experience, interests, and something about yourself you think others might find interesting.";

  // Education Section Props:
  const schools = [
    {
      logo: schoolLogo,
      name: "School Name",
      description: "Major, Year-Year, etc.",
      link: "" // You do not need to fill in a link, only put one if you want
    },
  ]

  // Experience Section Props:
  const experiences = [
    {
      logo: workLogo,
      name: "Work Name",
      description: "Position, Starting Date-Present/Ending Date, etc.",
      link: "" // You do not need to fill in a link, only put one if you want
    },
  ]

  // Projects Section Props:
  const projects = [
    {
      logo: projectLogo,
      name: "Project Name",
      description: "Project Description",
      link: "https://google.com/" // You do not need to fill in a link, only put one if you want
    },
    {
      logo: projectLogo,
      name: "Project Name",
      description: "Project Description",
      link: "https://google.com/" // You do not need to fill in a link, only put one if you want
    },
    {
      logo: projectLogo,
      name: "Project Name",
      description: "Project Description",
      link: "https://google.com/" // You do not need to fill in a link, only put one if you want
    },
  ]

  // Skills Section Props:
  const skills = [
    {
      name: "Web",
      description: "HTML, CSS, JavaScript, ReactJS",
    }
  ]

  const contactMe = [
    {
      logo: github,
      url: "https://www.github.com/rashbalash"
    },
    {
      logo: linkedin,
      url: "https://www.linkedin.com/in/rashadbalashov/"
    },
    {
      logo: gmail,
      url: "https://www.gmail.com"
    }
  ]

  // Add More Sections as you like, create more props here


  // UNLESS YOU WANT TO ADD MORE SECTIONS THERE IS NOTHING TO EDIT BEYOND THIS POINT

  const renderEducation = (schools) => {
    if (schools.length === 0) {
      return null;
    }
    return (
      <>
        <Section sectionName={"Education"} />
        {
          schools.map(school => {
            return <SectionItem
              itemImageAddress={school.logo}
              itemName={school.name}
              itemDescription={school.description}
              itemLink={school.link} />
          })
        }
      </>
    );
  }

  const renderExperience = (experiences) => {
    if (experiences.length === 0) {
      return null;
    }
    return (
      <>
        <Section sectionName={"Experience"} />
        {
          experiences.map(experience => {
            return <SectionItem
              itemImageAddress={experience.logo}
              itemName={experience.name}
              itemDescription={experience.description}
              itemLink={experience.link} />
          })
        }
      </>
    );
  }

  const renderProjects = (projects) => {
    if (projects.length === 0) {
      return null;
    }
    return (
      <>
        <Section sectionName={"Projects"} />
        {
          projects.map(project => {
            return <SectionItem
              itemImageAddress={project.logo}
              itemName={project.name}
              itemDescription={project.description}
              itemLink={project.link} />
          })
        }
      </>
    );
  }

  const renderSkills = (skills) => {
    if (skills.length === 0) {
      return null;
    }
    return (
      <>
        <Section sectionName={"Skills"} />
        {
          skills.map(skill => {
            return <SectionItem
              itemImageAddress={skill.logo}
              itemName={skill.name}
              itemDescription={skill.description}
              itemLink={skill.link} />
          })
        }
      </>
    );
  }

  const renderSocialIcons = (contactMe) => {
    if (contactMe.length === 0) {
      return null;
    }
    return (
      <>
        <Section sectionName={"Contact Me"} />
        <div id="socialIconContainer">
        {
          contactMe.map(contact => {
            return <a
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer">
                  <img 
                    className="socialIcon"
                    src={contact.logo}
                    alt="socialIcon" />
                </a>            
          })
        }
        </div>
      </>
    )
  }

  return (
    <div className="App">
      
      {/* Your Name (Under Components/Name/Name.js) */}
      <Name fullName={fullName} />

      {/* Your Image */}
      <Image />

      <div id="mainTextContainer">
        {/* Short Description About You */}
        <About aboutDescription={aboutDescription} />

        {/* Your Education */}
        {renderEducation(schools)}

        {/* Your Experience */}
        {renderExperience(experiences)}

        {/* Your Projects */}
        {renderProjects(projects)}

        {/* Your Skills */}
        {renderSkills(skills)}

        {/* Other */}
        {/* {renderOther(otherActivities)} */}

        {/* Add More Sections Here As You Please! */}

        {/* Social Media Icons */}       
        {renderSocialIcons(contactMe)}
      </div>
      <Footer fullName={fullName} />
    </div>
  );
}

export default App;
