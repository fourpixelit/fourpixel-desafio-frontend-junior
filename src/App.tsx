
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../src/components/header';
import Profile from '../src/pages/profile';
import Footer from '../src/components/footer';

import GlobalStyles from '../src/styles/GlobalStyles';



function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={ <Profile/> }/>
        <Route path="/:username" element={ <Profile/> }/>
        

      </Routes>

      <Footer/>
      <GlobalStyles/>
    </BrowserRouter>
  );
}





export default App;
