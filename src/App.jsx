import React from 'react';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import WorkEx from './Components/WorkEx';

function App() {

  return (
   <div style={{fontFamily: "Arial ,sans-serif" ,padding:"10px"}}>
      <header style={{textAlign:"center",margin: "20px"}} >
      <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-622.jpg?semt=ais_hybrid_sidr"  />
      <h1>Jane Doe</h1>
      <p>A pasionate web developer who loves creating beautiful UIs</p>
    </header>
    <Contact/>
    <Skills/>
    <WorkEx/>
   </div>
  );
}

export default App;
