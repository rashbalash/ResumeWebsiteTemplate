import React from 'react';
import './App.css';

import Name from './Components/Name/Name';
import Image from './Components/Image/Image';
import About from './Components/About/About';
import Section from './Components/Section/Section';
import SectionItem from './Components/SectionItem/SectionItem';
import Footer from './Components/Footer/Footer';

// Import your section item images here:
// i.e. import schoolLogo from './SectionItemImagers/schoolLogo.jpg';
import schoolLogo from './Components/Image/Profile.jpg';

// DOWNLOAD social media icons here: https://iconmonstr.com/
// and
// Import your social Media Icons here:
// i.e. import linkedIn from './SocialMediaIcons/linkedin.svg';
import github from './SocialMediaIcons/github.png';

function App() {

  // To modify the website title (what is displayed on the browser tab), navigate to public/index.html, and modify line 27.
  const fullName = "Your Name";
  // Put the image that you want to be display as your main photo under the following: /src/Components/Image/ and name it "Profile.jpg"
  // USE A 1:1 IMAGE, AKA Square Cropped IMAGE for ALL Images on this website
  const aboutDescription = "Enter a short description about yourself here. For example, you could do a short overview of your education, experience, interests, and something about yourself you think others might find interesting.";

  // Education Section Props:
  const schoolName = "School Name";
  const schoolDescription = "Major, Year-Year, etc. Major, Year-Year, etc. Major, Year-Year, etc.";

  // Experience Section Props:


  // Projects Section Props:

  // Skills Section Props:
  const skillCategory = "Web";
  const skillItems = "HTML, CSS, JavaScript, ReactJS"

  // Add More Sections as you like, create more props here

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
        <Section sectionName={"Education"} />
        <SectionItem itemImageAddress={schoolLogo} itemName={schoolName} itemDescription={schoolDescription}/>

        {/* Your Experience */}
        <Section sectionName={"Experience"} />
        {/* <SectionItem itemImageAddress={workLogo} itemName={workName} itemDescription={workDescription} /> */}

        {/* Your Projects */}
        <Section sectionName={"Projects"} />
        {/* <SectionItem itemImageAddress={projectLogo} itemName={projectName} itemDescription={projectDescription} /> */}

        {/* Your Skills */}
        <Section sectionName={"Skills"} />
        <SectionItem itemName={skillCategory} itemDescription={skillItems} />

        {/* Other */}
        {/* <Section sectionName={"Other Activities"} /> */}

        {/* Add More Sections Here As You Please! */}

        {/* Social Media Icons */}
        <Section sectionName={"Contact Me"} />

        <div id="socialIconContainer">
          {/* TO ADD A NEW ICON, ONLY CHANGE URL AND src={} TO THE ICON YOU WANT */}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><img className="socialIcon" src={github} alt="socialIcon" /></a>
        </div>

      </div>

      <Footer fullName={fullName} />
    </div>
  );
}

export default App;
