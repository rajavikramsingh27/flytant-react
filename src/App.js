
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from './Views/Home'
import Blogs from './Views/Blogs'
import About from './Views/About'
import Career from './Views/Career'
import Contact from './Views/Contact'
import Terms from './Views/Terms'
import Ads from './Views/Ads'
import Privacy from './Views/Privacy'
import Media from './Views/Media'
import Account from './Views/Account'
import GridResponsive from './Views/GridResponsive'







function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/About" element={<About />} /> 
         <Route path="/Career" element={<Career />} />
         <Route path="/Contact" element={<Contact />} />
          <Route path="/Terms" element={<Terms />} />
           <Route path="/Ads" element={<Ads />} />
           <Route path="/Privacy" element={<Privacy />} /> 
           <Route path="/Media" element={<Media />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/" element={< GridResponsive />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
