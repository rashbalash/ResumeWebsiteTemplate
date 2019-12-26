import React from 'react';
import './App.css';

import Name from './Components/Name/Name';
import Image from './Components/Image/Image';
import About from './Components/About/About';

function App() {

  const fullName = "Your Name";
  const imageAddress = ""; /* Example: "./logo.jpeg" */
  const aboutDescription = "Enter a short description about yourself here. For example, you could do a short overview of your education, experience, and something interesting about yourself.";

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
        {/* <Section sectionName={"Education"} /> */}

        {/* Your Experience */}
        {/* <Section sectionName={"Experience"} /> */}

        {/* Your Projects */}
        {/* <Section sectionName={"Projects"} /> */}

        {/* Your Skills */}
        {/* <Section sectionName={"Skills"} /> */}

        {/* Other */}
        {/* <Section sectionName={"Other/Miscellaneous"} /> */}

        {/* Social Media Icons */}
        {/* <Section sectionName={"Contact Me"} /> */}

      </div>
    </div>
  );
}

export default App;
