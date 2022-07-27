import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/*" element={ <h1 style={{textAlign: 'center'}}>UPSSS ALGO SALIO MAL !</h1>} />
        </Routes>
      </Router>
  );
}

export default App;
