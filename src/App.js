import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from './pages/header/header.component';
import HomePage from './pages/homePage/homePage.component';
import About from './pages/about/about.component';
import Services from './pages/services/services.component';
import Pricing from './pages/pricing/pricing.component';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import DisplayUser from './pages/Display/DisplayUser';


function App() {
  return (
    <div className="App">
        <Header/>
        
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/service' element={<Services/>}/>
            <Route path='/pricing' element={<Pricing/>}/>
            <Route path='/login' element={<SignIn/>}/>
            <Route path='/signUp' element={<SignUp/>}/>
            <Route path='/display' element={<DisplayUser/>}/>
        </Routes>
    </div>
  );
}

export default App;
