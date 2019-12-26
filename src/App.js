import React from 'react';
import './App.css';

import Name from './Components/Name/Name';
import Image from './Components/Image/Image';

function App() {
  return (
    <div className="App">
      
      {/* Your Name (Under Components/Name/Name.js) */}
      <Name fullName={"Your Name"} />

      {/* Your Image */}
      <Image imageAddress={"./logo.jpeg"} />

      {/* Short Description About You */}

      {/* Your Education */}

      {/* Your Experience */}

      {/* Your Projects */}

      {/* Your Skills */}

      {/* Other */}

      {/* Social Media Icons */}

    </div>
  );
}

export default App;
