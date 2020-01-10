import React from 'react';
import './App.css';

import Name from './Components/Name/Name';
import Image from './Components/Image/Image';
import About from './Components/About/About';
import Section from './Components/Section/Section';
import SectionItem from './Components/SectionItem/SectionItem';
import Footer from './Components/Footer/Footer';

function App() {

  // To modify the website title (what is displayed on the browser tab), navigate to public/index.html, and modify line 27.
  const fullName = "Your Name";
  const imageAddress = ""; /* Example: "./logo.jpeg" */
  const aboutDescription = "Enter a short description about yourself here. For example, you could do a short overview of your education, experience, interests, and something about yourself you think others might find interesting.";

  // Education Section Props:
  const schoolLogo = "";
  const schoolName = "School Name";
  const schoolDescription = "Major, Year-Year, etc.";

  return (
    <div className="App">
      
      {/* Your Name (Under Components/Name/Name.js) */}
      <Name fullName={fullName} />

      {/* Your Image */}
      <Image imageAddress={imageAddress} />

      <div id="mainTextContainer">
        {/* Short Description About You */}
        <About aboutDescription={aboutDescription} />

        {/* Your Education */}
        <Section sectionName={"Education"} />
        <SectionItem itemImageAddress={schoolLogo} itemName={schoolName} itemDescription={schoolDescription}/>

        {/* Your Experience */}
        <Section sectionName={"Experience"} />

        {/* Your Projects */}
        <Section sectionName={"Projects"} />

        {/* Your Skills */}
        <Section sectionName={"Skills"} />

        {/* Other */}
        {/* <Section sectionName={"Other Activities"} /> */}

        {/* Add More Sections Here As You Please! */}

        {/* Social Media Icons */}
        <Section sectionName={"Contact Me"} />
      </div>

      <Footer fullName={fullName} />
    </div>
  );
}

export default App;
