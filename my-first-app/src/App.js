// src/App.js
import './App.css';


import NavBar from   './components/NavBar' ;
import Button from './components/Button'
import Title from './components/Title'

import Paragraph from './components/Paragraph'

import Icons from './components/Icons'




function App() {
  return (
    <div className="App">
   
    <div class='mainDiv'>

   
    
    <div  class="whiteFount">
    <NavBar />
    <Title />
    <Paragraph />
    </div>



    <div>
    <Button />
    </div>
    
   


    </div>
 

    {/* <div class="iconsDiv"> */}
      {/* <div > */}
        
        < Icons  />
        
        {/* </div> */}
    

    </div>

    // </div>
  );
}
export default App;