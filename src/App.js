import './App.css';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import AboutMe from './component/About/About';
import Resume from './component/Resume/Resume'
import 'bootstrap/dist/css/bootstrap.min.css';
import Work from './component/Work/Work';
import ContactForm from './component/ContactForm/ContactForm'
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Resume/>
      <Work/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
